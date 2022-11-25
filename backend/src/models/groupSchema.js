const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    users: [{
        type: String,
        required: true,
    }]
},
{timestamps: true});

const Group = mongoose.model("group", GroupSchema);

module.exports = Group;
