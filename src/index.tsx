import React from 'react';
import ShapeDetect from './components/ShapeDetect';

export default function(props: any) {
  return <ShapeDetect image={props.image} onRender={props.onRender} />;
}