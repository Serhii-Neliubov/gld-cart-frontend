import mongoose, { Document, Model, Schema } from "mongoose";
import validator from "validator";
import { addressSchema, IAddress } from "./Address";

export interface IUser extends Document {
  _id: string;
  type: string;
  name: string;
  surname: string;
  email: string;
  addresses: IAddress[];
  picture: string;
  password: string;
  passwordResetToken?: string;
  activeSubscription: string | null;
  BIO?: string;
  phone_number?: string;
  address?: string;
}

const userSchema: Schema<IUser> = new Schema({
  type: {
    type: String,
    required: [true, "Client's type is undefined"],
  },
  name: {
    type: String,
    required: [true, "Please, enter your first name"],
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please, enter an email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please, enter a valid email"],
  },
  addresses: [addressSchema],
  picture: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Please, enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  passwordResetToken: {
    type: String,
  },
  activeSubscription: {
    type: String,
    ref: 'Subscription',
    default: null,
  },
  BIO: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  address: {
    type: String,
  },
});

const User: Model<IUser> = mongoose.model("User", userSchema) as Model<IUser>;
export default User;
