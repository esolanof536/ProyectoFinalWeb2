const mongoose = require('mongoose');
const dateFormat = require('dateformat');
const Schema = mongoose.Schema;
const { ObjectId } = require('bson');
let fechaActual = dateFormat(new Date(), 'dd/mm/yyyy');

const CajasSchema = new Schema({
    consecutivo: {
        type: ObjectId,
        ref: "Consecutivos",
        required: true,
        unique: true,
        trim: true
    },
    fechaRegistro: {
        type: String,
        trim: true,
        required: true,
        default: fechaActual
    },
    descripcion: {
        type: String,
        trim: true
    },
    entradaDinero: {
        type: Number,
        required: true
    },
    aperturaCaja: {
        type: Number,
        required: true
    },
    cierreCaja: {
        type: Number,
        required: true
    },
    restaurante: {
        type: ObjectId,
        ref: "Restaurantes",
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Cajas', CajasSchema);