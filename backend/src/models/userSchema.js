const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Se requiere un correo electrónico'],
        unique: [true, 'El correo electrónico ya está registrado'],
        validate(value) {
            if (!validator.isEmail(value)) {
              throw new Error("Please enter a valid E-mail!");
            }
        }
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
    name: {
        type: String,
        required: [true, 'Se requiere el nombre del usuario']
    },
    last_name: {
        type: String,
        required: [true, 'Se requiere el apellido paterno del usuario']
    },
    mlast_name: {
        type: String,
        required: [true, 'Se requiere el apellido materno del usuario']
    }
},
{timestamps: true});

const User = mongoose.model("user", UserSchema);

module.exports = User;