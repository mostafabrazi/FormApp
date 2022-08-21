import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const Rejected = ({
  width = 48,
  height = 48,
  color = '#000',
  ...props
}: SvgProps) => (
  <Svg viewBox="0 0 48 48" width={width} height={height} fill="none" {...props}>
    <Path fill="none" fillOpacity={0.01} d="M0 0h48v48H0z" />
    <Path
      d="m8 8 32 32M8 40 40 8"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
