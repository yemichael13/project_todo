import React, { useEffect, useState } from 'react';
import { getTodos } from '../api';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} refreshTodos={fetchTodos} />
      ))}
    </div>
  );
};

export default TodoList;
