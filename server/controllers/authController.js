const User = require('../models/User')
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    if (err.code == 11000) {
        errors.email = "This email is already taken"
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

const maxAge = 3 * 24 * 60 *60;
const createToken = (id) => {
    return jwt.sign({ id }, 'gld cart secret', { expiresIn: maxAge });
}

module.exports.signup_post = async (req, res) => {

    const { type, name, surname, email, password } = req.body;

    try {

        const user = await User.create({ type, name, surname, email, password });
        const token = createToken(user._id);

        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000} );
        

        res.status(201).json({ user: user._id });

    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({ errors })
    }

}

module.exports.login_post = async (req, res) => {
    const { type, name, surname, email, password } = req.body;

    try {
        const user = await User.login(email, password);
        res.status(200).json({ user: user._id});
        

        
    } catch (error) {
       res.status(400).json({}); 
    }

}
