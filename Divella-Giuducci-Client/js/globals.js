const Consecutivos = require("../../Divella-Giudici/Models/Consecutivos");

let listaConsecutivos = [];
let listaUsuarios = [];


const url = `http://localhost:5000`;

const consecu = {};
const usuario = {};


const sleep = (mili) => {
    return new Promise((resultado) => setTimeout(resultado, mili));
};

/**
 * Hace fetch a las bases de datos y lo guarda en el arreglo correspondiente
 */
const fetchConsecutivos = async () => {

    let datos = await fetch(`${url}/consecutivos`)
        .then((response) => response.json());

    listaConsecutivos = datos;
};

const fetchUsuarios = async () => {

    let datos = await fetch(`${url}/usuarios`)
        .then((response) => response.json());

    listaConsecutivos = datos;
}

/**
 * Crea un consecutivo, insertar el nombre de la tabla en tipo
 * @param {El tipo consecutivo que es} tipo 
 */
const crearConsecutivo = async (tipo) => {
    let valorConsecutivo = "";
    let search = "";
    mayor = -1;

    switch (tipo) {
        case "consecutivos":
            search = "CON";
            break;
        case "usuarios":
            search = "USU";
            break;
        default:
            console.log("No se encontro el consecutivo");
            break;
    }
    fetchConsecutivos();

    listaConsecutivos.forEach((consecutivo) => {

        arr = consecutivo.valorConsecutivo.split('-');
        serieCon= parseInt(arr[1]);
        if (mayor < serieCon) {
            mayor = arr[1];
        }
    });
}

/* const getById = async (tabla, id) => {
    await sleep(5000);
    let datos = "";

    await fetch(`${url}/${tabla}/${id}`)
        .then((response) => response.json())
        .then((id) => datos = id);

    return datos;
}; */