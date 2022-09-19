const mongoose = require('mongoose');

const CollectionSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Un nombre de colección es necesario']
    },
    publications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: [true, 'publicación existente necesaria']
    }]
},
{timestamps: true});

const Collection = mongoose.model("collection", CollectionSchema);

module.exports = Collection;