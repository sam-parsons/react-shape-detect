import React, { useState } from 'react';
import ShapeDetect from './components/ShapeDetect';
import Overlay from './components/Overlay';
import { ModuleProps, ModuleState,  } from './types';
import mockOnRender from './util/mockOnRender';

export default class Module extends React.Component<ModuleProps, ModuleState> {

  constructor(props: ModuleProps) {
    super(props);

    this.state = {
      componentData: [],
      input: props.options?.overlay?.input
    }
  }
  
  newOnRender(onRender: any) {
    const that = this;
    return function(data: any) {
      that.setState({componentData: data}, () => {
        onRender(data);
      });
    }
  }

  filterAttributes(overlay: any): { scale: number }  {
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
            componentAttributes={this.filterAttributes(this.props.options?.overlay)}
            componentData={this.state.componentData} 
          /> :
          null
        }
      </div>
    );
  }
}