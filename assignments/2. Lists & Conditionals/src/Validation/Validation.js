import React from 'react';

const Validation = ({ length, min, max }) => {
  let checked = 'length is OK';

  if (length <= min)
    checked = 'too short';
  else if (length >= max)
    checked = 'too long';

  return <p>{checked}</p>
};

export default Validation;
