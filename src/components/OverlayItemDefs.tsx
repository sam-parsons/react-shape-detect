import React from 'react';
import { OverlayItemDefsProps } from '../types'

export default (props: OverlayItemDefsProps) => {
  const patternViewBox = props.imageData?.height ? 
    `0 0 ${props.imageData?.width} ${props.imageData?.height}` : 
    '0 0 0 0';

  return (
    <defs>
      <pattern id="overlay-item" width="1" height="1" viewBox={patternViewBox} >
        <image        
          height={props.imageData?.height}
          width={props.imageData?.width}
          xlinkHref={props.input}
          preserveAspectRatio={"xMidYMid slice"}
        />
      </pattern>
    </defs>
  );
}
