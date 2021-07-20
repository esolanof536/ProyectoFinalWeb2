const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bebidasGaseosasSchema = new Schema({
    consecutivo: {
        type: String,
        trim: true
    },
    nombre: {
        type: String,
        trim: true
    },
    marca: {
        type: String,
        trim: true
    },
    nacionalidad: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    precio: {
        type: Number
    },
    restaurante: {
        type: String,
        trim: true
    },
    cantidad: {
        type: String,
        trim: true
    },
    foto: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('BebidasGaseosas', bebidasGaseosasSchema);