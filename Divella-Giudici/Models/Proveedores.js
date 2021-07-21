const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProveedoresSchema = new Schema({

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
    telefonoOficina: {
        type: String,
        trim: true
    },
    fechaIngreso: {
        type: String,
        trim: true
    },
    correo: {
        type: String,
        trim: true
    },
    direccion: {
        type: String,
        trim: true
    },
    cedula: {
        type: String,
        trim: true
    },
    fax: {
        type: String,
        trim: true
    },
    celular: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Proveedores', ProveedoresSchema);


