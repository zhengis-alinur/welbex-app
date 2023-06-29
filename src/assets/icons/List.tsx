import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function List() {
  return (
    <Svg width={18} height={14} viewBox="0 0 18 14" fill="none">
      <Path
        d="M0 8a1 1 0 001 1h2.235a1 1 0 001-1V6a1 1 0 00-1-1H1a1 1 0 00-1 1v2zm0 5a1 1 0 001 1h2.235a1 1 0 001-1v-2a1 1 0 00-1-1H1a1 1 0 00-1 1v2zM0 3a1 1 0 001 1h2.235a1 1 0 001-1V1a1 1 0 00-1-1H1a1 1 0 00-1 1v2zm5.294 5a1 1 0 001 1H17a1 1 0 001-1V6a1 1 0 00-1-1H6.294a1 1 0 00-1 1v2zm0 5a1 1 0 001 1H17a1 1 0 001-1v-2a1 1 0 00-1-1H6.294a1 1 0 00-1 1v2zm1-13a1 1 0 00-1 1v2a1 1 0 001 1H17a1 1 0 001-1V1a1 1 0 00-1-1H6.294z"
        fill="#fff"
      />
    </Svg>
  );
}

export default List;
