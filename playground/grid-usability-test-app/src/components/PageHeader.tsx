import * as React from "react";
import { FC, ReactNode } from "react";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import "./PageHeader.css";

export interface PageHeaderProps {
  children: ReactNode;
}

const withBaseName = makePrefixer("gtaPageHeader");

export const PageHeader: FC<PageHeaderProps> = ({ children }) => {
  return (
    <div className={withBaseName("1")}>
      <div className={withBaseName("1-text")}>{children}</div>
      <div className={withBaseName("1-separator")}></div>
    </div>
  );
};

export const PageHeader2: FC<PageHeaderProps> = ({ children }) => {
  return (
    <div className={withBaseName("2")}>
      <div className={withBaseName("2-text")}>{children}</div>
      <div className={withBaseName("2-separator")}></div>
    </div>
  );
};
