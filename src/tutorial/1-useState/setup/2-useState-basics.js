import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState()); // [undefined, ƒ]
  // hook必须在组件内部

  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') setText('hello people');
    else setText('random title');
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button onClick={handleClick} className='btn'>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
