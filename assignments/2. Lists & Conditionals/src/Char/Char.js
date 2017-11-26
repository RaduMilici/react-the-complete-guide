import React from 'react';
import './Char.css';

const Char = ({ char, onClick, index }) => {
  return (
    <span
        className='char'
        onClick={() => onClick(index)}
    >
      {char}
    </span>
  );
}

export default Char;
