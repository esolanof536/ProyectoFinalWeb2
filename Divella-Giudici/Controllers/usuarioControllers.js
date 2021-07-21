const Usuarios = require('../Models/Usuario');

exports.getUsuarios = async (req, res, next) => {
    try {
        const usuarios = await Usuarios.find();
        res.json(usuarios);
    } catch (error) {
        console.log('exports.getUsuarios::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.getUsuarioById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const usuario = await Usuarios.findById(id);
        if (!usuario) {
            res.status(404).json({
                mensaje: 'El usuario no ha sido encontrado'
            });
        }
        res.json(usuario);
    } catch (error) {
        console.log('exports.getUsuarioById::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.agregar = async (req, res, next) => {
    try {
        const usuario = new Usuarios(req.body);
        await usuario.save();
        res.json({ mensaje: 'Se creo el usuario con exito' });
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
        await Usuarios.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        res.json({ mensaje: 'El usuario se actualizo con exito' });
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
        await Usuarios.findOneAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'El usuario se elimino con exito' })
    } catch (error) {
        console.log('exports.eliminar::', error);
        res.json({
            Error: error
        })
        next();
    }
}