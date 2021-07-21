const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mesasSchema = new Schema({
    consecutivo: {
        type: String,
        trim: true
    },
    nombre: {
        type: String,
        trim: true
    },
    restaurante: {
        type: String,
        trim: true
    },
    numeroMesa: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v)
    },
    cantidadSillas: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
})

module.exports = mongoose.model('Mesas', mesasSchema);