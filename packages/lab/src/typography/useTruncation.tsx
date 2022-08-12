import {
  debounce,
  useForkRef,
  useIsomorphicLayoutEffect,
  polymorphicRef,
} from "@jpmorganchase/uitk-core";
import { useCallback, useRef, useState, ElementType } from "react";
import { TextProps } from "../typography";
import { getComputedStyles } from "./getComputedStyles";

// this guards against text undeline which adds 1px on scrollHeight
const VELOCITY = 1;

export const useTruncation = (
  {
    children,
    maxRows,
    showTooltip = true,
    onOverflowChange,
  }: Partial<TextProps>,
  ref: polymorphicRef<ElementType>
) => {
  const [element, setElement] = useState<HTMLElement>();
  const setContainerRef = useForkRef(ref, setElement);
  const [rows, setRows] = useState<number | undefined>();
  const isOverflowed = useRef<boolean | undefined>();

  // Calculating Rows
  const getRows = useCallback(() => {
    let textRows;

    if (element) {
      const { offsetHeight, scrollHeight, offsetWidth, scrollWidth } = element;
      const { lineHeight } = getComputedStyles(element);

      if (maxRows) {
        textRows = maxRows;
      } else {
        const parent = element.parentElement;

        if (parent && !element.nextSibling && !element.previousSibling) {
          const { width: widthParent, height: heightParent } =
            getComputedStyles(parent);

          if (
            Math.ceil(heightParent) < scrollHeight - VELOCITY ||
            Math.ceil(heightParent) < offsetHeight ||
            offsetWidth < scrollWidth ||
            Math.ceil(widthParent) < scrollWidth
          ) {
            textRows = Math.floor(heightParent / lineHeight);
          } else {
            textRows = undefined;
          }
        }
      }

      if (textRows) {
        const rowsHeight = textRows * lineHeight;

        const hasOverflowed =
          rowsHeight < scrollHeight - VELOCITY ||
          rowsHeight < offsetHeight ||
          offsetWidth < scrollWidth;

        if (isOverflowed.current !== hasOverflowed) {
          onOverflowChange && onOverflowChange(hasOverflowed);
          isOverflowed.current = hasOverflowed;
        }

        if (!hasOverflowed) {
          return 0;
        }
      } else {
        if (isOverflowed.current || isOverflowed.current === undefined) {
          onOverflowChange && onOverflowChange(false);
          isOverflowed.current = false;
        }
      }
    }

    return textRows;
  }, [element, maxRows, onOverflowChange]);

  // Add Observers
  useIsomorphicLayoutEffect(() => {
    const onResize = debounce(() => {
      setRows(getRows());
    }, 500);

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length > 0 && entries[0].target.isConnected) {
        onResize();
      }
    });

    const onScroll = debounce((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (element && entry.isIntersecting) {
          resizeObserver.observe(element);
        } else {
          resizeObserver.disconnect();
        }
      });
    });

    const scrollObserver = new IntersectionObserver(onScroll, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    if (element) {
      scrollObserver.observe(element);
    }

    return () => {
      scrollObserver.disconnect();
      resizeObserver.disconnect();
      onResize.clear();
    };
  }, [element, getRows]);

  // Has Tooltip
  const hasTooltip = rows && showTooltip && isOverflowed.current;

  const tooltipTextDefault =
    (hasTooltip &&
      (typeof children === "string" ? children : element?.textContent)) ||
    "";

  return {
    setContainerRef,
    hasTooltip,
    tooltipTextDefault,
    rows,
  };
};
