const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const puestosSchema = new Schema({
    consecutivo: {
        type: ObjectId,
        ref: "Consecutivos",
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    rol: {
        type: ObjectId,
        ref: "Roles",
        required: true,
        trim: true
    },
    internoRestaurante: {
        type: Boolean,
        trim: true,
        default: true,
    },
    externoRestaurante: {
        type: Boolean,
        trim: true
    }
});

module.exports = mongoose.model('Puestos', puestosSchema);