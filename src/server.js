const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let tasks = [];

// Route to get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Route to create a new task
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  newTask.id = Date.now();
  tasks.push(newTask);
  res.status(201).json(newTask);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
