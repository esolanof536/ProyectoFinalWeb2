const bebidasGaseosas = require('../Models/BebidasGaseosas');

exports.getBebidasGaseosas = async (req, res, next) => {
    try {
        const bebidas = await bebidasGaseosas.find();
        res.json(bebidas);
    } catch (error) {
        console.log('exports.getBebidasGaseosas::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.getBebidasGaseosasById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const bebida = await bebidasGaseosas.findById(id);
        if (!bebida) {
            res.status(404).json({
                mensaje: 'La bebida gaseosa no ha sido encontrada.'
            });
        }
        res.json(usuario);
    } catch (error) {
        console.log('exports.getBebidasGaseosasById::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.agregar = async (req, res, next) => {
    try {
        const bebida = new bebidasGaseosas(req.body);
        await bebida.save();
        res.json({ mensaje: 'Se creo la bebida gaseosa con exito' });
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
        await bebidasGaseosas.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        res.json({ mensaje: 'La bebida gaseosa se actualizo con exito' });
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
        await bebidasGaseosas.findOneAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'La bebida gaseosa se elimino con exito' })
    } catch (error) {
        console.log('exports.eliminar::', error);
        res.json({
            Error: error
        })
        next();
    }
}




