const youtube = require('../config/youtube');
const User = require('../models/user');

// @desc Get videos
// @route GET /api/videos
//with pagination
const getVideos = async (req, res) => {
    try {
        const { id: kindeId } = req.user;
        const { limit = 30, pageToken = '' } = req.query;
        const user = await User.findOne({ kindeId }).populate('tags');
        if (!user) {
            return res.notFound({
                message: 'User not found'
            })
        }
        const tags = user.tags.map(tag => tag.name);

        const response = await youtube.search.list({
            type: ['video'],
            part: ['snippet'],
            q: tags.join(' '),
            maxResults: limit,
            pageToken: pageToken
        });
        res.success({
            data: response.data
        })
    } catch (error) {
        res.internalServerError({
            message: error.message
        })
    }
}

module.exports = {
    getVideos
}




