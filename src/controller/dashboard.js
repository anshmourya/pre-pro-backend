const youtube = require('../config/youtube');

// @desc Get videos
// @route GET /api/videos
//with pagination
const getVideos = async (req, res) => {
    try {
        const response = await youtube.search.list({
            type: ['video'],
            part: ['snippet'],
            q: 'indonesia',
            maxResults: req.query.limit || 20,
            pageToken: req.query.pageToken || ''
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




