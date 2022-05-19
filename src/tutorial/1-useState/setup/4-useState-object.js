import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'azoux',
    age: '123',
    message: 'random message',
  });

  // const [copy, handler] = useState(1);
  // const copy2 = copy;
  // handler(2);
  // console.log(copy === copy2);

  const changeMessage = () => {
    setPerson({ ...person, message: 'hello wrold' });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
