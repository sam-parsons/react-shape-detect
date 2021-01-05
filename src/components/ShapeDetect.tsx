import React, { SyntheticEvent } from 'react';
import { ShapeDetectProps } from '../types';
import detectorFactory from '../util/DetectorFactory';

export default (props: ShapeDetectProps) => {

  const onLoadCallback = ((type: string, onRender: (data: any) => void) => {
    return async function(event: SyntheticEvent) {
      if (!('FaceDetector' || 'BarcodeDetector' in window)) 
      alert('Your browser doesn\'t support the Shape Detection API');
      
      const detector = detectorFactory(type ?? '');
      
      const target = event.target;

      try {
        const result = await detector.detect(target);
        onRender(result);
        return result;
      } catch (e) {
        console.error(e);
        alert('Detection error: ' + e.message);
      }
    }
  })(props.options?.type ?? '', props.onRender);

  // spread custom img tag attributes
  const imgProps: {[key: string]: any} = Object.assign({}, props.options?.attributes)
  for (const prop in props.options?.attributes) {
    // @ts-ignore
    imgProps[prop] = props.options?.attributes[prop]
  }
  // assign source and callback then generate image element
  imgProps.src = props.image
  imgProps.onLoad = onLoadCallback;
  const img = React.createElement('img', imgProps);

  return (
    <div>
      {img}
    </div>
  );
}
