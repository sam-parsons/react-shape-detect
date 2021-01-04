import React, { SyntheticEvent } from 'react';
import ShapeDetect from '../src/index';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// @ts-ignore
Enzyme.configure({ adapter: new Adapter() });

const url = "https://cdn.glitch.com/5a76353b-f724-4f28-b022-58fd035621f1%2F1280px-Schmidt-Brin-Page-20080520.jpg?1547043906122"

describe('ShapeDetect', () => {
  const onRender = () => {
    return (data: SyntheticEvent) => {
      return;
    }
  }

  it('renders an img with the correct source', () => {
    const wrapper = mount(
      <ShapeDetect 
        image={url} 
        onRender={onRender()} 
        options={{ type: 'face' }}
      />
    );
  });


});