const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;

const paisesSchema = new Schema({
    consecutivo:{
        type: ObjectId,
        ref: "Consecutivos",
        required: true,
        unique:true,
        trim: true
    },

    pais: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    fotoBandera: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Paises', paisesSchema);