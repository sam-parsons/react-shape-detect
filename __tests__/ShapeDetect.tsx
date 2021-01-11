import React, { SyntheticEvent } from 'react';
import ShapeDetect from '../src/index';
import { mount } from 'enzyme';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import setupFaceDetector from '../__mocks__/FaceDetector';

const url = '../assets/test1.jpg';

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
      />
    );
    expect(wrapper.find('img').prop('src')).toEqual(url);
  });

  it('renders with default crossOrigin attribute value of anonymous', () => {
    wrapper = mount(
      <ShapeDetect 
        image={url} 
      />
    );
    const { crossOrigin } = wrapper.find('img').props();
    expect(crossOrigin).toEqual('anonymous');
  });

  xit('should throw error when detector type is unrecognized', () => {
    wrapper = mount(
      <ShapeDetect 
        image={url} 
        options={{
          type: 'fake'
        }}
      />
    );
  });

  it('renders an img with the custom tag attributes', () => {
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
    const { alt } = wrapper.find('img').props();
    expect(alt).toEqual('shape-detect');
  });
  
  it('invokes onRender callback', async () => {
    window.alert = () => {};
    setupFaceDetector();
    const mockedMock = jest.fn()
    
    render(
      <ShapeDetect 
        image={url} 
        onRender={mockedMock} 
        options={{ 
          type: 'face',
          attributes: {
            alt: 'shape-detect'
          }
        }}
      />
    );

    fireEvent.load(screen.getByAltText('shape-detect'))
    await waitFor(() => expect(mockedMock).toHaveBeenCalled());
  });

});