const express = require('express');
const router = express.Router();
const usuarioController = require('../../Divella-Giudici/Controllers/usuarioControllers');
const restauranteController = require('../../Divella-Giudici/Controllers/restaurantesControllers');
const buffetController = require('../../Divella-Giudici/Controllers/buffetController');
const bCController = require('../../Divella-Giudici/Controllers/bebidasCalientesControllers');
const bHController = require('../../Divella-Giudici/Controllers/bebidasHeladasControllers');
const bGController = require('../../Divella-Giudici/Controllers/bebidasGaseosasControllers');
const licoresController = require('../../Divella-Giudici/Controllers/licoresControllers');
const vinosController = require('../../Divella-Giudici/Controllers/vinoControllers');
const especialidadController = require('../../Divella-Giudici/Controllers/especialidadesControllers');
const mesaController = require('../../Divella-Giudici/Controllers/mesasControllers');
const empleadosController = require('../../Divella-Giudici/Controllers/empleadosController');
const puestosController = require('../../Divella-Giudici/Controllers/puestosController');
const marcasController = require('../../Divella-Giudici/Controllers/marcaControllers');
const comestiblesController = require('../../Divella-Giudici/Controllers/comestiblescontrollers');
const empaquesController = require('../../Divella-Giudici/Controllers/empaquesControllers');
const limpiezaController = require('../../Divella-Giudici/Controllers/limpiezaControllers');
const tecnologiaController = require('../../Divella-Giudici/Controllers/tecnologiaControllers');
const equipoController = require('../../Divella-Giudici/Controllers/tecnologiaControllers');
const proveedoresController = require('../../Divella-Giudici/Controllers/proveedoresControllers');
const rolesController = require('../../Divella-Giudici/Controllers/rolesController');
const paisesController = require('../../Divella-Giudici/Controllers/paisesController');
const cajasController = require('../../Divella-Giudici/Controllers/paisesController');
const unidadController = require('../../Divella-Giudici/Controllers/unidadesMedidaControllers');
const consecutivosController = require('../../Divella-Giudici/Controllers/consecutivosControllers');



