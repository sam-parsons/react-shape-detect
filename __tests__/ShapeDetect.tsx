import React, { SyntheticEvent } from 'react';
import ShapeDetect from '../src/index';
import { render } from '@testing-library/react';

describe('ShapeDetect', () => {
  const onRender = () => {
    return (data: SyntheticEvent) => {
      return;
    }
  }

  it('renders', () => {
    render(
      <ShapeDetect 
        image={"https://cdn.glitch.com/5a76353b-f724-4f28-b022-58fd035621f1%2F1280px-Schmidt-Brin-Page-20080520.jpg?1547043906122"} 
        onRender={onRender()} 
        options={{ type: 'face' }}
      />
    );
  });
});