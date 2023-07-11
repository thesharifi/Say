import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const ArrowLeftSvg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#000"
      d="M10.767 7.543a.75.75 0 1 0-1.034-1.086l1.034 1.086Zm-6.284 3.914a.75.75 0 1 0 1.034 1.086l-1.034-1.086Zm1.034 0a.75.75 0 1 0-1.034 1.086l1.034-1.086Zm4.216 6.086a.75.75 0 1 0 1.034-1.086l-1.034 1.086ZM5 11.25a.75.75 0 0 0 0 1.5v-1.5Zm14 1.5a.75.75 0 0 0 0-1.5v1.5ZM9.733 6.457l-5.25 5 1.034 1.086 5.25-5-1.034-1.086Zm-5.25 6.086 5.25 5 1.034-1.086-5.25-5-1.034 1.086ZM5 12.75h14v-1.5H5v1.5Z"
    />
  </Svg>
);
