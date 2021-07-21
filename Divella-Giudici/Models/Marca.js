const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const marcaSchema = new Schema({
    consecutivo: {
        type: String,
        trim: true,
        uppercase: true,
    },
    nombreMarca: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    nacionalidad: {
        type: String,
        trim: true
    },
    empresa: {
        type: String,
        trim: true
    },
    telefonoEmpresa: {
        type: String,
        trim: true
    },
    fotoMarca: {
        type: String,
        trim: true
    },
    fotoEmpresa: {
        type: String,
        trim: true
    },
    cedulaJuridica: {
        type: String,
        trim: true
    },
    detalleEmpresa: {
        type: String,
        trim: true
    },
});

module.exports = mongoose.model('Marca', marcaSchema);