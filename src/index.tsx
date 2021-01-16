import React, { useState } from 'react';
import ShapeDetect from './components/ShapeDetect';
import { ModuleProps, ModuleState } from './types';
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

  render() {
    const component = this.state.input

    return (
      <React.Fragment>
        <ShapeDetect 
          image={this.props.image} 
          onRender={this.props.onRender ? this.newOnRender(this.props.onRender) : mockOnRender} 
          options={this.props.options} 
        />
        {this.state.componentData.map(data => {
          return component
        })}
      </React.Fragment>
    );
  }
}