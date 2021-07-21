const Licores = require('../Models/Licores');

exports.getLicores = async (req, res, next) => {
    try {
        const licor = await Licores.find();
        res.json(licor);
    } catch (error) {
        console.log('exports.getLicores::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.getLicoresById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const licor = await Licores.findById(id);
        if (!licor) {
            res.status(404).json({
                mensaje: 'El Licor no ha sido encontrada.'
            });
        }
        res.json(usuario);
    } catch (error) {
        console.log('exports.getLicoresById::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.agregar = async (req, res, next) => {
    try {
        const licor = new Licores(req.body);
        await licor.save();
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
        await Licores.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        res.json({ mensaje: 'El Licor se actualizo con exito' });
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
        await Licores.findOneAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'El Licor se elimino con exito' })
    } catch (error) {
        console.log('exports.eliminar::', error);
        res.json({
            Error: error
        })
        next();
    }
}