import React, { SyntheticEvent } from 'react';
import ShapeDetect from '../src/index';
import { mount } from 'enzyme';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import setupFaceDetectorMock from '../__mocks__/FaceDetector';
import mockOnRender from '../src/util/mockOnRender';

const url = '../assets/test1.jpg';

describe('ShapeDetect', () => {

  let wrapper;

  afterEach(() => {
    wrapper = null;
  })

  it('renders an img with the correct source and default crossOrigin attribute value of anonymous', () => {
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

  it('should throw error when detector type is unrecognized', async () => {
    window.alert = () => {};
    setupFaceDetectorMock();

    expect(() => mount(
      <ShapeDetect 
        image={url} 
        options={{ 
          type: 'fake'
        }}
      />
    )).toThrowError();
  });

  it('renders an img with the custom tag attributes', () => {
    wrapper = mount(
      <ShapeDetect 
        image={url} 
        onRender={mockOnRender} 
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
  
  it('invokes onRender callback', async (done) => {
    window.alert = () => {};
    setupFaceDetectorMock();
    const mockedMock = jest.fn(() => done());
    
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