module.exports = function () {

    //Usuarios
    router.get('/usuarios', usuarioController.getUsuarios)
    router.get('/usuarios/:id', usuarioController.getUsuarioById)
    router.post('/usuarios', usuarioController.agregar)
    router.put('/usuarios/:id', usuarioController.actualizar)
    router.delete('/usuarios/:id', usuarioController.eliminar)

    //Restaurantes
    router.get('/restaurantes', restauranteController.getLista)
    router.get('/restaurantes/:id', restauranteController.getById)
    router.post('/restaurantes', restauranteController.agregar)
    router.put('/restaurantes/:id', restauranteController.actualizar)
    router.delete('/restaurantes/:id', restauranteController.eliminar)

    //Buffet
    router.get('/buffet', buffetController.lista)
    router.get('/buffet/:id', buffetController.seleccionado)
    router.post('/buffet', buffetController.agregar)
    router.put('/buffet/:id', buffetController.actualizar)
    router.delete('/buffet/:id', buffetController.eliminar)

    //bebidasCalientes
    router.get('/bebidasCalientes', bCController.getBebidasCalientes)
    router.get('/bebidasCalientes/:id', bCController.getBebidasCalientesById)
    router.post('/bebidasCalientes', bCController.agregar)
    router.put('/bebidasCalientes/:id', bCController.actualizar)
    router.delete('/bebidasCalientes/:id', bCController.eliminar)

    //bebidasHeladas
    router.get('/bebidasheladas', bHController.getBebidasHeladas)
    router.get('/bebidasheladas/:id', bHController.getBebidasHeladasById)
    router.post('/bebidasheladas', bHController.agregar)
    router.put('/bebidasheladas/:id', bHController.actualizar)
    router.delete('/bebidasheladas/:id', bHController.eliminar)

    //bebidas Gaseosas
    router.get('/bebidasgaseosas', bGController.getBebidasGaseosas)
    router.get('/bebidasgaseosas/:id', bGController.getBebidasGaseosasById)
    router.post('/bebidasgaseosas', bGController.agregar)
    router.put('/bebidasgaseosas/:id', bGController.actualizar)
    router.delete('/bebidasgaseosas/:id', bGController.eliminar)

    //Licores
    router.get('/licores', licoresController.getLicores)
    router.get('/licores/:id', licoresController.getLicoresById)
    router.post('/licores', licoresController.agregar)
    router.put('/licores/:id', licoresController.actualizar)
    router.delete('/licores/:id', licoresController.eliminar)

    //vinos
    router.get('/vinos', vinosController.getVinos)
    router.get('/vinos/:id', vinosController.getVinoById)
    router.post('/vinos', vinosController.agregar)
    router.put('/vinos/:id', vinosController.actualizar)
    router.delete('/vinos/:id', vinosController.eliminar)

    //Especialidades
    router.get('/especialidades', especialidadController.getEspecialidades)
    router.get('/especialidades/:id', especialidadController.getEspecialidadesById)
    router.post('/especialidades', especialidadController.agregar)
    router.put('/especialidades/:id', especialidadController.actualizar)
    router.delete('/especialidades/:id', especialidadController.eliminar)

    //Mesa
    router.get('/mesas', mesaController.getMesas)
    router.get('/mesas/:id', mesaController.getMesasById)
    router.post('/mesas', mesaController.agregar)
    router.put('/mesas/:id', mesaController.actualizar)
    router.delete('/mesas/:id', mesaController.eliminar)

    //Empleados
    router.get('/empleados', empleadosController.getEmpleados)
    router.get('/empleados/:id', empleadosController.getEmpleadoById)
    router.post('/empleados', empleadosController.agregar)
    router.put('/empleados/:id', empleadosController.actualizar)
    router.delete('/empleados/:id', empleadosController.eliminar)

    //Puestos
    router.get('/puestos', puestosController.getPuestos)
    router.get('/puestos/:id', puestosController.getPuestosById)
    router.post('/puestos', puestosController.agregar)
    router.put('/puestos/:id', puestosController.actualizar)
    router.delete('/puestos/:id', puestosController.eliminar)

    //Marcas
    router.get('/marcas', marcasController.getMarcas)
    router.get('/marcas/:id', marcasController.getMarcasById)
    router.post('/marcas', marcasController.agregar)
    router.put('/marcas/:id', marcasController.actualizar)
    router.delete('/marcas/:id', marcasController.eliminar)

    //Comestibles
    router.get('/comestibles', comestiblesController.getLista)
    router.get('/comestibles/:id', comestiblesController.getById)
    router.post('/comestibles', comestiblesController.agregar)
    router.put('/comestibles/:id', comestiblesController.actualizar)
    router.delete('/comestibles/:id', comestiblesController.eliminar)

    //Empaques
    router.get('/empaques', empaquesController.getLista)
    router.get('/empaques/:id', empaquesController.getById)
    router.post('/empaques', empaquesController.agregar)
    router.put('/empaques/:id', empaquesController.actualizar)
    router.delete('/empaques/:id', empaquesController.eliminar)

    //Limpieza
    router.get('/limpieza', limpiezaController.getLista)
    router.get('/limpieza/:id', limpiezaController.getById)
    router.post('/limpieza', limpiezaController.agregar)
    router.put('/limpieza/:id', limpiezaController.actualizar)
    router.delete('/limpieza/:id', limpiezaController.eliminar)

    //Tecnologia
    router.get('/tecnologia', tecnologiaController.getLista)
    router.get('/tecnologia/:id', tecnologiaController.getById)
    router.post('/tecnologia', tecnologiaController.agregar)
    router.put('/tecnologia/:id', tecnologiaController.actualizar)
    router.delete('/tecnologia/:id', tecnologiaController.eliminar)

    //Equipos y Utensilios
    router.get('/equipoUtensilios', equipoController.getLista)
    router.get('/equipoUtensilios/:id', equipoController.getById)
    router.post('/equipoUtensilios', equipoController.agregar)
    router.put('/equipoUtensilios/:id', equipoController.actualizar)
    router.delete('/equipoUtensilios/:id', equipoController.eliminar)

    //Proveedores
    router.get('/proveedores', proveedoresController.getLista)
    router.get('/proveedores/:id', proveedoresController.getById)
    router.post('/proveedores', proveedoresController.agregar)
    router.put('/proveedores/:id', proveedoresController.actualizar)
    router.delete('/proveedores/:id', proveedoresController.eliminar)

    //Roles
    router.get('/roles', rolesController.getLista)
    router.get('/roles/:id', rolesController.getById)
    router.post('/roles', rolesController.agregar)
    router.put('/roles/:id', rolesController.actualizar)
    router.delete('/roles/:id', rolesController.eliminar)

    //Paises
    router.get('/paises', paisesController.getLista)
    router.get('/paises/:id', paisesController.getById)
    router.post('/paises', paisesController.agregar)
    router.put('/paises/:id', paisesController.actualizar)
    router.delete('/paises/:id', paisesController.eliminar)

    //Cajas
    router.get('/cajas', cajasController.getLista)
    router.get('/cajas/:id', cajasController.getById)
    router.post('/cajas', cajasController.agregar)
    router.put('/cajas/:id', cajasController.actualizar)
    router.delete('/cajas/:id', cajasController.eliminar)

    //Unidades
    router.get('/unidad', unidadController.getLista)
    router.get('/unidad/:id', unidadController.getById)
    router.post('/unidad', unidadController.agregar)
    router.put('/unidad/:id', unidadController.actualizar)
    router.delete('/unidad/:id', unidadController.eliminar)

    //Unidades
    router.get('/consecutivos', consecutivosController.getLista)
    router.get('/consecutivos/:id', consecutivosController.getById)
    router.post('/consecutivos', consecutivosController.agregar)
    router.put('/consecutivos/:id', consecutivosController.actualizar)
    router.delete('/consecutivos/:id', consecutivosController.eliminar)

    return router;
}