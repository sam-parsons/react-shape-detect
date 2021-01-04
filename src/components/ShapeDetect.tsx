import React, { SyntheticEvent } from 'react';
import { ShapeDetectProps } from '../types';
import detectorFactory from '../util/DetectFactory';

export default (props: ShapeDetectProps) => {

  const generateDetectCallback = (type: string, onRender: (data: any) => void) => {
    return async function(event: SyntheticEvent) {
      if (!('FaceDetector' || 'BarcodeDetector' in window)) 
        alert('Your browser doesn\'t support the Shape Detection API');
      
      // save ImageBitmapSource
      const target = event.target;

      const detector = detectorFactory(type ?? '');
      
      try {
        const result = await detector.detect(target);
        onRender(result);
        return result;
      } catch (e) {
        console.error(e);
        alert('Detection error: ' + e.message);
      }
    }
  }

  const onLoadCallback = generateDetectCallback(props.options?.type ?? '', props.onRender)

  return (
    <div>
      <img 
        src={props.image} 
        onLoad={onLoadCallback} 
        crossOrigin={'anonymous'}
      />
    </div>
  );
}
