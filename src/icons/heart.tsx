import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const HeartSvg = ({ width, height, fill, ...props }: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? 24}
    height={height ?? 24}
    fill="none"
    viewBox="-0.5 0 25 25"
    {...props}
  >
    <Path
      stroke={fill ?? "#00000085"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M15.6 3.92a5.37 5.37 0 0 0-3.6 1.4 5.38 5.38 0 0 0-9 4c0 6.45 9 10.82 9 10.82s9-4.37 9-10.82a5.4 5.4 0 0 0-5.4-5.4Z"
    />
  </Svg>
);
