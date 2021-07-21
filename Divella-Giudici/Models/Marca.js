const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const marcaSchema = new Schema({
    consecutivo :{
            type: ObjectId,
            ref: "Consecutivos",
            required: true,
            unique:true,
            trim: true
        },
    nombreMarca: {
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    nacionalidad: {
        type: ObjectId,
        ref: "Paises",
        required: true,
        unique:true,
        trim: true
    },
    empresa: {    
        type: ObjectId,
        ref: "Proveedores",
        required: true,
        trim: true
    },
    telefonoEmpresa: {
        type: String,
        required:true,
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
        required:true,
        trim: true
    },
    detalleEmpresa: {
        type: String,
        trim: true
    },
});

module.exports = mongoose.model('Marca', marcaSchema);