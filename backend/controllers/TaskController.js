const Task = require("../models/Task");
// List all available tasks from database
exports.listAllTasks = (req, res) => {
  Task.find({}, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};
// Create a new task and save it to database
exports.createNewTask = (req, res) => {
  let newTask = new Task(JSON.parse(req.body.test));
  newTask.save((err, task) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(task);
    }
  });
};
// Read a particular task by _id
exports.readTask = (req, res) => {
  Task.findById(req.params.taskid, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};
// Update a particular task by _id
exports.updateTask = (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.taskid },
    req.body,
    { new: true },
    (err, task) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(task);
    }
  );
};
// Delete a particular task by _id
exports.deleteTask = (req, res) => {
  Task.deleteOne({ _id: req.params.taskid }, (err, task) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Task successfully deleted" });
  });
};