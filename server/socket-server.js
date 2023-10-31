const socket = require("socket.io");

module.exports = function (server) {
  const io = socket(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true,
    },
  });
  const onlineUsers = new Map();
  io.on("connection", async (socket) => {
    console.log("Someone has connected");

    socket.on("addUser", async (userId) => {
      onlineUsers.set(userId, socket.id);
      console.log(userId + " " + socket.id);
    })
    socket.on("chat message", async (msg) => {
      console.log(msg);
      console.log("text: " + msg.text);
      console.log("sender " + msg.sender);
      console.log("recipient: " + msg.recipient);
      const sendUserSocket = onlineUsers.get(msg.recipient);
      console.log(sendUserSocket);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit("msg-receive", msg.text);
        console.log(
          `Received message from ${msg.sender} to ${msg.recipient}: ${msg.text}`
        );
      }
    });
  });
};
