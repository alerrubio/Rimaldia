const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true
    }
},
{timestamps: true});

const Comment = mongoose.model("comment", CommentSchema);

module.exports = Comment;