const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buffetSchema = new Schema({
    consecutivo: {
        type: String,
        trim: true
    },
    nombre: {
        type: String,
        trim: true
    },
    precio: {
        type: String,
        trim: true
    },
    tipoComida: {
        type: String,
        trim: true
    },
    unidadMedida: {
        type: String,
        trim: true
    },
    foto: { //cambiar a otro tipo
        type: String,
        trim: true
    }

})

module.exports = mongoose.model('Buffet', buffetSchema);