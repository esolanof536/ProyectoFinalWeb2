const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const LicoresSchema = new Schema({
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
    descripcion: {
        type: String,
        trim: true
    },
    precio: {
        type: Number,
        required: true
    },
    restaurante: {
        type: ObjectId,
        ref: "Restaurantes",
        required: true,
        trim: true
    },
    cantidad: {
        type: Number,
        required: true,
        default: 0
    },
    nacionalidad: {
        type: ObjectId,
        ref: "Paises",
        required: true,
        trim: true
    },
    marca: {
        type: ObjectId,
        ref: "Marca",
        required: true,
        trim: true
    },
    foto: {
        type: String,
        trim: true
    }

})

module.exports = mongoose.model('Licores', LicoresSchema);
