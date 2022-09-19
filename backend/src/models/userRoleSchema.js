const mongoose = require('mongoose');

const UserRolesSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Un nombre de rol es necesario']
    }
},
{timestamps: true});

const UserRole = mongoose.model("userRoles", UserRolesSchema);

module.exports = UserRole;