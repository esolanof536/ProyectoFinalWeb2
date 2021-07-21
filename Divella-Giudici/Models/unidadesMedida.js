const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const UnidadesMedidaSchema = new Schema({
    consecutivo: {
        type: ObjectId,
        ref: "Consecutivos",
        required: true,
        unique: true,
        trim: true
    },
    unidadMedida: {
        type: String,
        required:true,
        unique: true
    },
    escala: {
        type: String,
        required:true,
        trim: true
    },
    detalle: {
        type: String,
        trim: true
    },
    simbologia: {
        type: String,
        required: true,
        unique:true,
        trim: true
    }
});

module.exports = mongoose.model('UnidadesMedida', UnidadesMedidaSchema);

