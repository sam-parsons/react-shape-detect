import React, { SyntheticEvent } from 'react';
import { ShapeDetectProps } from '../types';
import detectImage from '../util/detectImage';

export default (props: ShapeDetectProps) => {

  const onLoadCallback: (data: SyntheticEvent) => void = detectImage(props.options?.type ?? '', props.onRender);

  // spread custom img tag attributes from public props
  // assign required attributes then generate image element
  const imgProps: {[key: string]: any} = Object.assign({}, props.options?.attributes)
  imgProps.src = props.image
  imgProps.onLoad = onLoadCallback;
  imgProps.crossOrigin = 'anonymous';

  return React.createElement('img', imgProps);
}
