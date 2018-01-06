import React, { Component } from 'react';
import Grid from './Grid/Grid';


import './VisualGuide.css';

class VisualGuide extends Component {
  constructor(props) {
    super(props);
    this.state = { orientation: true } // true = horizontal, false = vertical

    this.swap = this.swap.bind(this);
  }

  swap() {
    this.setState({orientation: !this.state.orientation});
  }

  render() {
    return (
      <div className="visualGuide" onClick={this.swap}>
        <Grid orientation={this.state.orientation} progress={50}/>
        <p>
          VisualGuide status:
          {this.props.on ? 'ON' : 'OFF'}
          ({this.state.orientation ? 'horizontal' : 'vertical'}) 
        </p>
      </div>
    );
  }
}

export default VisualGuide;