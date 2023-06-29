import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';

function Map() {
  return (
    <Svg width={31} height={31} viewBox="0 0 31 31" fill="none">
      <Path fill="url(#pattern0)" d="M0 0H31V31H0z" />
      <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#image0_102_135" transform="scale(.01111)" />
        </Pattern>
        <Image
          id="image0_102_135"
          width={90}
          height={90}
          //@ts-ignore
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFX0lEQVR4nO2dS4gdRRRAS9SYYPwh+IUZF4oiYjSOziiKvyC4cCO41J2OCzHiwg+iqKtgoibqQqOIkIWoaGYWKqJLl/GDmfhDEBxljNEojknGT+bIZe7oy0t3v66+Vd393qsDDwKv362qw53u6urbFecSiUQikUgkEgEAjgGuBR4HtgOfA3uBv4A/9d+79LvHgGvkNyHaHgqAS4CtwG/48yvwArC26XG0FmAt8B7heBe4qOlxtQZgFbAF+Ifw/A08Dax0wwxwLvAZ8fkUOMcNI8ClwE/Uxy/AFW6YAMaBeepH2rzMDdHp4meaY8/An0aAlcAnNI9cF1aFHNgRwF3ATmAOmAbuBEaDNeKBzi7awlMhB3ZPQUNyV7UJuB5YEazR4nlyjCmcZeq3xoUA+KZko/uA94H1sbKdsDcjoXg71OAWK3ZAsn1jqGzX2+o2In4uDiE61JRoOzAJjBS0dWTBd7J20Vaeb4vobmb0tvYO4DbgYeAdYEfBKlyVBaK62Gv+q625w9ty+iBLnVYOAJvlZgM4Vj/jOotZCBD/6liiz9Jp3nTAO7S7c/og68kWZoELC8a4Ro+x8GgU0Rl/2ut0qicXwarckNOHKWMm50rukm3J7Leii874zahm+5RntmdevfXJSFU2e4z1GUM7M1X8djaeicfvV+gUr0y2n5kTw7KuUXoBCJgwtLOnbDt5jWdiiDda0Nmjcn4jz/eqstqjb8cZ2lmo6mS58UzqjInt3Okj+nhDO/sHQfSPfXDqmBsE0bsMArZ49OtZQzs7B0H0awYBC2VW2ORpt/Fa8OogiH4QG7NFslXy98Y27h8E0WPYWdB5spyHV+vncj1dWDJ5GVvBTV7UOmOy9JTnO9rLt9LHvhcdaL0jJo84K3mR644JnKLrFm1DTkmnWnxUlhIrJktr2G1jk8WFWUqMmMBJWlPRFnYDJ1pcmKXEigncTHu4xeIhmJRYMYGXaJ6tFgfBpcSICRyttctN8WHwNwPyWmo6JktLmjuoH6nYOtky/mhSYsWUaZU+Ua9T8mm+/axVSqyYmtl1nEY+AE6o0sfapcSKqY/LXommGF6W60LV/jUiJVZMjSvFOH8EFLxfagmt/Ro40QJwvr5vYuVj4DxXgHkhqZ9FC/KQV9aHKy5/Sinuhl4lXrrM+oYbZtFdLxN95SFZjh1zPQDOXp7tuFD0s2gBOKPkWvYPRZWuywA3alFj2D73u2hBXlkDDhZIlu8mXAH68OGh7jhu2ETT45a4R311z/pm4M2oydFHop8scRd5IGfh/vQm+hy9AeLEXMyrRu045sWq1fpJ9KEidhc9VtLC827GPOKnjOZ/pnpc0L7sOPaLMpKT6A66Um2y4LirgK91znxl3nEZv0sZLWS881h4++xLEp0v4qOQb/Mm0cUiNrhAJNHFIg66QCTRNYlIopUkuiYpSXQGSXQfSyGdow8nie5jKaSMPpwk2m+rn9G2iAZG8mLqy0GZrz432eesBv57EBlqlzDCvci/sWTt3byWjT1QVXwdomULHkoOZqrMnnhU6LRm7aTuzWTdiMVbfJU+ewHcVHEwy9m+rvvBaZlOa9Ze55G1UcWX6XMI2dsCDGRas122CMpjRDe0CpG1QcXXJVoq7J/rURsxyMzXIrpD+AXAEzUXf/ucqmQXsNuBWzu2ePudiEQRnVEnIWWyrze0J92+Mlt0yqaFugvkeu2r/GcJ/SPaON2qinnTWT3fjmu1qTXjF8Pb9BtMqKnYvE4ZJyNuLGsRP+vaAv7ZPhNy89gA4osS5T7XVjg022f103OD2KZQ8RMd4ue0LuTeoBX/iUQikUgkEolEIuEa4F/WiWRUor1XpAAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}

export default Map;
