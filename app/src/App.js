import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Radu', age: 28 },
      { name: 'Vasi', age: 29 },
      { name: 'Angela Merkel', age: 63 },
    ],
    showPeople: true,
  }

  nameChangedHandler = (name, index) => {
    const match = (item, i) => i === index ? { name, age: item.age } : item
    const people = this.state.people.map(match)
    this.setState({ people })
  }

  togglePeopleHandler = () => this.setState({ showPeople: !this.state.showPeople })

  deletePersonHandler = (index) => {
    const people = [...this.state.people]
    people.splice(index, 1)
    this.setState({ people })
  }

  listPeople = () => {
    return this.state.people.map((person, index) =>
        <Person key={index}
                index={index}
                name={person.name}
                age={person.age}
                onChange={this.nameChangedHandler}
                onClick={this.deletePersonHandler}
        />
    )
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    }

    const classes = []

    if (this.state.people.length <= 2)
      classes.push('red')

    if (this.state.people.length <= 1)
      classes.push('bold')

    return (
      <StyleRoot>
        <div className='App'>
          <h1>hello world</h1>
          <p className={classes.join(' ')}>this is a react app</p>
          <button
              style={style}
              onClick={this.togglePeopleHandler}>switch name
          </button>
          {
            this.state.showPeople ?
                <div> {this.listPeople()} </div> :
                null
          }
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App)
