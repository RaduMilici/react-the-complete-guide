import React from 'react';
import './Person.css';

const person = ({ index, name, age, children, onClick, onChange }) => {
  return (
    <div
        className='person'
        onClick={() => onClick(index)}
    >
      <p>My name is {name} and I am {age} years old.</p>
      <p>{children}</p>
      <input
          type='text'
          value={name}
          onChange={(event) => onChange(event.target.value, index)}
      />
    </div>
  );
};

export default person;
