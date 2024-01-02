import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IToken extends Document {
    user: Schema.Types.ObjectId;
    refreshToken: string;
}

const tokenSchema: Schema<IToken> = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    refreshToken: {
        type: String,
        required: true,
    },
});

const Token: Model<IToken> = mongoose.model('Token', tokenSchema) as Model<IToken>;

export default Token;
