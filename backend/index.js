const express = require('express');
const quoteController = require("./controllers/QuoteController");
require("./config/db");
const app = express();
const port = 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app
  .route("/quotes")
  .get(quoteController.listAllQuotes)
  .post(quoteController.createNewQuote);

app
  .route("/quotes/:quoteid")
  .get(quoteController.readQuote)
  .put(quoteController.updateQuote)
  .delete(quoteController.deleteQuote);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});