const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const authRoutes = require('./routes/authRoutes')

const server = express();


const dbURI = 'mongodb+srv://kolya_228:oD5TAoabAZyJDOhr@cluster0.iaw7xzn.mongodb.net/node-auth';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((result) => server.listen(3000))
    .catch((err) => console.log(err));

server.use(cors());
server.use(authRoutes);
