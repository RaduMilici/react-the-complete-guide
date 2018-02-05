import React, { Component } from 'react'
import classes from './App.css'
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'
import WithClass from '../hoc/WithClass'
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    count: 3,
    persons: [],
    showPeople: true,
  }

  constructor(props) {
    super(props)
    console.log('App.js constructor', props)
  }

  componentWillMount() {
    console.log('App.js componentWillMount')
    const persons = []
    for (let i = 0; i < this.state.count; i++) {
      const name = this.randomName()
      const age = Math.round(Math.random() * 1000)
      const id = Math.random()
      persons.push({ name, age, id })
    }
    this.setState({ persons })
  }

  componentDidMount() {
    console.log('App.js componentDidMount')
  }

  randomName() {
    return Math.random()
      .toString(36)
      .slice(2)
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('App.js shouldComponentUpdate', nextProps, nextState, nextContext)
    return true
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('App.js componentWillUpdate', nextProps, nextState, nextContext)
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    console.log('App.js componentWillUpdate', prevProps, prevState, prevContext)
  }

  nameChangedHandler = (name, index) => {
    const match = (item, i) => (i === index ? { name, age: item.age, id: item.id } : item)
    const persons = this.state.persons.map(match)
    this.setState({ persons })
  }

  togglePeopleHandler = () => this.setState({ showPeople: !this.state.showPeople })

  deletePersonHandler = index => {
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({ persons })
  }

  render() {
    console.log('App.js render')

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => this.setState({ showPeople: true })}>Show Persons</button>
        <Cockpit onClick={this.togglePeopleHandler} showPeople={this.props.showPeople} />
        {this.state.showPeople ? (
          <Persons
            persons={this.state.persons}
            onChange={this.nameChangedHandler}
            onClick={this.deletePersonHandler}
          />
        ) : null}
      </WithClass>
    )
  }
}

export default App
