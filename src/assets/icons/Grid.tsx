import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';

function Grid() {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path fill="url(#pattern0)" d="M0 0H20V20H0z" />
      <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#image0_103_147" transform="scale(.01111)" />
        </Pattern>
        <Image
          id="image0_103_147"
          width={90}
          height={90}
          //@ts-ignore
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABhElEQVR4nO3bT07CYByE4a6EO8gRRW/pnxV6FAP7MU1YuDUZp/Nr3ucCTN9ASSjfsgAAAAAAAGCRdJT0IulD0k0+N0nvkp4lHabusZB0kvSl//e5vta0Pa7Ix9BF/b64w5Q9ztDrxzPtPGWPM/R6D0x7m7LHGfq6wYVdp+xxht7EMmQPoc0IHULoEEKHEDqE0CGEDiF0CKFDCB1C6BBChxA6hNAhhA4hdAihdxR6i0dH31P2OENXPQxV2R5n6PUfO2lPU/Y4Qx/ufyJJuUh6mLLHHfsUuriLpMdpe6zu76Tzer8yfyFdJb2uH8+/vHPa9gAAAAzTdmZEZXss2s6MqGyPK3LVmRGV7XGGrjozorI9ztBVP0uqbI8zdNWZEZXtcYbexDJkD6HNCB1C6BBChxA6hNAhhA4hdAihQwgdQugQQocQOoTQIYQOIXQIoXcUuurMiMr2OENXPQxV2R5n6KozIyrb4wxddWZEZXvcsavOjKhsj1XbmRGV7QEAAAAAAFh27AcPs/3/u7BwXwAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}

export default Grid;
