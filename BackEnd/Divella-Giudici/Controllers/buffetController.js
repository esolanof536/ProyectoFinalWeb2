const listaBuffet = require('../models/Buffet');

exports.lista = async (req, res) => {
    try {
        const lista = await listaBuffet.find();
        res.json(lista)
    } catch (error) {
        res.status(400).send(error);
    }
}
exports.seleccionado = async (req, res, next) => {
    try {

        const id = req.params.id;
        const comida = await listaBuffet.findById(id);
        if (!comida) {
            res.status(404).json({
                mensaje: 'La comida no existe'
            })
        }
        res.json(comida);
    } catch (error) {
        res.status(400).send(error)
    }
}
exports.agregar = async (req, res) => {
    console.log(req.params)
    const comida = new listaBuffet(req.body);
    try {
        await comida.save();
        res.json({
            mensaje: 'Se creo una nueva comida'
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

exports.actualizar = async (req, res) => {
    try {
        const id = req.params.id;
        const comida = await listaBuffet.findOneAndUpdate(
            { _id: id },
            req.body,
            { new: true });
        res.json({
            mensaje: 'Se Actualizo la comida con el id: ' + id + ' con exito'
        })
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.eliminar = async (req, res) => {
    try {
        const id = req.params.id;
        const comida = await listaBuffet.findOneAndDelete({ _id: id })
        res.json({
            mensaje: 'Se elimino la comida con el id: ' + id + ' con exito'
        })
    } catch (error) {
        res.status(400).send(error);
    }
}