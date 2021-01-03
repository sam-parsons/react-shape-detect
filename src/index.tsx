import React from 'react';
import { ShapeDetectProps, ShapeDetectState } from './types';

export default class ShapeDetect extends React.Component<ShapeDetectProps, ShapeDetectState> {
  constructor(props: ShapeDetectProps) {
    super(props);
  }

  async detect(event: any) {
    const target = event.target;

    if (!('FaceDetector' in window)) {
      alert('Your browser doesn\'t support the Shape Detection API');
    }

    // @ts-ignore
    const faceDetect = new FaceDetector({
      maxDetectedFaces: 5,
      fastMode: false
    });
    
    try {
      const result = await faceDetect.detect(target);
      console.log('result', result);
    } catch (e) {
      console.error(e);
      alert('Detection error: ' + e.message);
    }
  }

  render() {
    return (
      <div>
        <img 
          id={'shape-detect-99'} 
          src={this.props.image} 
          onLoad={(e) => this.detect(e)} 
          crossOrigin={'anonymous'}
        />
      </div>
    );
  }
}