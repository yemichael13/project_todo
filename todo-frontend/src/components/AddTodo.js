import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/todos', {
        title,
        description,
        status: 'pending' // Status is always set to 'pending'
      });
      console.log(response.data);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
