import React from 'react';
import { OverlayItemDefsProps } from '../types'

export default (props: OverlayItemDefsProps) => {
  return (
    <defs>
      <pattern id="overlay-item" width="1" height="1"
        viewBox={`0 0 ${props.imageData?.width} ${props.imageData?.height}`} >
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
