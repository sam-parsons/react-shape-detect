import React from 'react';
import ShapeDetect from './components/ShapeDetect';
import Overlay from './components/Overlay';
import { ModuleProps, ModuleState,  } from './types';
import mockOnRender from './util/mockOnRender';
import { debounce } from 'lodash';
import { v4 } from 'uuid';

export default class Module extends React.Component<ModuleProps, ModuleState> {

  constructor(props: ModuleProps) {
    super(props);

    this.state = {
      componentData: [],
      input: props.options?.overlay?.input,
      imageData: {},
      id: v4()
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  updateDimensions = debounce((event: any) => {
    const { 
      naturalHeight, 
      naturalWidth, 
      height, 
      width 
    } = document.querySelector(this.state.id) as HTMLImageElement;
    // refactor to use querySelectorAll
    // use web crypto, store in state
    this.setState({
      imageData: { naturalHeight, naturalWidth, height, width }
    });
  }, this.props.options?.resizeDebounce ?? 250);
  
  newOnRender(onRender: any) {
    const that = this;
    return function(data: any, imageData: any) {
      that.setState({componentData: data, imageData }, () => {
        onRender(data); // onRender from user
      });
    }
  }

  render() {
    const component = this.state.input;
    const componentStyle: {} = {
      position: 'relative',
      display: 'inline-block' /* <= shrinks container to image size */
    };

    return (
      <div className={'wrap'} style={componentStyle}>
        <ShapeDetect 
          image={this.props.image} 
          onRender={this.props.onRender ? this.newOnRender(this.props.onRender) : mockOnRender} 
          options={this.props.options} 
          id={this.state.id}
        />
        <Overlay 
          component={component} 
          componentAttributes={{ scale: this.props.options?.overlay?.scale }}
          imageData={this.state.imageData}
          componentData={this.state.componentData} 
          input={this.props.options?.overlay?.input}
        />
      </div>
    );
  }
}