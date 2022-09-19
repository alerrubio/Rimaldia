const mongoose = require('mongoose');

const ThemeSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Se requiere un nombre para el tema']
    },
    background_color: {
        type: String,
        required: [true, 'Se requiere un color de fondo para el tema']
    },
    user_colors: [{
        type: String, 
        required: [true, 'Se requieren los colores del usuario para el tema']
    }],
    text_colors: [{
        type: String,
        required: [true, 'Se requieren los colores del texto para el tema']
    }],
},
{timestamps: true});

const Theme = mongoose.model("theme", ThemeSchema);

module.exports = Theme;