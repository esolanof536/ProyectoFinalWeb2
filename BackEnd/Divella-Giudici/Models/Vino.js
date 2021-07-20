const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vinoSchema = new Schema({
    consecutivo: {
        type: String,
        trim: true
    },
    nombre: {
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
    anio: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
    },
    nacionalidad: {
        type: String,
        trim: true
    },
    cantidad: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
    },
    marca: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    foto: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Vinos', vinoSchema);