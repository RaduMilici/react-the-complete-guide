import React, { Component } from 'react'
import './App.css'
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

class App extends Component {
  state = { username: 'radu' }

  setUsername = (username) => this.setState({ username })

  render() {
    return (
      <div className="App">
        <UserInput value={this.state.username} onChange={this.setUsername}/>
        <br/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    )
  }
}

export default App
