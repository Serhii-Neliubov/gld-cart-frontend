const socket = require("socket.io");

module.exports = function (server) {
  const io = socket(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true,
    },
  });
  global.onlineUsers = new Map();
  io.on("connection", (socket) => {
    console.log("Some dickhead has connected");
    global.chatSocket = socket;
    socket.on("addUser", (userId) => {
      onlineUsers.set(userId, socket.id);
    });

    socket.on("chat message", async (msg) => {
      const sendUserSocket = onlineUsers.get(msg.receiver);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit("msg-receive", msg.text);
      }
    });
  });
};
