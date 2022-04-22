import React, {
  createContext,
  DetailedHTMLProps,
  DOMAttributes,
  HTMLAttributes,
  ReactNode,
  useContext,
  useState,
  RefObject,
  ReactElement,
} from "react";
import cx from "classnames";

import { useIsomorphicLayoutEffect } from "../utils";
import {
  characteristic,
  Density,
  DEFAULT_THEME,
  getTheme,
  Theme,
} from "../theme";

import { AriaAnnouncerProvider } from "../aria-announcer";
import {
  DEFAULT_BREAKPOINTS,
  DefaultBreakpointType,
  RelaxedBreakpointsType,
} from "../breakpoints";
import { ViewportProvider } from "../viewport";

export type { Breakpoints } from "../breakpoints";
export const DEFAULT_DENSITY = "medium";

// TODO: this forces anyone using ToolkitContext directly to deal with themes (as opposed to theme)
// needs more thought
export interface ToolkitContextProps {
  density?: Density;
  themes?: Theme[];
  breakpoints: unknown;
}

const DEFAULT_THEME_NAME = "light";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "uitk-theme": DetailedHTMLProps<
        DOMAttributes<HTMLDivElement> & { class: string },
        HTMLDivElement
      >;
    }
  }
}

export const ToolkitContext = createContext<ToolkitContextProps>({
  density: undefined,
  themes: [],
  breakpoints: {},
});

const createThemedChildren = (
  children: ReactNode,
  themeNames: string[],
  density: Density,
  applyClassesToChild: boolean
) => {
  if (applyClassesToChild) {
    if (React.isValidElement<HTMLAttributes<HTMLElement>>(children)) {
      return React.cloneElement(children, {
        className: cx(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          children.props?.className,
          ...themeNames.map((themeName) => `uitk-${themeName}`),
          `uitk-density-${density}`
        ),
      });
    } else {
      console.warn(
        `\nToolkitProvider can only apply CSS classes for theming to a single nested child element of the ToolkitProvider.
        Either wrap elements with a single container or consider removing the applyClassesToChild prop, in which case a
        uitk-theme element will wrap your child elements`
      );
      return children;
    }
  } else {
    return (
      <uitk-theme
        class={cx(
          ...themeNames.map((themeName) => `uitk-${themeName}`),
          `uitk-density-${density}`
        )}
      >
        {children}
      </uitk-theme>
    );
  }
};

interface ToolkitProviderThatAppliesClassesToChild<B = DefaultBreakpointType> {
  children: ReactElement;
  density?: Density;
  theme?: ThemeNameType;
  applyClassesToChild?: true;
  breakpoints?: B;
}

type ThemeNameType = string | Array<string>;
interface ToolkitProviderThatInjectsThemeElement<B = DefaultBreakpointType> {
  children: ReactNode;
  density?: Density;
  theme?: ThemeNameType;
  applyClassesToChild?: false;
  breakpoints?: B;
}

type ToolkitProviderPropType<B = DefaultBreakpointType> =
  | ToolkitProviderThatAppliesClassesToChild<B>
  | ToolkitProviderThatInjectsThemeElement<B>;

const getThemeName = (
  theme: ThemeNameType | undefined,
  inheritedThemes: Theme[] | undefined
): ThemeNameType => {
  if (theme) {
    return theme;
  } else if (Array.isArray(inheritedThemes) && inheritedThemes.length > 0) {
    return inheritedThemes.map((theme) => theme.name);
  } else {
    return DEFAULT_THEME_NAME;
  }
};

export const ToolkitProvider = <
  B extends Record<string, number> = DefaultBreakpointType
>({
  applyClassesToChild = false,
  children,
  density: densityProp,
  theme: themesProp,
  breakpoints: breakpointsProp,
}: ToolkitProviderPropType<B>) => {
  const { themes: inheritedThemes, density: inheritedDensity } =
    useContext(ToolkitContext);

  const isRoot =
    inheritedThemes === undefined ||
    (Array.isArray(inheritedThemes) && inheritedThemes.length === 0);
  const density = densityProp ?? inheritedDensity ?? DEFAULT_DENSITY;
  const themeName = getThemeName(themesProp, inheritedThemes);
  const themes: Theme[] = getTheme(themeName);
  const breakpoints = breakpointsProp ?? DEFAULT_BREAKPOINTS;

  const themedChildren = createThemedChildren(
    children,
    themes.map((theme) => theme.name),
    density,
    applyClassesToChild
  );

  const toolkitProvider = (
    <ToolkitContext.Provider value={{ density, themes, breakpoints }}>
      <ViewportProvider>{themedChildren}</ViewportProvider>
    </ToolkitContext.Provider>
  );

  if (isRoot) {
    return <AriaAnnouncerProvider>{toolkitProvider}</AriaAnnouncerProvider>;
  } else {
    return toolkitProvider;
  }
};

export const useTheme = (): Theme[] => {
  const { themes = [DEFAULT_THEME] } = useContext(ToolkitContext);
  return themes;
};

/**
 * `useDensity` merges density value from 'DensityContext` with the one from component's props.
 */
export function useDensity(density?: Density): Density {
  const { density: densityFromContext } = useContext(ToolkitContext);
  return density || densityFromContext || DEFAULT_DENSITY;
}

export const useBreakpoints = () => {
  const { breakpoints } = useContext(ToolkitContext);
  return breakpoints as RelaxedBreakpointsType;
};

type HTMLElementRef = RefObject<HTMLElement>;
// We might want to cache values in a local WeakMap ?
export const useCharacteristic = (
  characteristicName: characteristic,
  variant: string,
  ref: HTMLElementRef | HTMLElement | null = null
): string | null => {
  // TODO what do we do with multiple themes
  const [theme] = useTheme();
  const [value, setValue] = useState<string | null>(null);
  const target =
    (ref as HTMLElementRef)?.current !== undefined
      ? (ref as HTMLElementRef).current
      : (ref as HTMLElement);

  useIsomorphicLayoutEffect(() => {
    if (theme) {
      const value = theme.getCharacteristicValue(
        characteristicName,
        variant,
        target || undefined
      );
      setValue(value);
    }
  }, [characteristicName, target, theme, variant]);

  return value;
};
