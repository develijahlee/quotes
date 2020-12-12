const mongoose = require("mongoose");
const dbURI = 'mongodb+srv://elijahlee:elijahlee!@cluster0.f9k2w.mongodb.net/quotesDB?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch(err => console.log(err))

require("../models/Task");