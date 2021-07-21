const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const buffetSchema = new Schema({
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
        unique: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true
    },
    tipoComida: {
        type: String,
        required: true,
        trim: true
    },
    unidadMedida: {
        type: ObjectId,
        ref: "UnidadesMedida",
        required: true
    },
    foto: { //cambiar a otro tipo
        type: String,
        trim: true
    }

})

module.exports = mongoose.model('Buffet', buffetSchema);