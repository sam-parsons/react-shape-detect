import React from 'react';
import ShapeDetect from './components/ShapeDetect';
import { ShapeDetectProps } from './types';

export default function(props: ShapeDetectProps) {
  return <ShapeDetect image={props.image} onRender={props.onRender} />;
}