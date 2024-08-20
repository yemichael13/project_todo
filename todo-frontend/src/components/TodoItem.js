import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoItems = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching the todos!', error);
      }
    };

    fetchTodos();
  }, []);

  const handleEdit = (todo) => {
    setEditTodo(todo.id);
    setTitle(todo.title);
    setDescription(todo.description);
    setStatus(todo.status);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/api/todos/${editTodo}`, {
        title,
        description,
        status
      });
      setTodos(todos.map(todo => todo.id === editTodo ? { ...todo, title, description, status } : todo));
      setEditTodo(null);
    } catch (error) {
      console.error('Error updating the todo!', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting the todo!', error);
    }
  };

  return (
    <div>
      <h2>Todo Items</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editTodo === todo.id ? (
              <div>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="text"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
              </div>
            ) : (
              <div>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
                <p>Status: {todo.status}</p>
                <button onClick={() => handleEdit(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItems;
