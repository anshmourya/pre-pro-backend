const Tag = require('../models/tag');
const User = require('../models/user');



// add tag
const addTag = async (req, res) => {
    const { name, description, category } = req.body;
    const tag = new Tag({ name, description, category });
    await tag.save();
    return res.success({
        message: "Tag added successfully",
        data: tag
    })
}

//bulk add tag
const bulkAddTag = async (req, res) => {
    const tags = req.body;
    const tag = await Tag.insertMany(tags);
    return res.success({
        message: "Tags added successfully",
        data: tag
    })
}


const getTags = async (req, res) => {
    const { query, options } = req.body;

    if (query.searchQuery) {
        query.name = { $regex: query.searchQuery, $options: 'i' };
        delete query.searchQuery;
    }
    const tags = await Tag.paginate(query, options);
    return res.success({
        message: "Tags fetched successfully",
        data: tags
    })
}


// Toggle tags for a user - add new tags and remove existing ones if present
const associateTagsWithUser = async (req, res) => {
    try {
        const { id: kindeId } = req.user;
        const tagIds = req.body;

        // First, find the user to check their current tags
        const user = await User.findOne({
            kindeId
        });

        if (!user) {
            return res.badRequest({
                message: "User not found"
            })
        }

        // Separate tags into those to add and those to remove
        const tagsToRemove = tagIds.filter(tagId =>
            user.tags.includes(tagId)
        );
        const tagsToAdd = tagIds.filter(tagId =>
            !user.tags.includes(tagId)
        );

        // Perform updates sequentially
        if (tagsToRemove.length > 0) {
            await User.findByIdAndUpdate(user._id, {
                $pull: { tags: { $in: tagsToRemove } }
            });
        }

        if (tagsToAdd.length > 0) {
            await User.findByIdAndUpdate(user._id, {
                $addToSet: { tags: { $each: tagsToAdd } }
            });
        }

        return res.success({
            message: "Tags toggled successfully",
        });
    } catch (error) {
        console.error('Error in associateTagsWithUser:', error);
        return res.internalServerError({
            message: "Failed to toggle user tags",
            error: error.message
        });
    }
}

//get tags associated with a user
const getTagsAssociatedWithUser = async (req, res) => {
    const { id: kindeId } = req.user;
    const user = await User.findOne({
        kindeId
    });
    return res.success({
        message: "Tags fetched successfully",
        data: user?.tags
    })
}






module.exports = {
    addTag,
    bulkAddTag,
    getTags,
    associateTagsWithUser,
    getTagsAssociatedWithUser
}



