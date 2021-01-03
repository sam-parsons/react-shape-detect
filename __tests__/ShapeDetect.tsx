import React from 'react';
import ShapeDetect from '../src/index';
import { render } from '@testing-library/react';

describe('ShapeDetect', () => {
  it('renders', () => {
    render(<ShapeDetect image={'https://api.imgur.com/3/image/14fc8on'} onRender={data => console.log(data)} />);
  });
});