const mongoose = require('mongoose');

const NotificationSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
},
{timestamps: true});

const Notification = mongoose.model("notification", NotificationSchema);

module.exports = Notification;
