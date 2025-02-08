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
        unique: true,
    },
    kindeId: {
        type: String,
        unique: true,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

