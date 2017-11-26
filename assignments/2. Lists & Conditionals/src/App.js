import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    text: '',
    length: 0,
    min: 3,
    max: 7,
  };

  setText(text) {
    this.setState({ text, length: text.length });
  }

  listChars() {
    const makeChar = (c, i) =>
        <Char
            onClick={this.removeChar}
            key={`${c}${i}`}
            index={i}
            char={c}
        />;

    const l = this.state.length;
    const isProperLength = l > this.state.min && l < this.state.max;
    return isProperLength ? this.state.text.split('').map(makeChar) : null;
  }

  removeChar = i => {
    const textArr = this.state.text.split('');
    textArr.splice(i, 1);
    this.setText(textArr.join(''));
  }

  render() {
    return (
      <div className="App">
        <input
            type='text'
            value={this.state.text}
            onChange={(e) => this.setText(e.target.value)}/>
        <p>{this.state.length}</p>
        <Validation
            length={this.state.length}
            min={this.state.min}
            max={this.state.max}
        />
        {this.listChars()}
      </div>
    );
  }
}

export default App;
