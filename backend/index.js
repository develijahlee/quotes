const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use(function (req, res) {
  res.status(404).send("Page not found")
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
