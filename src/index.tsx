import React from 'react';
import { ShapeDetectProps, ShapeDetectState } from './types'

export default class ShapeDetect extends React.Component<ShapeDetectProps, ShapeDetectState> {
  constructor(props: ShapeDetectProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.image} />
      </div>
    );
  }
}