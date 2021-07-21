const Restaurantes = require('../Models/Restaurante');

exports.getRestaurantes = async (req, res, next) => {
    try {
        const restaurante = await Restaurantes.find();
        res.json(restaurante);
        console.log('getRestaurantes');
    } catch (error) {
        console.log('exports.getRestaurantes::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.getRestauranteById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const restaurante = await Restaurantes.findById(id);
        if (!restaurante) {
            res.status(404).json({
                mensaje: 'El restaurante no ha sido encontrado'
            });
        }
        res.json(restaurante);
    } catch (error) {
        console.log('exports.getRestauranteById::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.agregar = async (req, res, next) => {
    try {
        const restaurante = new Restaurantes(req.body);
        await restaurante.save();
        res.json({ mensaje: 'Se creo el restaurante con exito' });
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
        await Restaurantes.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        res.json({ mensaje: 'El restaurante se actualizo con exito' });
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
        await Restaurantes.findOneAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'El restaurante se elimino con exito' });
    } catch (error) {
        console.log('exports.eliminar::', error);
        res.json({
            Error: error
        })
        next();
    }
}