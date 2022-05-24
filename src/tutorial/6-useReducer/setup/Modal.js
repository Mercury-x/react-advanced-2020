import React, { useEffect, useState } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  const [timeId, setTimeId] = useState(null);
  useEffect(() => {
    console.log('in');
    clearTimeout(timeId);
    const id = setTimeout(() => {
      closeModal();
    }, 3000);
    setTimeId(id);
  }, []);
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
