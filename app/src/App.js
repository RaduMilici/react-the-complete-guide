import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <p>this is a react app</p>
        <Person name="Radu" age="28"/>
        <Person name="Vasi" age="29"/>
        <Person name="Angela Merkel" age="63">
          Hello I am Angela Merkel
        </Person>
      </div>
    );
  }
}

export default App;
