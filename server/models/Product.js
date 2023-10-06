const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const productSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    refreshToken: {
        type: String,
        required: true,
    },
})

const Product = mongoose.model('product', productSchema);
module.exports = Product;
