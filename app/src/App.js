import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Radu', age: 28 },
      { name: 'Vasi', age: 29 },
      { name: 'Angela Merkel', age: 63 },
    ]
  };

  nameChangedHandler = (name, index) => {
    const match = (item, i) => i === index ? { name, age: item.age } : item;
    const people = this.state.people.map(match);
    this.setState({ people });
  }

  switchNameHandler = () => {
    this.setState({ people: [ { name: 'radu' } ] });
  };

  listPeople = () => {
    return this.state.people.map((p, i) =>
        <Person key={i}
                index={i}
                name={p.name}
                age={p.age}
                onClick={this.switchNameHandler}
                onChange={this.nameChangedHandler}
        />
    );
  }

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className='App'>
        <h1>hello world</h1>
        <p>this is a react app</p>
        <button
            style={style}
            onClick={this.switchNameHandler}>switch name
        </button>
        {this.listPeople()}
      </div>
    );
  }
}

export default App;
