const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empleadosSchema = new Schema({
    consecutivo: {
        type: String,
        trim: true,
        uppercase: true,
    },
    cedula: {
        type: String,
        trim: true
    },
    nombre: {
        type: String,
        trim: true
    },
    pApellido: {
        type: String,
        trim: true
    },
    sApellido: {
        type: String,
        trim: true
    },
    telefono1: {
        type: String,
        trim: true
    },
    telefono2: {
        type: String,
        trim: true
    },
    puesto: {
        type: String,
        trim: true
    },
    restaurante: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Empleados', empleadosSchema);