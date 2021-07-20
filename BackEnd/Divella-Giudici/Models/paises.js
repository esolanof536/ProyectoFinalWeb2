const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paisesSchema = new Schema({
    consecutivo: {
        type: String,
        trim: true,
        uppercase: true,
    },
    pais: {
        type: String,
        trim: true
    },
    fotoBandera: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Paises', paisesSchema);