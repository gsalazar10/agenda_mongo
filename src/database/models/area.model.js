const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const areaSchema = new Schema({
    code: {
        type: String
    },
    name: {
        type: String
    },
    observations: {
        type: String
    },
    status: {
        type: String
    }
});

// Convertir a modelo
const Area = mongoose.model('area', areaSchema);

module.exports = Area