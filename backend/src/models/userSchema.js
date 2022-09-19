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
        type: mongoose.Schema.Types.ObjectId,
        ref: "userRole",
        required: false
    },
    name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    }
},
{timestamps: true});

const User = mongoose.model("user", UserSchema);

module.exports = User;