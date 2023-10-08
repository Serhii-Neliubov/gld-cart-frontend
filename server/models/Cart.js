const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const cartSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    refreshToken: {
        type: String,
        required: true,
    },
})

const Cart = mongoose.model('cart', cartSchema);
module.exports = Cart;
