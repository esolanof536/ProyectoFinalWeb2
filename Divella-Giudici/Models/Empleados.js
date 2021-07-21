const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const empleadosSchema = new Schema({
    consecutivo:{
        type: ObjectId,
        ref: "Consecutivos",
        required: true,
        unique:true,
        trim: true
    },
    cedula: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    pApellido: {
        type: String,
        required: true,
        trim: true
    },
    sApellido: {
        type: String,
        trim: true
    },
    telefono1: {
        type: String,
        required: true,
        trim: true
    },
    telefono2: {
        type: String,
        trim: true
    },
    puesto: {
        type: ObjectId,
        ref: "Puestos",
        required: true,
    },
    restaurante: {
        type: ObjectId,
        ref: "Restaurantes",
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Empleados', empleadosSchema);