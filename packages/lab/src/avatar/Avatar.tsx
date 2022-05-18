import { forwardRef, HTMLAttributes, ImgHTMLAttributes } from "react";
import cn from "classnames";
import { makePrefixer, useStyleInject } from "@jpmorganchase/uitk-core";
import { useId } from "../utils";
import { useLoaded } from "./internal/useLoaded";
import { DefaultAvatar } from "./internal/DefaultAvatar";
import { classBase } from "./internal/constants";

import style from "./Avatar.css";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  alt?: string;
  id?: string;
  imgProps?: ImgHTMLAttributes<HTMLImageElement>;
  size?: "small" | "medium" | "large";
  sizes?: string;
  src?: string;
  srcSet?: string;
  title?: string;
}

const withBaseName = makePrefixer(classBase);

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  {
    alt = "",
    className,
    children: childrenProp,
    id: idProp,
    size = "medium",
    src,
    srcSet,
    title = "user",
    imgProps,
    sizes,
    ...rest
  },
  ref
) {
  let children;
  const id = useId(idProp);

  const loaded = useLoaded({ ...imgProps, src, srcSet });
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded !== "error";

  if (hasImgNotFailing) {
    children = (
      <img
        className={withBaseName("image")}
        alt={alt}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        {...imgProps}
      />
    );
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = <DefaultAvatar id={id} title={title} {...rest} />;
  }

  useStyleInject(style);

  return (
    <div
      ref={ref}
      className={cn(withBaseName(), withBaseName(size), className)}
      {...rest}
    >
      {children}
    </div>
  );
});
