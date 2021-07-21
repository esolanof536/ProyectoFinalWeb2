const mongoose = require('mongoose');
const { ObjectId } = require('bson');

const Schema = mongoose.Schema;

const bebidasGaseosasSchema = new Schema({
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
        unique: true
    },
    marca: {
        type: ObjectId,
        ref: "Marca",
        required: true,
        trim: true
    },
    nacionalidad: {
        type: ObjectId,
        ref: "Paises",
        required: true,
        trim: true
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
        ref: "Paises",
        required: true
    },
    cantidad: {
        type: Number,
        default: 0
    },
    foto: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('BebidasGaseosas', bebidasGaseosasSchema);