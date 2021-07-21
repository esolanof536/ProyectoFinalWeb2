const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const mesasSchema = new Schema({
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
        unique:true,
        trim: true
    },
    restaurante: {
        type: ObjectId,
        ref: "Restaurantes",
        required: true,
        trim: true
    },
    numeroMesa: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        required: true,
        unique: true
    },
    cantidadSillas: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        required: true,
    }
})

module.exports = mongoose.model('Mesas', mesasSchema);