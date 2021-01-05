import React, { SyntheticEvent } from 'react';
import ShapeDetect from '../src/index';
import { mocked } from 'ts-jest/utils';
import { mount } from 'enzyme';

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

  it('renders with crossOrigin attribute value of anonymous', () => {
    wrapper = mount(
      <ShapeDetect 
        image={url} 
      />
    );
    const { crossOrigin } = wrapper.find('img').props()
    expect(crossOrigin).toEqual('anonymous');
  });
  
  xit('invokes onRender callback', async () => {
    expect.assertions(1);

    const mockedMock = jest.fn()
    const thisFunc = (data: SyntheticEvent): void => {}

    const mockedReturnFunc = jest.fn((data: SyntheticEvent) => {
      mockedMock()
      return expect(mocked(mockedMock.mock.calls.length)).toEqual(1);
    });

    mockedReturnFunc.mockImplementation(thisFunc);
    mockedReturnFunc.mockReturnValueOnce();
  
    wrapper = mount(
      <ShapeDetect 
        image={url} 
        onRender={mockedReturnFunc} 
        options={{ 
          type: 'face',
        }}
      />
    );
    
  });

});