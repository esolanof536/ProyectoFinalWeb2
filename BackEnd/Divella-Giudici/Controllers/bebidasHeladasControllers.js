const bebidasHeladas = require('../Models/BebidasHeladas');

exports.getBebidasHeladas= async (req, res, next) => {
    try {
        const bebidas = await bebidasHeladas.find();
        res.json(bebidas);
    } catch (error) {
        console.log('exports.getBebidasHeladas::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.getBebidasHeladasById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const bebida = await bebidasHeladas.findById(id);
        if (!bebida) {
            res.status(404).json({
                mensaje: 'La bebida helada no ha sido encontrada.'
            });
        }
        res.json(usuario);
    } catch (error) {
        console.log('exports.getBebidasHeladasById::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.agregar = async (req, res, next) => {
    try {
        const bebida = new bebidasHeladas(req.body);
        await bebida.save();
        res.json({mensaje: 'Se creo la bebida helada con exito'});
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
        await bebidasHeladas.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        res.json({ mensaje: 'La bebida helada se actualizo con exito' });
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
        await bebidasHeladas.findOneAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'La bebida helada se elimino con exito' })
    } catch (error) {
        console.log('exports.eliminar::', error);
        res.json({
            Error: error
        })
        next();
    }
}




