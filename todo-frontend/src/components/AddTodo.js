import React, { useState } from 'react';
import { createTodo } from '../api';

const AddTodo = ({ refreshTodos }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = { title, description, status };
    await createTodo(newTodo);
    setTitle('');
    setDescription('');
    setStatus('pending');
    refreshTodos();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
