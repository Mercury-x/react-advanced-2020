import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import reducer from './reducer';
import { data } from '../../../data';
// reducer function
const defaultState = {
  people: [],
  isOpenModal: false,
  modalContent: 'hello world',
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {state.isOpenModal && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}>
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
