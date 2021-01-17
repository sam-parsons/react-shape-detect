import React, { ReactElement } from 'react';
import { OverlayProps } from '../types';
import Pixel from '../util/pixel';

export default (props: OverlayProps): JSX.Element => {
  const keys = ['x', 'y', 'height', 'width'];
  // if absolute width is found, then provide scale for data translation
  // otherwise if overlay scale attribute provided, produce scaled data
  // if not either, image size adultered
  let svgs;
  let scale = 1;
  if (props.imageData?.width !== props.imageData?.naturalWidth) {
    scale = Pixel.computeScale(props.imageData); // return 0.5 for 50%
  } else if (props.componentAttributes?.scale) {
    scale = (props.componentAttributes?.scale * 0.01 ?? 1)
  } 

  svgs = props.componentData.map((data: any, key: number): ReactElement => {
    const newObj: any = {};
    keys.forEach(key => {
      // @ts-ignore
      newObj[key] = data.boundingBox[key] * scale; 
    })
    const { x, y, height, width } = newObj;
    return React.createElement('rect', { x, y, height, width, key });
  });

  return (
    <svg 
      style={{
        position: 'absolute',
        top: 0,
        left: 0
      }}
    >
      {svgs}
    </svg>
  );
};