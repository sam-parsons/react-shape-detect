import { SyntheticEvent } from 'react';
import detectorFactory from './DetectorFactory';

export default (type: string, onRender: (data: any) => void) => {
  return async function(event: SyntheticEvent) {
    try {
      const detector = detectorFactory(type ?? '');
      const target = event.target;
      const result = await detector.detect(target);
      onRender(result);
      return result;
    } catch (e) {
      console.error(e);
      alert('Detection error: ' + e.message);
    }
  }
}