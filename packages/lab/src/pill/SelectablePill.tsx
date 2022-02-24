import classnames from "classnames";
import React, { ForwardedRef, forwardRef, useCallback } from "react";
import { makePrefixer } from "@brandname/core";
import { useControlled } from "../utils";
import { PillBase, PillBaseProps } from "./internal/PillBase";
import { PillCheckbox } from "./internal/PillCheckbox";
import { pillBaseName } from "./constants";

const noop = () => undefined;

export interface SelectablePillProps extends Omit<PillBaseProps, "onChange"> {
  /**
   * Controls whether the selectable pill is checked
   */
  checked?: boolean;
  /**
   * Uncontrolled prop to determine initial state of selectable pill
   */
  defaultChecked?: boolean;
  // TODO: API Alignment.
  // - Reverted param order to keep event as first param
  /**
   * Callback when checked state is changed
   */
  onChange?: (event: React.ChangeEvent, checked: boolean) => void;
}

const withBaseName = makePrefixer(pillBaseName);

export const SelectablePill = forwardRef(function SelectablePill(
  {
    defaultChecked = false,
    checked: checkedProp,
    className,
    onChange = noop,
    ...rest
  }: SelectablePillProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const [checked, setChecked] = useControlled({
    controlled: checkedProp,
    default: defaultChecked,
    name: "SelectablePill",
    state: "checked",
  });

  const handleClick = useCallback(
    (event) => {
      setChecked(!checked);
      onChange(event, !checked);
    },
    [checked, onChange, setChecked]
  );

  return (
    <PillBase
      aria-checked={checked}
      aria-roledescription="Selectable Pill"
      clickable
      className={classnames(withBaseName(`selectable`), className)}
      icon={<PillCheckbox checked={checked} />}
      role="checkbox"
      onClick={handleClick}
      {...rest}
      ref={ref}
    />
  );
});
