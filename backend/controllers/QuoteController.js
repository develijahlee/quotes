const Quote = require("../models/Task");
// List all available tasks from database
exports.listAllQuotes = (req, res) => {
  Quote.find({}, (err, quote) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(quote);
  });
};
// Create a new task and save it to database
exports.createNewQuote = (req, res) => {
  let newQuote = new Quote({
    content: req.body.content,
    author: req.body.author
  });
  newQuote.save((err, quote) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(quote);
    }
  });
};
// Read a particular task by _id
exports.readQuote = (req, res) => {
  Quote.findById(req.params.quoteid, (err, quote) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(quote);
  });
};
// Update a particular task by _id
exports.updateQuote = (req, res) => {
  Quote.findOneAndUpdate(
    { _id: req.params.quoteid },
    req.body,
    { new: true },
    (err, task) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(quote);
    }
  );
};
// Delete a particular task by _id
exports.deleteQuote = (req, res) => {
  Quote.deleteOne({ _id: req.params.quoteid }, (err, quote) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Task successfully deleted" });
  });
};