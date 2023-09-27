const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const tokenSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    refreshToken: {
        type: String,
        required: true,
    },
})

const Token = mongoose.model('token', tokenSchema);
module.exports = Token;
