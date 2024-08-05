Todo Application Backend

Setup Instructions
Prerequisites
Node.js (v12 or higher)
MySQL


Installation

Clone the repository:

git clone <your-repo-url>
cd <your-repo-directory>


Install dependencies:

npm install
Configure the database:

Create a MySQL database named todo_db.

Update the db.config.js file with your MySQL credentials:

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "todo_db"
};


Set up the database schema:

Execute the following SQL commands in your MySQL database to create the todos table:

sql code 
CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


Running the Server

Start the server:

node app.js


API Endpoints

Create a new Todo: POST /api/todos
Retrieve all Todos: GET /api/todos
Retrieve a single Todo by Id: GET /api/todos/:todoId
Update a Todo by Id: PUT /api/todos/:todoId
Delete a Todo by Id: DELETE /api/todos/:todoId

