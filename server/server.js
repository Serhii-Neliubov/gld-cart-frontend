require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/errorMiddleware')
const port = process.env.PORT || 5000;
const server = express();


server.use(express.json());
server.use(cookieParser());
server.use(cors());
server.use(authRoutes);
server.use(errorMiddleware);

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
})
    .then((result) => server.listen(process.env.DB_PORT))
    .catch((err) => console.log(err));


server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
