import React, { Component } from 'react'
import classes from './Person.css'

class Person extends Component {
  constructor(props) {
    super(props)
    console.log('Person.js constructor')
  }

  componentWillMount() {
    console.log('Person.js componentWillMount')
  }

  componentDidMount() {
    console.log('Person.js componentDidMount')
  }

  componentWillUnmount() {
    console.log('Person.js componentWillUnmount')
  }

  render() {
    console.log('Person.js render')
    return (
      <div className={classes.person}>
        <span onClick={() => this.props.onClick(this.props.index)}>
          My name is {this.props.name} and I am {this.props.age} years old.
        </span>
        <p>{this.props.children}</p>
        <input
          type="text"
          value={this.props.name}
          onChange={event =>
            this.props.onChange(event.target.value, this.props.index)
          }
        />
      </div>
    )
  }
}

export default Person
