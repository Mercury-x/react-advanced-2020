import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // hook不能在条件语句中设置
  useEffect(() => {
    console.log('call useEffect');
    if (value > 0) document.title = `New Message(${value})`;
  }, [value]); // 仅当依赖数组中的值更新的时候调用回调函数
  console.log('render component');

  useEffect(() => {
    console.log('initial render');
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        increase
      </button>
    </>
  );
};

export default UseEffectBasics;
