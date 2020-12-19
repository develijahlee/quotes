const express = require('express');
const taskController = require("./controllers/TaskController");
require("./config/db");
const app = express();
const port = 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app
  .route("/tasks")
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app
  .route("/tasks/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});