import React from 'react';
import { updateTodo, deleteTodo } from '../api';

const TodoItem = ({ todo, refreshTodos }) => {
  const handleStatusChange = async () => {
    const updatedTodo = { ...todo, status: todo.status === 'pending' ? 'completed' : 'pending' };
    await updateTodo(todo.id, updatedTodo);
    refreshTodos();
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    refreshTodos();
  };

  return (
    <div className="todo-item">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Status: {todo.status}</p>
      <p>Created At: {new Date(todo.created_at).toLocaleString()}</p>
      <p>Updated At: {new Date(todo.updated_at).toLocaleString()}</p>
      <button className="complete" onClick={handleStatusChange}>
        {todo.status === 'pending' ? 'Mark as Completed' : 'Mark as Pending'}
      </button>
      <button className="delete" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
