const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RestauranteSchema = new Schema({
    Consecutivo: {
        type: String,
        trim: true,
        uppercase: true,
    },
    Nombre: {
        type: String,
        trim: true
    },
    Direccion: {
        type: String,
        trim: true
    },
    CantidadClientes: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
    },
    Telefono: {
        type: String,
        trim: true
    },
    Activo: {
        type: Boolean,
        trim: true
    }
})

module.exports = mongoose.model('Restaurante', RestauranteSchema);