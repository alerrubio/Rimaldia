const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema({
    start_date: {
        type: String,
        //type: Date,
        required: true
    },
    end_date: {
        type: String,
        //type: Date,
        required: true
    },
    most_used_keywords_id: [{
        type: String,
        //type: mongoose.Schema.Types.ObjectId,
        //ref: "keyword",
        required: true
    }],
    most_liked_posts_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true
    }],
    most_commented_posts_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true
    }],
    most_popular_users_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }]
},
{timestamps: true});

const Record = mongoose.model("record", RecordSchema);

module.exports = Record;