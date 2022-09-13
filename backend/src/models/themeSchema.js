const mongoose = require('mongoose');

const ThemeSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    background_color: {
        type: String,
        required: true
    },
    user_colors: [{
        type: String
    }],
    text_colors: [{
        type: String
    }],
});

const Theme = mongoose.model("theme", ThemeSchema);

module.exports = Theme;