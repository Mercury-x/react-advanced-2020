import React from 'react';
// 这个组件介绍我们为什么要使用useState
const ErrorExample = () => {
  let title = 'random title';
  let handleClick = () => {
    title = 'hello world'; // 没有渲染组件
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
