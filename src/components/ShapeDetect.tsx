import React from 'react';
import { ShapeDetectProps, ShapeDetectState } from '../types';
import detectFactory from './DetectFactory';

export default class ShapeDetect extends React.Component<ShapeDetectProps, ShapeDetectState> {
  constructor(props: ShapeDetectProps) {
    super(props);

    this.detect = this.detect.bind(this);
  }

  async detect(event: any) {
    const target = event.target;

    if (!('FaceDetector' in window)) {
      alert('Your browser doesn\'t support the Shape Detection API');
    }

    // @ts-ignore
    // const faceDetect = new FaceDetector({
    //   maxDetectedFaces: 5,
    //   fastMode: false
    // });
    console.log(this.props.options)
    const detect = detectFactory(this.props.options?.type ?? '');
    
    try {
      const result = await detect.detect(target);
      this.props.onRender(result);
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
          onLoad={this.detect} 
          crossOrigin={'anonymous'}
        />
      </div>
    );
  }
}