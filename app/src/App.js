import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

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
    const people = [...this.state.people];
    people.splice(index, 1);
    this.setState({ people });
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
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    return (
      <div className='App'>
        <h1>hello world</h1>
        <p>this is a react app</p>
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
    )
  }
}

export default App
