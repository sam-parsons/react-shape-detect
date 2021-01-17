import React, { ReactElement } from 'react';
import { OverlayProps } from '../types'

export default (props: OverlayProps): JSX.Element => {

  const svgs = props.componentData.map((data: any, key: number): ReactElement => {
    const { x, y, height, width } = data.boundingBox;
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