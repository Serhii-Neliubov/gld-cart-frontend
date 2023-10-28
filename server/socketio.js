const { Server } = require("socket.io");

module.exports = function (server) {
  const io = new Server(server);
  io.on("connection", (socket) => {
    socket.on("chat message", async (msg) => {
      let result;
      try {
        // TODO store the message in the database
      } catch (e) {
        // TODO handle the failure
        return;
      }
      io.emit("chat message", msg, result.lastID);
    });
  });
};
