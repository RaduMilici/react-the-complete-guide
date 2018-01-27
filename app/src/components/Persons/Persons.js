import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
  constructor(props) {
    super(props)
    console.log('Persons.js constructor')
  }

  componentWillMount() {
    console.log('Persons.js componentWillMount')
  }

  componentDidMount() {
    console.log('Persons.js componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('Persons.js componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(
      'Persons.js shouldComponentUpdate',
      nextProps,
      nextState,
      nextContext
    )
    return nextProps.persons !== this.props.persons
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log(
      'Persons.js componentWillUpdate',
      nextProps,
      nextState,
      nextContext
    )
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    console.log(
      'Persons.js componentDidUpdate',
      prevProps,
      prevState,
      prevContext
    )
  }

  render() {
    console.log('Persons.js render')

    return this.props.persons.map((person, index) => (
      <Person
        index={index}
        key={person.id}
        name={person.name}
        age={person.age}
        onChange={this.props.onChange}
        onClick={this.props.onClick}
      />
    ))
  }
}

export default Persons
