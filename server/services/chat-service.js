const MessageModel = require("../models/Message");
class ChatService {
  async createMessage(text, sender, receiver) {
    const newMessage =  await MessageModel.create({
      text: text,
      sender: sender,
      receiver: receiver,
    });
    await newMessage.save();
    return newMessage;
  }
  async getAllMessages(sender, receiver){

    const messages = await MessageModel.find({
      $or: [
        { sender: sender, receiver: receiver },
        { sender: receiver, receiver: sender }
      ]
    }).sort({ updatedAt: 1 });


    return messages.map((msg)=> {
      return{
        myself: msg.sender.toString() === sender,
        message: msg.text,
      }
    });

  }
}
module.exports = new ChatService();
