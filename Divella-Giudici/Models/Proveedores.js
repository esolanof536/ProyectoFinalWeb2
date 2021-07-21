const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;
const dateFormat = require('dateformat');
let fechaActual = dateFormat(new Date(), 'dd/mm/yyyy');

const ProveedoresSchema = new Schema({
    consecutivo: {
        type: ObjectId,
        ref: "Consecutivos",
        required: true,
        unique: true,
        trim: true
    },
    nombreRepresentante: {
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
    telefonoOficina: {
        type: String,
        required: true,
        trim: true
    },
    fechaIngreso: {
        type: String,
        default: fechaActual,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        trim: true
    },
    cedulaJuridica: {
        type: String,
        required: true,
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


