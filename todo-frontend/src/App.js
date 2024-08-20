import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/add-todo">Add Todo</Link>
            </li>
            <li>
              <Link to="/todo-list">Todo List</Link>
            </li>
            <li>
              <Link to="/todo-item">Manage Todos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/add-todo" element={<AddTodo />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/todo-item" element={<TodoItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
