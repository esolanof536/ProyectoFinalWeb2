const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const limpiezaSchema = new Schema({
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
        default: 0,
        required: true
    },
    restaurante: {
        type: ObjectId,
        ref: "Restaurantes",
        required: true,
    },
    marca: {
        type: ObjectId,
        ref: "Marca",
        required: true,
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
        type: ObjectId,
        ref: "UnidadesMedida",
        required: true
    },
    cantidadMedida: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Limpieza', limpiezaSchema);