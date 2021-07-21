const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const especialidadesSchema = new Schema({
    consecutivo: {
        type: ObjectId,
        ref: "Consecutivos",
        required: true,
        unique: true,
        trim: true
    },
    nombrePlatillo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    ingredientes: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true
    },
    detalle: {
        type: String,
        trim: true
    },
    foto: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Especialidades', especialidadesSchema);