import cx from "classnames";
import { Toolbar } from "../toolbar";
import { makePrefixer } from "@brandname/core";
import { MenuIcon } from "@brandname/icons";

import "./AppHeader.css";
import { forwardRef, HTMLAttributes } from "react";

const withBaseName = makePrefixer("uitkAppHeader");

export type AppHeaderProps = HTMLAttributes<HTMLDivElement>;

export const AppHeader = forwardRef<HTMLDivElement, AppHeaderProps>(
  ({ children, className, ...rest }, ref) => {
    // const [innerContainerRef, overflowedItems] = useOverflowObserver(
    //   "horizontal",
    //   null
    // );

    return (
      <Toolbar
        className={cx(withBaseName(), className)}
        ref={ref}
        wrapChildrenWithFormFields={false}
        overflowButtonIcon={<MenuIcon />}
        OverflowButtonProps={{ align: "start" }}
      >
        {children}
      </Toolbar>
    );
    // return (
    //   <div className={cx(withBaseName(), className)} ref={ref} {...rest}>
    //     <div className={withBaseName("innerContainer")} ref={innerContainerRef}>
    //       <OverflowMenu
    //         className={withBaseName("navMenu")}
    //         IconComponent={MenuIcon}
    //         source={overflowedItems}
    //       />
    //       {children}
    //     </div>
    //   </div>
    // );
  }
);
