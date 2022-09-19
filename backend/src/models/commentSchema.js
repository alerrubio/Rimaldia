const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'El texto del comentario no puede estar vacío']
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, 'Un id de usuario es necesario']
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: [true, 'Un id de un post es necesario']
    }
},
{timestamps: true});

const Comment = mongoose.model("comment", CommentSchema);

module.exports = Comment;