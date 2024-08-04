import axios from 'axios';

const API_URL = 'http://localhost:3000/api/todos';

// Create a new to-do item
export const createTodo = (todo) => {
  return axios.post(API_URL, todo);
};

// Get all to-do items
export const getTodos = () => {
  return axios.get(API_URL);
};

// Get a single to-do item
export const getTodo = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Update a to-do item
export const updateTodo = (id, todo) => {
  return axios.put(`${API_URL}/${id}`, todo);
};

// Delete a to-do item
export const deleteTodo = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
