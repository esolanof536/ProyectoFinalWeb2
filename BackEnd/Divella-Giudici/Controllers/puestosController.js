const Puestos = require('../Models/Puestos');

exports.getPuestos = async (req, res, next) => {
    try {
        const lista = await Puestos.find();
        res.json(lista);
    } catch (error) {
        console.log('exports.getPuestos::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.getPuestosById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const puesto = await Puestos.findById(id);
        if (!puesto) {
            res.status(404).json({
                mensaje: 'El puesto no ha sido encontrado'
            });
        }
        res.json(puesto);
    } catch (error) {
        console.log('exports.getPuestosById::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.agregar = async (req, res, next) => {
    try {
        const puesto = new Puestos(req.body);
        await puesto.save();
        res.json({ mensaje: 'Se creo el puesto con exito' });
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
        await Puestos.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        res.json({ mensaje: 'El puesto se actualizo con exito' });
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
        await Puestos.findOneAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'El puesto se elimino con exito' })
    } catch (error) {
        console.log('exports.eliminar::', error);
        res.json({
            Error: error
        })
        next();
    }
}