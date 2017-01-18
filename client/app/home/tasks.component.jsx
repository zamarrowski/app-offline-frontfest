import React, { Component } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


class Tasks extends Component {

  constructor(props) {
    super(props)
    this.state = {
      multiSelectable: true
    }
  }

  render() {
    const taskNode = this.props.list.map(task => {
      return (
        <TableRow key={task._id}>
          <TableRowColumn>{task.name}</TableRowColumn>
          <TableRowColumn>{task.description}</TableRowColumn>
          <TableRowColumn>{task.completed ? "Completed" : "Not completed"}</TableRowColumn>
        </TableRow>
      )
    })

    return(
      <Table multiSelectable={this.state.multiSelectable} onRowSelection={this.selectTask.bind(this)}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {taskNode}
        </TableBody>
      </Table>
    )
  }

  selectTask(key) {
    console.log(key)
  }

}

export default Tasks
