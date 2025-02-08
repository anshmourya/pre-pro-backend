const User = require('../models/user');

// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
    try {
        const { email, kindeId, name } = req.body;
        const user = await User.create({ email, kindeId, name });
        res.success({
            message: 'User registered',
            data: user
        });
    } catch (error) {
        console.error(error);
        res.internalServerError({
            message: 'Internal Server Error',
            error: error.message
        });
    }
}

//check user is registered or not
const checkUser = async (req, res) => {
    try {
        const { kindeId } = req.query;
        const user = await User.findOne({ kindeId });
       
        if (user) {
            res.success({
                message: 'User is registered',
                data: {
                    user,
                    found: true
                }
            });
        } else {
            res.recordNotFound({
                message: 'User is not registered',
                data: {
                    found: false
                }
            });
        }
    } catch (error) {
        console.error(error);
        res.internalServerError({
            message: 'Internal Server Error',
            error: error.message
        });
    }
}









module.exports = {
    registerUser,
    checkUser
}
