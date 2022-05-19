import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    setPeople((prev) => {
      return prev.filter((val) => val.id !== id);
    });
  };
  return (
    <>
      {people.map((val) => {
        const { id, name } = val;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>delete</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clearn items
      </button>
    </>
  );
};

export default UseStateArray;
