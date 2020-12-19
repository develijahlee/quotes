const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD:backend/models/Quote.js
const QuoteSchema = new Schema({
  content: String,
  author: String
=======
const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
>>>>>>> parent of a92d13f... submit strings to server from input:backend/models/Task.js
});

module.exports = mongoose.model("Quotes", QuoteSchema);