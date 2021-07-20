const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TecnologiaSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    cantidad: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v)
    },
    restaurante: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    marca: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Tecnologia', TecnologiaSchema);