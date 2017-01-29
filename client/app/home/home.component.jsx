import React, { Component } from 'react'
import axios from 'axios'
import PouchDB from 'pouchdb'
import PouchDBFind from 'pouchdb-find'
PouchDB.plugin(PouchDBFind)

import settings from './../settings'
import Tasks from './tasks.component.jsx'
import AddTask from './addTask.component.jsx'

class Home extends Component {

  constructor() {
    super()
    this.state = {
      tasks: []
    }
    this.tasksDB = new PouchDB('tasks')
  }

  render() {
    return(
      <div>
        <h3>Tasks</h3>
        <AddTask onAddTask={this.addTask.bind(this)}></AddTask>
        <Tasks list={this.state.tasks} onRemoveTask={this.removeTask.bind(this)}></Tasks>
      </div>
    )
  }

  addTask(newTask) {
    axios.post(settings.baseService + '/task', newTask).then(response => {
      this.getTasks()
    })
  }

  componentDidMount() {
    if (window.navigator.onLine) {
      this.getTasks()
    } else {
      this.getTasksOffline()
    }
  }

  getTasks() {
    axios.get(settings.baseService + '/task').then(response => {
      this.setState({ tasks: response.data })
      this.tasksDB.bulkDocs(response.data)
    })
  }

  getTasksOffline() {
    this.tasksDB.allDocs({include_docs: true}).then(response => {
      let tasks = []
      for (let row of response.rows) {
        tasks.push(row.doc)
      }
      this.setState({ tasks: tasks })
    })
  }

  removeTask(task) {
    axios.delete(settings.baseService + '/task/' + task._id).then(response => {
      this.getTasks()
    })
  }
}

export default Home
