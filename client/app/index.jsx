import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Home from './home/home.component.jsx'
import Menu from './Menu/Menu.component.jsx'

const style = {
  margin: '0px 20px'
}

injectTapEventPlugin()

render(
  <MuiThemeProvider>
    <div>
      <Menu></Menu>
      <div style={ style }>
        <Router history={browserHistory}>
          <Route path="/" component={Home}></Route>
        </Router>
      </div>
    </div>
  </MuiThemeProvider>
, document.getElementById('container'))
