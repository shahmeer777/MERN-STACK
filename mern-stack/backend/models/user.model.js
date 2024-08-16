const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        minlength: 3,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
