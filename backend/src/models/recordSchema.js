const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema({
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date, 
        default: Date.now,
        max: Date.now,
        validate: {
            validator: function(v) {
                return this.start_date > v ? false : true;
            },
            message: "Start date of range is after the end date."
        },
        required: true
    },
    most_used_tags_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tag",
        required: true
    }],
    most_liked_posts_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true
    }],
    most_commented_posts_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
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