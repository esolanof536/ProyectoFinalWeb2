const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const bebidasHeladasSchema = new Schema({
    consecutivo: {
        type: ObjectId,
        ref: "Consecutivos",
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        trim: true
    },
    ingredientes: {
        type: String,
        trim: true,
        required: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    precio: {
        type: Number,
        required: true
    },
    restaurante: {
        type: ObjectId,
        ref: "Restaurantes",
        trim: true
    },
    foto: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('BebidasHeladas', bebidasHeladasSchema);