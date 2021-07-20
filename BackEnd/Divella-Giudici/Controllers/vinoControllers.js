const vinos = require('../Models/Vino');

exports.getVinos = async (req, res, next) => {
    try {
        const vino = await vinos.find();
        res.json(vino);
    } catch (error) {
        console.log('exports.getVinos::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.getVinoById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const vino = await vinos.findById(id);
        if (!vino) {
            res.status(404).json({
                mensaje: 'El vino no ha sido encontrada.'
            });
        }
        res.json(vino);
    } catch (error) {
        console.log('exports.getVinoById::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.agregar = async (req, res, next) => {
    try {
        const vino = new vinos(req.body);
        await vino.save();
        res.json({ mensaje: 'Se creo el vino con exito' });
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
        await vinos.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        res.json({ mensaje: 'El vino se actualizo con exito' });
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
        await vinos.findOneAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'El vino se elimino con exito' })
    } catch (error) {
        console.log('exports.eliminar::', error);
        res.json({
            Error: error
        })
        next();
    }
}