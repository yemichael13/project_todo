import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [showTodos, setShowTodos] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('There was an error fetching the todos!', error);
      }
    };

    fetchTodos();
  }, []);

  const toggleTodos = () => {
    setShowTodos(!showTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={toggleTodos}>
        {showTodos ? 'Hide Todos' : 'Show Todos'}
      </button>
      {showTodos && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <p>Status: {todo.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
