import React, { Component, Fragment } from 'react'
// import Aux from '../../../../hoc/Aux'

class RandomPersonName extends Component {
  randomize() {
    return this.props.name
      .split('')
      .sort(() => 0.5 - Math.random())
      .join('')
  }

  render() {
    return (
      <Fragment>
        <div>Randomized name:</div>
        <div>{this.randomize()}</div>
      </Fragment>
    )
  }
}

export default RandomPersonName
