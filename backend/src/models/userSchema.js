const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlenght: 8
    },
    role: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    profile_picture: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        required: true
    },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;