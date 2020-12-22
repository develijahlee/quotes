const Quote = require("../models/Quote");
// List all available quotes from database
exports.listAllQuotes = (req, res) => {
  Quote.find({}, (err, quote) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(quote);
  });
};
// Create a new quote and save it to database
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
// Read a particular quote by _id
exports.readQuote = (req, res) => {
  Quote.findById(req.params.quoteid, (err, quote) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(quote);
  });
};
// Update a particular quote by _id
exports.updateQuote = (req, res) => {
  Quote.findOneAndUpdate(
    { _id: req.params.quoteid },
    req.body,
    { new: true },
    (err, quote) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(quote);
    }
  );
};
// Delete a particular quote by _id
exports.deleteQuote = (req, res) => {
  Quote.deleteOne({ _id: req.params.quoteid }, (err, quote) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Quote successfully deleted" });
  });
};