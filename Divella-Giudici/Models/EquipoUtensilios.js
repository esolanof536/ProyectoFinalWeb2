const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const EquipoUtensiliosSchema = new Schema({

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
    cantidad: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        default:0,
        required:true
    },
    restaurante: {
        type: ObjectId,
        ref: "Restaurantes",
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    marca: {
        type: ObjectId,
        ref: "Marca",
        required: true,
        trim: true
    },

});

module.exports = mongoose.model('EquipoUtensilios', EquipoUtensiliosSchema);