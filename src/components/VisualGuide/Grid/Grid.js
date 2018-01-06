import React, { Component } from 'react';

import './Grid.css';

class Grid extends Component {

  render() {
    const length    = 300;
    const thickness = 100;
    let width, height;
    if (this.props.orientation) {
      width = length;
      height = thickness;
    } else {
      width = thickness;
      height = length;
    }

    const markSize = 30;
    
    const transformString = `translate(${this.props.orientation ? 0 : thickness},0)`
      +`rotate(${this.props.orientation ? 0 : 90})`;

    return (
      <svg className="grid" width={width} height={height}>
        <g transform={transformString}>
          <path id="frame" d={`m ${length*0.25} 0 v ${thickness}`}/>
          <path id="frame" d={`m ${length*0.50} 0 v ${thickness}`}/>
          <path id="frame" d={`m ${length*0.75} 0 v ${thickness}`}/>
          <path id="mark" class="motion"  d={`m 0 0 h 50 v ${thickness} h -1 z`}/>
        </g>
      </svg>
    );
  }
}

export default Grid;