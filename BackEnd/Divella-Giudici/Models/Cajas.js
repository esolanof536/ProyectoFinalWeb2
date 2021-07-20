const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CajasSchema = new Schema({

    consecutivo: {
        type: String,
        trim: true,
        uppercase: true,
    },
    fechaRegistro: {
        type: String,
        trim: true,
        uppercase: true,
    },
    descripcion: {
        type: String,
        trim: true
    },
    entradaDinero: {
        type: number
    },
    aperturaCaja: {
        type: number
    },
    cierreCaja: {
        type: number
    },
    restaurante: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Cajas', CajasSchema);