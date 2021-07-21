const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const ComestibleSchema = new Schema({
    consecutivo: {
        type: ObjectId,
        ref: "Consecutivos",
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    cantidad: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        default: 0
    },
    restaurante: {
        type: ObjectId,
        ref: "Restaurantes",
        required: true,
        trim: true
    },
    marca: {
        type: ObjectId,
        ref: "Marca",
        required: true,
    },
    tipoComestible: {
        type: String,
        trim: true
    },
    claseComestible: {
        type: String,
        trim: true
    },
    lineaComestible: {
        type: String,
        trim: true
    },
    unidadMedida: {
        type: ObjectId,
        ref: "UnidadesMedida",
        required: true,
        trim: true
    },
});

module.exports = mongoose.model('Comestible', ComestibleSchema);