import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const { id } = useParams();
  const [name, setName] = useState('default name');
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <Link to='/' className='btn'>
        Back Home
      </Link>
    </div>
  );
};

export default Person;
