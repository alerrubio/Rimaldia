const mongoose = require('mongoose');

const NotificationSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
},
{timestamps: true});

const Notification = mongoose.model("notification", NotificationSchema);

module.exports = Notification;
