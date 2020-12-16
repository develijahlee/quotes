const express = require('express');
const QuoteController = require("./controllers/QuoteController");
require("./config/db");
const app = express();
const port = 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app
  .route("/quotes")
  .get(QuoteController.listAllQuotes)
  .post(QuoteController.createNewQuote);

app
  .route("/quotes/:quoteid")
  .get(QuoteController.readQuote)
  .put(QuoteController.updateQuote)
  .delete(QuoteController.deleteQuote);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});