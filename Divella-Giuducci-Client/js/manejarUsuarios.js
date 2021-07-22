(function () {

    let consecutivo = {};
    let tipo = {};
    let descripcion = {};
    let valorConsecutivo = {};
    let tempID = {};
    let btnAceptar = {};
    let btnLimpiar = {};
    
    const inicializar = async () => {
        consecutivo = document.querySelector('#consecutivo');
        tipo = document.querySelector('#tipo');
        descripcion = document.querySelector('#descripcion');
        valorConsecutivo = document.querySelector('#valorConsecutivo');
        btnAceptar = document.querySelector('#btnAceptar');
        btnLimpiar = document.querySelector('#btnLimpiarC');
        await getBases();
        bind();
        await tabla();
    };

    const bind = () => {
        consecutivo.onchange = infoTarget;
        tipo.onchange = infoTarget;
        descripcion.onchange = infoTarget;
        valorConsecutivo.onchange = infoTarget;
        btnAceptar.onclick = crearConsecutivo;
        btnLimpiar.onclick = limpiarDatos;
    };

    const infoTarget = (e) => {
        const { name, value } = e.target;
        console.log(name, ':', value)
        consecu[name] = value;
    };

    const crearConsecutivo = async () => {

     
        if (btnAceptar.innerHTML === "Aceptar") {
            fetch(`${url}/consecutivos`, {
                headers: {
                  Accept: "application/json",
                  "Content-type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(consecu),
              })
                .then((res) => console.log(res))
                .catch((error) => console.log(error));
        } else {
          
            listaConsecutivos[tempID].consecutivo = consecutivo.value;          
            listaConsecutivos[tempID].tipo = tipo.value;
            listaConsecutivos[tempID].descripcion = descripcion.value;
            listaConsecutivos[tempID].valorConsecutivo = valorConsecutivo.value;
       
            btnAceptar.innerHTML = "Aceptar";
        }

        await getBases();
        tabla();
        limpiarDatos();
    };

    const limpiarDatos = () => {
        consecutivo.value = '';
        tipo.value = '';
        descripcion.value = '';
        valorConsecutivo.value = '';
    };

    const tabla = async () => {

        let tbAdmin = document.querySelector('#tbConsecutivos');
        tbAdmin.innerHTML = '';

      
        let controlesEliminar = document.getElementsByClassName("botons2");


        listaConsecutivos.forEach(consecutivo => {
            let fondoDes = "";
          


            tbAdmin.innerHTML += `<tr ${fondoDes}>
            <td>${consecutivo._id}</td>
            <td>${consecutivo.consecutivo}</td>
            <td>${consecutivo.tipo}</td>
            <td>${consecutivo.descripcion}</td>
            <td>${consecutivo.valorConsecutivo}</td>
            <td>

          
          
            <input type="button" data-id="${consecutivo._id}"   class="botons2" value="Eliminar"
            onclick="agregarCarritoLibro()">
            </td>

            </tr>`;
        });
       
        for (var i = 0; i < listaConsecutivos.length; ++i) {
            controlesEliminar[i].onclick = eliminarConsecutivo;
        };

    };

    const eliminarConsecutivo = (e) => {
        let btnEliminar = e.target;
        let id = parseInt(btnEliminar.dataset.id);
        let pos = id - 1;

        listaConsecutivos.splice(pos, 1);

        limpiarDatos();
        tabla();
    };

    inicializar();
    
})();
