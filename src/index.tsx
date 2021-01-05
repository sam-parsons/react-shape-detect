import React, { SyntheticEvent } from 'react';
import ShapeDetect from './components/ShapeDetect';
import { ModuleProps } from './types';

export default function(props: ModuleProps) {
  const mockOnRender = (data: SyntheticEvent) => {};
  return <ShapeDetect image={props.image} onRender={props.onRender ?? mockOnRender} options={props.options} />;
}