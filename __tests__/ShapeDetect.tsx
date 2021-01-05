import React, { SyntheticEvent } from 'react';
import ShapeDetect from '../src/index';
import { mount } from 'enzyme';

const url = "https://cdn.glitch.com/5a76353b-f724-4f28-b022-58fd035621f1%2F1280px-Schmidt-Brin-Page-20080520.jpg?1547043906122"

describe('ShapeDetect', () => {
  const onRender = () => {
    return (data: SyntheticEvent) => {
      return;
    }
  }

  let wrapper;

  afterEach(() => {
    wrapper = null;
  })

  it('renders an img with the correct source', () => {
    wrapper = mount(
      <ShapeDetect 
        image={url} 
        onRender={onRender()} 
        options={{ type: 'face' }}
      />
    );
    expect(wrapper.find('img').prop('src')).toEqual(url);
  });

  it('renders an img with the custom tag attrivutes', () => {
    wrapper = mount(
      <ShapeDetect 
        image={url} 
        onRender={onRender()} 
        options={{ 
          type: 'face',
          attributes: {
            alt: 'shape-detect'
          }
        }}
      />
    );
    const { alt } = wrapper.find('img').props()
    expect(alt).toEqual('shape-detect');
  });

});