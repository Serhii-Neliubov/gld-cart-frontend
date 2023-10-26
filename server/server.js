require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/router");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/errorMiddleware");
const { Server } = require("socket.io");
const { createServer } = require("node:http");
const port = process.env.PORT || 5000;

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(router);
app.use(errorMiddleware);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(process.env.DB_PORT))
  .catch((err) => console.log(err));

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
