import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { firstName, email, id: new Date().getTime().toString() };
      setPeople((people) => {
        return [...people, person];
      });
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        {/* 也可以选择在button处提交 */}
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className='btn' type='submit'>
            add person
          </button>
        </form>
      </article>
      <ul>
        {people.map((person, index) => {
          return (
            <div className='item' key={person.id}>
              <h4>{person.firstName}</h4>
              <p>{person.email}</p>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default ControlledInputs;
