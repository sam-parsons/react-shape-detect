import React from 'react';
import ShapeDetect from './components/ShapeDetect';
import Overlay from './components/Overlay';
import { ModuleProps, ModuleState,  } from './types';
import mockOnRender from './util/mockOnRender';
import { debounce } from 'lodash';

export default class Module extends React.Component<ModuleProps, ModuleState> {

  constructor(props: ModuleProps) {
    super(props);

    this.state = {
      componentData: [],
      input: props.options?.overlay?.input,
      imageData: {}
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  updateDimensions = debounce((event: any) => {
    const { naturalHeight, naturalWidth, height, width } = document.querySelector('#shape-detect-' + this.props.image.slice(-8)) as HTMLImageElement;
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

  filterAttributes(overlay: any, imageData: any): { scale: number }  {
    const { scale } = overlay
    return { scale };
  }

  render() {
    const component = this.state.input

    return (
      <div className={'wrap'} style={{
        position: 'relative',
        display: 'inline-block' /* <= shrinks container to image size */
      }}>
        <ShapeDetect 
          image={this.props.image} 
          onRender={this.props.onRender ? this.newOnRender(this.props.onRender) : mockOnRender} 
          options={this.props.options} 
        />
        {this.state.componentData.length ? 
          <Overlay 
            component={component} 
            componentAttributes={this.filterAttributes(this.props.options?.overlay, this.state.imageData)}
            imageData={this.state.imageData}
            componentData={this.state.componentData} 
          /> :
          null
        }
      </div>
    );
  }
}