const mongoose = require('mongoose');

const ThemeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Se requiere un nombre para el tema']
    },
    background_color: {
        type: String,
        required: [true, 'Se requiere un color de fondo para el tema']
    },
    variation_1: {
        type: String, 
        required: [true, 'Se requieren tres colores de variación para el tema']
    },
    variation_2: {
        type: String,
        required: [true, 'Se requieren tres colores de variación para el tema']
    },
    variation_3: {
        type: String,
        required: [true, 'Se requieren tres colores de variación para el tema']
    },
    isActive: {
        type: Boolean,
        default: true
    }
},
{timestamps: true});

const Theme = mongoose.model("theme", ThemeSchema);

module.exports = Theme;