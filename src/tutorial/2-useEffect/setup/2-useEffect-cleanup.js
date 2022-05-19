import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  // useEffect用于注册事件，传入空依赖可以确保只触发一次
  // my method
  // useEffect(() => {
  //   window.addEventListener('resize', checkSize);
  // }, []);

  // 使用clean up function
  useEffect(() => {
    console.log('use effect');
    window.addEventListener('resize', checkSize);
    // 每次设置useEffect的时候，也要记得清除effect
    return () => {
      console.log('clean up');
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
