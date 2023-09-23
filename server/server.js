const express = require("express");
const mongoose = require("mongoose");

const server = express();

const dbURI = 'mongodb+srv://kolya_228:oD5TAoabAZyJDOhr@cluster0.iaw7xzn.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then((result) => server.listen(3000))
  .catch((err) => console.log(err));

