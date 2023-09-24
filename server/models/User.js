const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "Client's type is undefined" ],
    },
    name: {
        type: String,
        required: [true, 'Please, enter your first name'],
    },
    surname: {
        type: String,
        required: [true, 'Please, enter your last name'],

    },

    email: {
        type: String,
        required: [true, 'Please, enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please, enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please, enter a password'],
        minlength: [6, 'Minimum password length is 6 charachters']
    }
})

userSchema.post('save', (doc, next))
{
    console.log('new user was created and saved', doc);
    next();
}
userSchema.pre('save', function(next) {
    console.log('user about to be created and saved', this);
    next();
} )

const User = mongoose.model('user', userSchema);
module.exports = User;