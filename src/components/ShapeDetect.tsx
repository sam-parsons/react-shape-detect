import React, { SyntheticEvent } from 'react';
import { ShapeDetectProps } from '../types';
import detectFactory from '../util/DetectFactory';

export default class ShapeDetect extends React.Component<ShapeDetectProps> {
  constructor(props: ShapeDetectProps) {
    super(props);
  }

  async detect(event: SyntheticEvent) {
    if (!('FaceDetector' || 'BarcodeDetector' in window)) alert('Your browser doesn\'t support the Shape Detection API');
    
    const target = event.target;

    const detector = detectFactory(this.props.options?.type ?? '');
    
    try {
      const result = await detector.detect(target)
      this.props.onRender(result);
      return result;
    } catch (e) {
      console.error(e);
      alert('Detection error: ' + e.message);
    }

  }

  render() {
    return (
      <div>
        <img 
          src={this.props.image} 
          onLoad={this.detect.bind(this)} 
          crossOrigin={'anonymous'}
        />
      </div>
    );
  }
}