const express = require("express");
const router = express.Router();
const todos = require("../controllers/todo.controller");

// Create a new Todo
router.post("/todos", todos.create);

// Retrieve all Todos
router.get("/todos", todos.findAll);

// Retrieve a single Todo with todoId
router.get("/todos/:todoId", todos.findOne);

// Update a Todo with todoId
router.put("/todos/:todoId", todos.update);

// Delete a Todo with todoId
router.delete("/todos/:todoId", todos.delete);

module.exports = router;
