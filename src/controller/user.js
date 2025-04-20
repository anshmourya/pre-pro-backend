const User = require('../models/user');
const axios = require('axios')
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
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Normalize to midnight

            let lastStreakDate = null;
            if (user.totalStreak.length > 0) {
                lastStreakDate = new Date(user.totalStreak[user.totalStreak.length - 1]);
                lastStreakDate.setHours(0, 0, 0, 0); // Normalize to midnight
            }

            if (!lastStreakDate || lastStreakDate.getTime() !== today.getTime()) {
                // Only add if today is not already in streak
                user.totalStreak.push(today);
            }

            await user.save();

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
//get user details
const getMe = async (req, res) => {
    try {
        const { id: kindeId } = req.user;
        const user = await User.findOne({ kindeId }).populate({
            path: 'tags',
            select: 'name',
            limit: 5
        });

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


const updateMe = async (req, res) => {
    try {
        const { id: kindeId } = req.user;
        const options = {
            method: 'PATCH',
            url: process.env.KINDE_ISSUER_BASE_URL + '/api/v1/user',
            params: { id: kindeId },
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + process.env.ACCESS_TOKEN
            },
            data: req.body
        }
        const data = await axios(options)
        await User.findOneAndUpdate({ kindeId }, req.body)
        res.success({
            message: 'User updated successfully',
            data: data.data
        })
    } catch (error) {
        console.error(error.response.data);
        res.internalServerError({
            message: 'Internal Server Error',
            error: error.message
        });
    }
}





module.exports = {
    registerUser,
    checkUser,
    getMe,
    updateMe
}
