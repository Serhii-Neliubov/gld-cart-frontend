const MessageModel = require("../models/Message");
class ChatService {
  async createMessage(text, sender, receiver) {
    const newMessage =  await MessageModel.create({
      text: text,
      sender: sender,
      receiver: receiver,
    });
  }
}
module.exports = new ChatService();
