import React, { Component } from 'react';

import './App.css';

import VisualGuide from '../VisualGuide/VisualGuide';
import ControlPanel from '../ControlPanel/ControlPanel';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      on: false
    }

    this.handleOn = this.handleOn.bind(this);
  }

  handleOn() {
    console.log('App.handleOn()')
    this.setState({
      on: !this.state.on
    });
  }

  render() {
    return (
      <div className="App">
        This is your app
        <VisualGuide on={this.state.on} direction={'horizontal'}/>
        <ControlPanel on={this.state.on} handleOn={this.handleOn}/>
      </div>
    );
  }
}

export default App;
