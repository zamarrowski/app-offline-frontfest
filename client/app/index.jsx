import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Home from './home/home.component.jsx'

const style = {
  margin: '0px 20px'
}

injectTapEventPlugin()

render(
  <MuiThemeProvider>
    <div>
      <AppBar title="App Offline"></AppBar>
      <div style={ style }>
        <Router history={browserHistory}>
          <Route path="/" component={Home}></Route>
        </Router>
      </div>
    </div>
  </MuiThemeProvider>
, document.getElementById('container'))
