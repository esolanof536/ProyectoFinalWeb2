let listaBebidasCalientes = [];


const url = `http://localhost:5000`;

const BebidasCalientes = {};


const sleep = (mili) => {
    return new Promise((resultado) => setTimeout(resultado, mili));
};

/**
 * Hace fetch a las bases de datos y lo guarda en el arreglo correspondiente
 */
const getBases = async () => {

    let datos = await fetch(`${url}/bebidasCalientes`)
        .then((response) => response.json());
        listaBebidasCalientes = datos;

 
};


const getById = async (tabla, id) => {
    await sleep(5000);
    let datos = "";

    await fetch(`${url}/${tabla}/${id}`)
        .then((response) => response.json())
        .then((id) => datos = id);

    return datos;
};