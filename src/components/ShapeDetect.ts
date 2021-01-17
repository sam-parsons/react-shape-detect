import React from 'react';
import { ShapeDetectProps } from '../types';
import detectImage from '../util/detectImage';
import detectorTypeCheck from '../util/detectorTypeCheck';

export default (props: ShapeDetectProps) => {
  detectorTypeCheck(props.options?.type ?? '');

  // spread custom img tag attributes from public props
  // assign required attributes then generate image element
  const imgProps: {[key: string]: any} = Object.assign({}, props.options?.attributes);
  imgProps.src = props.image;
  imgProps.crossOrigin = 'anonymous';
  imgProps.style = {
    display: 'block',
    maxWidth: '100%',
    height: 'auto'
  };
  // @ts-ignore
  imgProps.onLoad = detectImage(props.options?.type ?? '', props.onRender);

  return React.createElement('img', imgProps);
}
