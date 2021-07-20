const bebidasCalientes = require('../Models/BebidasCalientes');

exports.getBebidasCalientes = async (req, res, next) => {
    try {
        const bebidas = await bebidasCalientes.find();
        res.json(bebidas);
    } catch (error) {
        console.log('exports.getBebidasCalientes::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.getBebidasCalientesById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const bebida = await bebidasCalientes.findById(id);
        if (!bebida) {
            res.status(404).json({
                mensaje: 'La bebida caliente no ha sido encontrada.'
            });
        }
        res.json(usuario);
    } catch (error) {
        console.log('exports.getBebidasCalientesById::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.agregar = async (req, res, next) => {
    try {
        const bebida = new bebidasCalientes(req.body);
        await bebida.save();
        res.json({ mensaje: 'Se creo la bebida caliente con exito' });
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
        await bebidasCalientes.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        res.json({ mensaje: 'La bebida caliente se actualizo con exito' });
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
        await bebidasCalientes.findOneAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'La bebida  se elimino con exito' })
    } catch (error) {
        console.log('exports.eliminar::', error);
        res.json({
            Error: error
        })
        next();
    }
}