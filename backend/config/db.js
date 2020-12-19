require('dotenv').config()
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch(err => console.log(err))

require("../models/Task");