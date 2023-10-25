const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const messageSchema = new mongoose.Schema(
  {
    chatUsers: {
      type: String,
      require: true,
    },
    message: { type: String, require: true },
    sender: { type: mongoose.Schema.Types.ObjectId, require: true },
  },
  { timestamps: true }
);

const Message = mongoose.model("message", messageSchema);
module.exports = Message;
