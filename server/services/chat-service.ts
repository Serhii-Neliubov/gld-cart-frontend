import MessageModel, { IMessage } from "../models/Message";
import {IUser}                    from "../models/User";

class ChatService {
  async createMessage(text: string, sender: string, recipient: string): Promise<IMessage> {
    const [newMessage] = await Promise.all([MessageModel.create({
      text: text,
      sender: sender,
      receiver: recipient,
    })]);

    await newMessage.save();
    return newMessage;
  }

  async getAllMessages(sender: string, recipient: string): Promise<Array<{ myself: boolean; message: string }>> {
    const messages = await MessageModel.find({
      $or: [
        { sender: sender, receiver: recipient },
        { sender: recipient, receiver: sender },
      ],
    }).sort({ updatedAt: 1 });

    const typedMessages: IMessage[] = messages as IMessage[];

    return typedMessages.map((msg) => ({
      myself: msg.sender.toString() === sender,
      message: msg.text,
    }));
  }


}

export default new ChatService();
