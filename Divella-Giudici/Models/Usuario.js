const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
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
    telefonoFijo: {
        type: String,
        required: true,
        trim: true
    },
    telefonoCelular: {
        type: String,
        trim: true
    },
    usuario: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    contrasena: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);