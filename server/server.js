const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const authRoutes = require('./routes/authRoutes')

const server = express();

server.use(express.json());

const dbURI = 'mongodb+srv://kolya_228:oD5TAoabAZyJDOhr@cluster0.iaw7xzn.mongodb.net/node-auth';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((result) => server.listen(9000))
    .catch((err) => console.log(err));

server.use(cors());
server.use(authRoutes);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
