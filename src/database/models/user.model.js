const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    status: {
        type: String
    },
    areaId: {
        type: String
    },
});

// Convertir a modelo
const User = mongoose.model('user', userSchema);

module.exports = User