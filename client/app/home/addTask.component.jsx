import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class AddTask extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      taskName: '',
      taskDescription: ''
    }
  }

  changeName(event) {
    this.setState({ taskName: event.target.value })
  }

  changeDescription(event) {
    this.setState({ taskDescription: event.target.value })
  }

  render() {
    const actions = [
     <FlatButton
       label="Cancel"
       primary={true}
       onTouchTap={this.handleClose.bind(this)}
     />,
     <FlatButton
       label="Add task"
       primary={true}
       keyboardFocused={true}
       onTouchTap={this.addTask.bind(this)}
     />,
   ]

    return(
      <div>
        <RaisedButton label="Add a task" onTouchTap={this.handleOpen.bind(this)} />
          <Dialog
            title="Add a task"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose.bind(this)}
          >
          <TextField
            floatingLabelText="Name"
            value={this.state.taskName}
            onChange={this.changeName.bind(this)}
          />
          <br></br>
          <TextField
            floatingLabelText="Description"
            value={this.state.taskDescription}
            onChange={this.changeDescription.bind(this)}
          />
          </Dialog>
      </div>
    )
  }

  handleOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  addTask() {
    this.setState({ open: false })
    this.props.onAddTask({ name: this.state.taskName, description: this.state.taskDescription })
  }

}

export default AddTask
