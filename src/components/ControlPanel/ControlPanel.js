import React, { Component } from 'react';

// Material UI component
import { Toggle } from 'material-ui';

// Material UI theme
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './ControlPanel.css';

class ControlPanel extends Component {
  render() {
    return (
      <div className="controlPanel">
        I'm your Control Panel!
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Toggle
            label={this.props.on ? "Stop" : "Start"}
            labelPosition='right'
            onToggle={this.props.handleOn}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ControlPanel;