
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IMessage extends Document {
  text: string;
  sender: mongoose.Types.ObjectId;
  recipient: mongoose.Types.ObjectId;
  timestamp: Date;
}

const messageSchema: Schema<IMessage> = new Schema({
  text: {
    type: String,
    required: true,
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  recipient: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Message: Model<IMessage> = mongoose.model('Message', messageSchema) as Model<IMessage>;
export default Message;
