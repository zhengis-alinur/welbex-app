import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function List({ active }: { active: boolean }) {
  const color = active ? '#fff' : '#747474';
  return (
    <Svg width={20} height={20} fill={color} viewBox="0 0 16 16">
      <Path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
        strokeWidth={1.6}
        stroke={color}
      />
    </Svg>
  );
}

export default List;
