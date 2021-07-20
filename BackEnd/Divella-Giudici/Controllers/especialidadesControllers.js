const especialidades = require('../Models/Especialidades');

exports.getEspecialidades = async (req, res, next) => {
    try {
        const listaEspecialidades = await especialidades.find();
        res.json(listaEspecialidades);
    } catch (error) {
        console.log('exports.getEspecialidades::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.getEspecialidadesById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const especialidd = await especialidades.findById(id);
        if (!especialidd) {
            res.status(404).json({
                mensaje: 'La especialidad no ha sido encontrada.'
            });
        }
        res.json(usuario);
    } catch (error) {
        console.log('exports.getEspecialidadesById::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.agregar = async (req, res, next) => {
    try {
        const bebida = new especialidades(req.body);
        await bebida.save();
        res.json({ mensaje: 'Se creo la especialidad con exito' });
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
        await especialidades.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        res.json({ mensaje: 'La especialidad se actualizo con exito' });
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
        await especialidades.findOneAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'La especialidad se elimino con exito' })
    } catch (error) {
        console.log('exports.eliminar::', error);
        res.json({
            Error: error
        })
        next();
    }
}