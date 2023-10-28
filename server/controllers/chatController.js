const chatService = require("../services/chat-service");

module.exports.create_message = async (req, res, next) => {
  const { text, sender, receiver } = req.body;
  try {
    const newMessage = await chatService.createMessage(text, sender, receiver);
    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};
module.exports.update_message = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
module.exports.delete_message = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
