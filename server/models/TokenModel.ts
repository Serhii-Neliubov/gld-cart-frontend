
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IToken extends Document {
    user: Schema.Types.ObjectId;
    refreshToken: string;
}

const tokenSchema: Schema<IToken> = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    refreshToken: {
        type: String,
        required: true,
    },
});

const TokenModel: Model<IToken> = mongoose.model('TokenModel', tokenSchema) as Model<IToken>;

export default TokenModel;
