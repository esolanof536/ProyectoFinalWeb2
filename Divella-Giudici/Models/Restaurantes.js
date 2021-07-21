const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const RestauranteSchema = new Schema({
    consecutivo:{
        type: ObjectId,
        ref: "Consecutivos",
        required: true,
        unique:true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    cantidadClientes: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        default:0,
        required: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    activo: {
        type: Boolean,
        trim: true,
        default: true
    }
})

module.exports = mongoose.model('Restaurantes', RestauranteSchema);