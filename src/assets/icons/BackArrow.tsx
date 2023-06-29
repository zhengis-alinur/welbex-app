import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';

function BackArrow() {
  return (
    <Svg width={24} height={15} viewBox="0 0 24 15" fill="none">
      <Path
        d="M22.635 6.151H4.658l3.931-3.866a1.321 1.321 0 000-1.892 1.376 1.376 0 00-1.924 0L.399 6.553a1.321 1.321 0 000 1.893l6.266 6.161a1.376 1.376 0 001.924 0 1.321 1.321 0 000-1.892l-3.931-3.88h17.977c.75 0 1.365-.603 1.365-1.342 0-.738-.614-1.342-1.365-1.342z"
        fill="#fff"
      />
    </Svg>
  );
}

export default BackArrow;
