import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Car() {
  return (
    <Svg fill="#000" width="64px" height="64px" viewBox="0 0 24 24">
      <Path d="M16 6l3 4h2c1.11 0 2 .89 2 2v3h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1v-3c0-1.11.89-2 2-2l3-4h10m-5.5 1.5H6.75L4.86 10h5.64V7.5m1.5 0V10h5.14l-1.89-2.5H12m-6 6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m12 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
      <Path fill="none" d="M0 0H24V24H0z" />
    </Svg>
  );
}

export default Car;
