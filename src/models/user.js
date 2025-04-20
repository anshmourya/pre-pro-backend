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
        index: false,
        unique: false
    },
    kindeId: {
        type: String,
        required: true
    },
    bio: {
        type: String,
    },
    totalStreak: [{
        type: Date,
    }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

