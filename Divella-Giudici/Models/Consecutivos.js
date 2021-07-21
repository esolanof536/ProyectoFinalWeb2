const mongoose = require('mongoose');
const { ObjectId } = require('bson');

const Schema = mongoose.Schema;

const ConsecutivoSchema = new Schema({

    consecutivo: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String
    },
    valorConsecutivo: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }

})

module.exports = mongoose.model('Consecutivos', ConsecutivoSchema);