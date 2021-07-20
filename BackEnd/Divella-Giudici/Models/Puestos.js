const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const puestosSchema = new Schema({
    consecutivo: {
        type: String,
        trim: true,
        uppercase: true,
    },
    nombre: {
        type: String,
        trim: true
    },
    rol: {
        type: String,
        trim: true
    },
    internoRestaurante: {
        type: String,
        trim: true
    },
    externoRestaurante: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Puestos', puestosSchema);