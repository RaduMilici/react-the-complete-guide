import React from 'react'
import './UserOutput.css'

const UserOutput = ({ username }) => {
  return (
      <div className='user-output'>
        <p>{username}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
  )
}

export default UserOutput
