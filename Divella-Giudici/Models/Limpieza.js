const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const limpiezaSchema = new Schema({
    consecutivo: {
        type: String,
        trim: true,
        uppercase: true,
    },
    nombre: {
        type: String,
        trim: true
    },
    cantidad: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
    },
    restaurante: {
        type: String,
        trim: true
    },
    marca: {
        type: String,
        trim: true
    },
    tipoLimpieza: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    unidadMedida: {
        type: String,
        trim: true
    },
    cantidadMedida: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Limpieza', limpiezaSchema);