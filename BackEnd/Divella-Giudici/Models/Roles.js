const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rolesSchema = new Schema({
    consecutivo: {
        type: String,
        trim: true,
        uppercase: true,
    },
    nombre: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Roles', rolesSchema);