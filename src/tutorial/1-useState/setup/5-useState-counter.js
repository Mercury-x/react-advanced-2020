import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexSetValue = () => {
    setTimeout(() => {
      // 给setValue传入函数可以获取到当前的值
      // setValue是异步的，这可能导致多次更新所使用的都是初始值，而不是前几次更新结束的值
      setValue((prev) => prev + 1);
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className='btn' onClick={() => setValue(0)}>
          reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexSetValue}>
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
