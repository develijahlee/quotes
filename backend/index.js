const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = express.Router()

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.use('/', router);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
