const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UnidadesMedidaSchema = new Schema({
    consecutivo: {
        type: String,
        trim: true,
        uppercase: true,
    },
    unidadMedida: {
        type: Number
    },
    escala: {
        type: String,
            trim: true
    },
    detalle: {
        type: String,
            trim: true
    },
    simbologia: {
        type: String,
            trim: true
    }
});

module.exports = mongoose.model('UnidadesMedida', UnidadesMedidaSchema);

