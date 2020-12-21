const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  content: String,
  author: String
});

module.exports = mongoose.model("Tasks", QuoteSchema);