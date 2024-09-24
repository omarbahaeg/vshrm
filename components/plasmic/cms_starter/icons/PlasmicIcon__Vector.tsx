// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.677 11.781h1.258V13H1.677C.752 13 0 12.271 0 11.375v-9.75C0 .729.752 0 1.677 0h4.338c.446 0 .873.17 1.187.475l2.372 2.298a1.6 1.6 0 01.49 1.15v3.796H8.806V4.062H6.71a.825.825 0 01-.839-.812V1.219H1.677a.414.414 0 00-.419.406v9.75c0 .223.189.406.42.406zm2.936-2.844h.839c.81 0 1.467.638 1.467 1.422 0 .785-.658 1.422-1.467 1.422h-.42v.813a.414.414 0 01-.42.406.414.414 0 01-.418-.406v-3.25c0-.224.188-.406.419-.406zm.839 2.032a.618.618 0 00.629-.61.618.618 0 00-.63-.609h-.419v1.219h.42zm2.516-2.031h.838c.695 0 1.259.545 1.259 1.218v1.625c0 .673-.564 1.219-1.259 1.219h-.838a.414.414 0 01-.42-.406v-3.25c0-.224.19-.406.42-.406zm.838 3.25c.231 0 .42-.183.42-.407v-1.625a.414.414 0 00-.42-.406h-.419v2.438h.42zm2.097-2.844c0-.224.189-.406.42-.406h1.258c.23 0 .419.182.419.406a.414.414 0 01-.42.406h-.838v.813h.839c.23 0 .419.182.419.406a.414.414 0 01-.42.406h-.838v1.219a.414.414 0 01-.42.406.414.414 0 01-.419-.406v-3.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
