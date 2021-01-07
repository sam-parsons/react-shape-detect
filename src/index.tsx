import React, { SyntheticEvent } from 'react';
import ShapeDetect from './components/ShapeDetect';
import { ModuleProps } from './types';
import mockOnRender from './util/mockOnRender';

export default function(props: ModuleProps) {
  return (
    <ShapeDetect 
      image={props.image} 
      onRender={props.onRender ?? mockOnRender} 
      options={props.options} 
    />
  );
}