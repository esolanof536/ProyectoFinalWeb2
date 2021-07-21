const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const vinoSchema = new Schema({
    consecutivo: {
        type: ObjectId,
        ref: "Consecutivos",
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true
    },
    restaurante: {
        type: ObjectId,
        ref: "Restaurantes",
        required: true,
        trim: true
    },
    anio: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),

    },
    nacionalidad: {
        type: ObjectId,
        ref: "Paises",
        required: true,
        trim: true
    },
    cantidad: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        default: 0,
        required: true
    },
    marca: {
        type: ObjectId,
        ref: "Marca",
        required: true,
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