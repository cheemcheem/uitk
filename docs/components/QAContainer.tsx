import { makePrefixer, ToolkitProvider } from "@jpmorganchase/uitk-core";
import cx from "classnames";
import {
  Children,
  CSSProperties,
  DetailedHTMLProps,
  FC,
  Fragment,
  HTMLAttributes,
} from "react";
import { DraggableImg } from "./DraggableSnapshot";

import "./QAContainer.css";

const withBaseName = makePrefixer("uitkQAContainer");

export interface QAContainerProps extends HTMLAttributes<HTMLDivElement> {
  cols?: number;
  height?: number;
  imgSrc?: string;
  itemPadding?: number;
  itemWidthAuto?: boolean;
  transposeDensity?: boolean;
  vertical?: boolean;
  width?: number;
}

const BackgroundBlock = ({
  background = "rgb(36, 37, 38)",
  children,
}: DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  background?: string;
}) => (
  <div
    className="background-block"
    style={{
      background,
    }}
  >
    {Children.map(children, (child, i) => (
      <div className="background-item-wrapper" key={i}>
        {child}
      </div>
    ))}
  </div>
);

const DensityValues = ["high", "medium", "low", "touch"] as const;

export const QAContainer: FC<QAContainerProps> = ({
  children,
  className,
  cols = 2,
  height,
  itemPadding,
  itemWidthAuto,
  imgSrc,
  vertical,
  width,
  ...htmlAttributes
}) => {
  const style = {
    "--qaContainer-cols": cols,
    "--qaContainer-height": height === undefined ? undefined : `${height}px`,
    "--qaContainer-width": width === undefined ? undefined : `${width}px`,
    "--qaContainer-item-padding":
      itemPadding === undefined ? undefined : `${itemPadding}px`,
    "--qaContainer-item-width": itemWidthAuto ? "auto" : undefined,
  } as CSSProperties;

  return (
    <div
      {...htmlAttributes}
      className={cx(withBaseName(), className, {
        "uitkQAContainer-vertical": vertical,
      })}
      style={style}
    >
      {DensityValues.map((d, i) => (
        <Fragment key={i}>
          <ToolkitProvider theme="light" density={d}>
            <BackgroundBlock background="white">{children}</BackgroundBlock>
          </ToolkitProvider>
          <ToolkitProvider theme="dark" density={d}>
            <BackgroundBlock>{children}</BackgroundBlock>
          </ToolkitProvider>
        </Fragment>
      ))}
      {imgSrc && <DraggableImg src={imgSrc} style={style} />}
    </div>
  );
};
