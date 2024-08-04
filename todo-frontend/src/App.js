import React from 'react';
import './style.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodo refreshTodos={() => {}} />
      <TodoList />
    </div>
  );
}

export default App;
