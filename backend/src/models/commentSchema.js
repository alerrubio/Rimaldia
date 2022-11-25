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
    username: {
        type: String,
        required: [true, 'El nombre del usuario del comentario no puede estar vacío']
    },
    user_picture: {
        type: String,
        required: [true, 'La imagen del usuario del comentario no puede estar vacío']
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