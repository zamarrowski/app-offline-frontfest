import React, { Component } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RemoveIcon from 'material-ui/svg-icons/action/delete'
import CompletedIcon from 'material-ui/svg-icons/action/done'


class Tasks extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let removeButtonStyle = {
      marginLeft: '15px'
    }
    const taskNode = this.props.list.map(task => {
      return (
        <TableRow key={task._id}>
          <TableRowColumn>{task.name}</TableRowColumn>
          <TableRowColumn>{task.description}</TableRowColumn>
          <TableRowColumn>{task.completed ? "Completed" : "Not completed"}</TableRowColumn>
          <TableRowColumn>
            <FloatingActionButton mini={true}>
              <CompletedIcon />
            </FloatingActionButton>
            <FloatingActionButton mini={true} secondary={true} style={ removeButtonStyle } onTouchTap={this.removeTask.bind(this, task)}>
              <RemoveIcon />
            </FloatingActionButton>
          </TableRowColumn>
        </TableRow>
      )
    })

    return(
      <Table>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Actions</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {taskNode}
        </TableBody>
      </Table>
    )
  }

  removeTask(task) {
    this.props.onRemoveTask(task)
  }

}

export default Tasks
