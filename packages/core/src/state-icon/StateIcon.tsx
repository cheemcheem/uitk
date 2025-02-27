import {
  ErrorIcon,
  IconProps,
  InfoIcon,
  SuccessTickIcon,
  WarningIcon,
  DEFAULT_ICON_SIZE,
} from "@jpmorganchase/uitk-icons";
import classnames from "classnames";
import { forwardRef } from "react";
import { makePrefixer } from "../utils";
import { ValidationState } from "./ValidationState";

import "./StateIcon.css";

const icons = {
  error: ErrorIcon,
  success: SuccessTickIcon,
  warning: WarningIcon,
  info: InfoIcon,
};

export interface StateIconProps extends IconProps {
  state: ValidationState;
}

const withBaseName = makePrefixer("uitkStateIcon");

export const StateIcon = forwardRef<HTMLSpanElement, StateIconProps>(
  function StateIcon(
    { className, state, size = DEFAULT_ICON_SIZE, ...restProps },
    ref
  ) {
    const IconComponent = icons[state];

    return (
      <IconComponent
        className={classnames(withBaseName(), withBaseName(state), className)}
        size={size}
        {...restProps}
        ref={ref}
      />
    );
  }
);
