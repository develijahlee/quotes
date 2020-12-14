const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  content: String,
  author: String
});

module.exports = mongoose.model("Tasks", TaskSchema);