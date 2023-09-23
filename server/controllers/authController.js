const User = require('../models/User')

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: ''};

    if(err.code == 11000){
        errors.email = "This email is already taken"
    }

    if(err.message.includes('user validation failed')) {
       Object.values(err.errors).forEach(({properties}) => {
        errors[properties.path] = properties.message;
        });
    }
    return errors;
}

module.exports.signup_post = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.create({ email, password });
        res.status(201).json(user);

    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json( {errors} )

    }
}

module.exports.login_post = async (req, res) => {

}
