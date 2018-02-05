import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RandomPersonName from './RandomPersonName/RandomPersonName'
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
    this.inputElement.focus()
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
          ref={inp => (this.inputElement = inp)}
          value={this.props.name}
          onChange={event => this.props.onChange(event.target.value, this.props.index)}
        />
        <RandomPersonName name={this.props.name} />
      </div>
    )
  }
}

Person.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
}

export default Person
