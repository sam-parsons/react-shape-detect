import React, { CSSProperties, ReactElement } from 'react';
import { OverlayProps } from '../types';
import OverlayItemDefs from './OverlayItemDefs';

export default (props: OverlayProps): JSX.Element => {
  let scale: number;
  // if absolute width is found, then provide scale for data translation
  if (props.imageData?.width !== props.imageData?.naturalWidth) {
    scale = (props.imageData?.width / props.imageData?.naturalWidth); // return 0.5 for 50%
    // otherwise if overlay scale attribute provided, produce scaled data
  } else if (props.componentAttributes?.scale) {
    scale = (props.componentAttributes?.scale * 0.01 ?? 1)
  }  else { // if not either, image size adultered
    scale = 1
  }

  // needs typing
  const overlayItems = props.componentData.map((data: any, key: number): ReactElement => {
    return React.createElement(
      'rect', 
      { x: data.boundingBox['x'] * scale, 
        y: data.boundingBox['y'] * scale, 
        height: data.boundingBox['height'] * scale, 
        width: data.boundingBox['width'] * scale, 
        key, 
        fill: "url(#overlay-item)" 
      }
    );
  });

  const overlayStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: props.imageData?.height,
    width: props.imageData?.width,
  }

  return (
    <svg style={overlayStyle}>
      <OverlayItemDefs imageData={props.imageData} input={props.input} />
      {overlayItems}
    </svg>
  );
};