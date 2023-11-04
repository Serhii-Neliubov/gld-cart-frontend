"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var validator_1 = require("validator");
var userSchema = new mongoose_1.Schema({
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
        required: [true, "Please, enter your last name"],
    },
    email: {
        type: String,
        required: [true, "Please, enter an email"],
        unique: true,
        lowercase: true,
        validate: [validator_1.default.isEmail, "Please, enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "Please, enter a password"],
        minlength: [6, "Minimum password length is 6 characters"],
    },
    passwordResetToken: {
        type: String,
    },
});
var User = mongoose_1.default.model('User', userSchema);
exports.default = User;
