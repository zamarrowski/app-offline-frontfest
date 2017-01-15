import React, { Component } from 'react'
import Drawer from 'material-ui/drawer';
import MenuItem from 'material-ui/menuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleMenu() {
    this.setState({ open: !this.state.open})
  }

  render() {
    return(

      <div>
        <AppBar title="App Offline"
          onLeftIconButtonTouchTap={this.toggleMenu.bind(this)}>
        </AppBar>
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
          >
          <MenuItem>Home</MenuItem>
          <MenuItem>Tasks</MenuItem>
          <MenuItem>Add task</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default Home
