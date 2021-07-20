const mesas = require('../Models/Mesas');

exports.getMesas = async (req, res, next) => {
    try {
        const listaMesas = await mesas.find();
        res.json(listaMesas);
    } catch (error) {
        console.log('exports.getMesas::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.getMesasById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const mesa = await mesas.findById(id);
        if (!mesa) {
            res.status(404).json({
                mensaje: 'La mesa no ha sido encontrada.'
            });
        }
        res.json(mesa);
    } catch (error) {
        console.log('exports.getMesasById::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.agregar = async (req, res, next) => {
    try {
        const mesa = new mesas(req.body);
        await mesa.save();
        res.json({ mensaje: 'Se creo la mesa con exito.' });
    } catch (error) {
        console.log('exports.agregar::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.actualizar = async (req, res, next) => {
    try {
        await mesas.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        res.json({ mensaje: 'La mesa se actualizo con exito' });
    } catch (error) {
        console.log('exports.actualizar::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.eliminar = async (req, res, next) => {
    try {
        await mesas.findOneAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'La mesa se elimino con exito' })
    } catch (error) {
        console.log('exports.eliminar::', error);
        res.json({
            Error: error
        })
        next();
    }
}