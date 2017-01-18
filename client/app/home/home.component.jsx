import React, { Component } from 'react'
import axios from 'axios'

import settings from './../settings'
import Tasks from './tasks.component.jsx'

class Home extends Component {

  constructor() {
    super()
    this.state = {
      tasks: []
    }
  }

  render() {
    return(
      <div>
        <h3>Tasks</h3>
        <Tasks list={this.state.tasks}></Tasks>
      </div>
    )
  }

  componentDidMount() {
    axios.get(settings.baseService + '/task').then(response => {
      this.setState({ tasks: response.data })
    })
  }
}

export default Home
