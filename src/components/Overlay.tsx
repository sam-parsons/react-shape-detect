import React, { ReactElement } from 'react';
import { OverlayProps } from '../types'

export default (props: OverlayProps): JSX.Element => {

  const svgs = props.componentData.map((data: any, key: number): ReactElement => {
    const keys = ['x', 'y', 'height', 'width'];
    const newObj: any = {}
    keys.forEach(key => {
      // @ts-ignore
      newObj[key] = data.boundingBox[key] * (props.componentAttributes?.scale * 0.01 ?? 1)
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