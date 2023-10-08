const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    refreshToken: {
        type: String,
        required: true,
    },
})

const Order = mongoose.model('order', orderSchema);
module.exports = Order;
