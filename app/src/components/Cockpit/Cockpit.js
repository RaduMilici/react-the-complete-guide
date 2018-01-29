import React from 'react'
import classes from './Cockpit.css'

const Cockpit = props => (
  <div className={classes.cockpit}>
    <h1>hello world</h1>
    <p>this is a react app</p>
    <button className={props.showPeople ? classes.red : ''} onClick={props.onClick}>
      switch name
    </button>
  </div>
)

export default Cockpit
