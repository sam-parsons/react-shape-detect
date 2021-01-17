import { SyntheticEvent } from 'react';
import detectorFactory from './DetectorFactory';

export default (type: string, onRender: (data: any, imageData: any) => void) => {
  return async function(event: SyntheticEvent) {
    try {
      const detector = detectorFactory(type ?? '');      
      const image = event.target as HTMLImageElement;
      const { naturalHeight, naturalWidth, height, width } = image;
      const imageData = { naturalHeight, naturalWidth, height, width };
      const result = await detector.detect(image);
      onRender(result, imageData);
      return result;
    } catch (e) {
      console.error(e);
      alert('Detection error: ' + e.message);
    }
  }
}
