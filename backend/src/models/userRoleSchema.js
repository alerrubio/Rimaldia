const mongoose = require('mongoose');

const UserRoleSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Un nombre de rol es necesario']
    }
},
{timestamps: true});

const UserRole = mongoose.model("userRole", UserRoleSchema);

module.exports = UserRole;