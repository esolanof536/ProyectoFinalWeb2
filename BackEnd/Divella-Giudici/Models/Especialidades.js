const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const especialidadesSchema = new Schema({
    consecutivo: {
        type: String,
        trim: true
    },
    nombrePlatillo: {
        type: String,
        trim: true
    },
    ingredientes: {
        type: String,
        trim: true
    },
    precio: {
        type: Number
    },
    detalle: {
        type: String,
        trim: true
    },
    foto: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Especialidades', especialidadesSchema);