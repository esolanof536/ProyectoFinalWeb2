const Empleados = require('../Models/Empleados');

exports.getEmpleados = async (req, res, next) => {
    try {
        const lista = await Empleados.find();
        res.json(lista);
    } catch (error) {
        console.log('exports.getEmpleados::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.getEmpleadoById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const empleado = await Empleados.findById(id);
        if (!empleado) {
            res.status(404).json({
                mensaje: 'El empleado no ha sido encontrado'
            });
        }
        res.json(empleado);
    } catch (error) {
        console.log('exports.getEmpleadoById::', error);
        res.json({
            Error: error
        })
        next();
    }
}

exports.agregar = async (req, res, next) => {
    try {
        const empleado = new Empleados(req.body);
        await empleado.save();
        res.json({ mensaje: 'Se creo el empleado con exito' });
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
        await Empleados.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        res.json({ mensaje: 'El empleado se actualizo con exito' });
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
        await Empleados.findOneAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'El empleado se elimino con exito' })
    } catch (error) {
        console.log('exports.eliminar::', error);
        res.json({
            Error: error
        })
        next();
    }
}