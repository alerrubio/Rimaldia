const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    user_id:{
        type: String,
        required: [true, "Se requiere un ID de auth0"],
        unique: [true, "El ID ya se ha registrado anteriormente"],
    },
    email: {
        type: String,
        required: [true, 'Se requiere un correo electrónico'],
        unique: [true, 'El correo electrónico ya está registrado'],
    },
    username: {
        type: String,
        required: [true, 'Se requiere un nombre de usuario']
    },
    password: {
        type: String,
        required: [true, 'Se requiere una contraseña'],
        minlenght: 8
    },
    role: {        
        type: mongoose.Schema.Types.ObjectId,
        ref: "userRole"
    },
    given_name: {
        type: String,
        required: [true, 'Se requiere el nombre del usuario']
    },
    family_name: {
        type: String,
        required: [true, 'Se requiere el apellido paterno del usuario']
    },
    picture: {
        type: String,
    }
},
{timestamps: true});

const User = mongoose.model("user", UserSchema);

module.exports = User;