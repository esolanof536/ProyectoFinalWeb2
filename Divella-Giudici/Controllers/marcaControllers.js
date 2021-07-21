const Marcas = require('../Models/Marca');

exports.getMarcas = async (req, res, next) => {
    try {
        const lista = await Marcas.find();
        res.json(lista);
    } catch (error) {
        console.log('exports.getUsuarios::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.getMarcasById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const marca = await Marcas.findById(id);
        if (!marca) {
            res.status(404).json({
                mensaje: 'La Marca no ha sido encontrada'
            });
        }
        res.json(usuario);
    } catch (error) {
        console.log('exports.getMarcasById::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.agregar = async (req, res, next) => {
    try {
        const marca = new Marcas(req.body);
        await marca.save();
        res.json({ mensaje: 'Se creo la marca con exito' });
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
        await Marcas.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        res.json({ mensaje: 'La marca se actualizo con exito' });
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
        await Marcas.findOneAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'La marca se elimino con exito' })
    } catch (error) {
        console.log('exports.eliminar::', error);
        res.json({
            Error: error
        })
        next();
    }
}