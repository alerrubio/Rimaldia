const mongoose = require('mongoose');

const TagSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Un nombre es necesario']
    }
},
{timestamps: true});

const Tag = mongoose.model("tag", TagSchema);

module.exports = Tag;