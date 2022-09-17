const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },    
    text: {
        type: String,
        required: true
    },
    color_index: {
        type: Number,
        required: true
    },
    keyword_id: [{
        type: String,
        //type: mongoose.Schema.Types.ObjectId,
        //ref: "keyword",
        required: false
    }],
    liked_by_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: false
    }]
},
{timestamps: true});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;