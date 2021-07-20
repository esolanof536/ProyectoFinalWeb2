const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    consecutivo: {
        type: String,
        trim: true,
        uppercase: true,
    },
    nombre: {
        type: String,
        trim: true
    },
    passwordU: {
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
    telefonoFijo: {
        type: String,
        trim: true
    },
    telefonoCelular: {
        type: String,
        trim: true
    },
    usuario: {
        type: String,
        trim: true
    },
    contrasena: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);