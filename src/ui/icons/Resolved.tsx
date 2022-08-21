import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const Resolved = ({
  width = 48,
  height = 48,
  color = "#000",
  ...props
}: SvgProps) => (
    <Svg
    viewBox='0 0  48 48'
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
    <Path
      d="M43 11 16.875 37 5 25.182"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
