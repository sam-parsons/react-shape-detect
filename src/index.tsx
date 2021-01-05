import React from 'react';
import ShapeDetect from './components/ShapeDetect';
import { ModuleProps } from './types';

export default function(props: ModuleProps) {
  return <ShapeDetect image={props.image} onRender={props.onRender} options={props.options} />;
}