import * as React from "react";
import { SVGProps } from "react";

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#000E1C"
      d="M5.334 9.2h-1.2V6.8h1.2v2.4Zm13.333-2.4a1.2 1.2 0 0 1 0 2.4V6.8Zm-13.333 0h13.333v2.4H5.334V6.8ZM5.334 17.2h-1.2v-2.4h1.2v2.4Zm21.333-2.4a1.2 1.2 0 0 1 0 2.4v-2.4Zm-21.333 0h21.333v2.4H5.334v-2.4ZM5.333 25.2h-1.2v-2.4h1.2v2.4Zm8-2.4a1.2 1.2 0 0 1 0 2.4v-2.4Zm-8 0h8v2.4h-8v-2.4Z"
    />
  </svg>
);
export default MenuIcon;
