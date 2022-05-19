import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('kkk');
  // return the 'last'
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <div>
      <h1>{firstValue}</h1>
      <h1>{secondValue}</h1>
      {text && <h2>hello world h2</h2>}
      {text ? <h1>text is true</h1> : <h1>text is not true</h1>}
    </div>
  );
};

export default ShortCircuit;
