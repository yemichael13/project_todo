const connection = require("../app");

// Create and Save a new Todo
exports.create = (req, res) => {
  const { title, description, status } = req.body;
  connection.query(
    "INSERT INTO todos (title, description, status) VALUES (?, ?, ?)",
    [title, description, status],
    (error, results) => {
      if (error) throw error;
      connection.query(
        "SELECT * FROM todos WHERE id = ?",
        [results.insertId],
        (error, results) => {
          if (error) throw error;
          res.status(201).send(results[0]);
        }
      );
    }
  );
};

// Retrieve all Todos
exports.findAll = (req, res) => {
  connection.query("SELECT * FROM todos", (error, results) => {
    if (error) throw error;
    res.status(200).send(results);
  });
};

// Retrieve a single Todo by Id
exports.findOne = (req, res) => {
  const { todoId } = req.params;
  connection.query("SELECT * FROM todos WHERE id = ?", [todoId], (error, results) => {
    if (error) throw error;
    if (results.length === 0) return res.status(404).send({ message: "Todo not found" });
    res.status(200).send(results[0]);
  });
};

// Update a Todo by Id
exports.update = (req, res) => {
  const { todoId } = req.params;
  const { title, description, status } = req.body;
  connection.query(
    "UPDATE todos SET title = ?, description = ?, status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
    [title, description, status, todoId],
    (error, results) => {
      if (error) throw error;
      if (results.affectedRows === 0) return res.status(404).send({ message: "Todo not found" });
      connection.query(
        "SELECT * FROM todos WHERE id = ?",
        [todoId],
        (error, results) => {
          if (error) throw error;
          res.status(200).send(results[0]);
        }
      );
    }
  );
};

// Delete a Todo by Id
exports.delete = (req, res) => {
  const { todoId } = req.params;
  connection.query("DELETE FROM todos WHERE id = ?", [todoId], (error, results) => {
    if (error) throw error;
    if (results.affectedRows === 0) return res.status(404).send({ message: "Todo not found" });
    res.status(200).send({ message: "Todo was deleted successfully!" });
  });
};
