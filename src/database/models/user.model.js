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
        type: Boolean
    },
    areaId: {
        type: String
    },
})

module.exports = mongoose.model('user', userSchema)