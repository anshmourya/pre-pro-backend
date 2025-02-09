const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    tags: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Tag'
    },
    email: {
        type: String,
    },
    kindeId: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

