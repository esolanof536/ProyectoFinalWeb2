
var prod = 0;
var e = "";
var ep = "";

$(document).ready(function () {

	// MOSTRANDO Y OCULTANDO MENU
	$('#button-menu').click(function(){
		if($('#button-menu').attr('class') == 'fa fa-bars' ){

			$('.navegacion').css({'width':'100%', 'background':'rgba(0,0,0,.5)'}); // Mostramos al fondo transparente
			$('#button-menu').removeClass('fa fa-bars').addClass('fa fa-close'); // Agregamos el icono X
			$('.navegacion .menu').css({'left':'0px'}); // Mostramos el menu

		} else{

			$('.navegacion').css({'width':'0%', 'background':'rgba(0,0,0,.0)'}); // Ocultamos el fonto transparente
			$('#button-menu').removeClass('fa fa-close').addClass('fa fa-bars'); // Agregamos el icono del Menu
			$('.navegacion .submenu').css({'left':'-320px'}); // Ocultamos los submenus
			$('.navegacion .menu').css({'left':'-320px'}); // Ocultamos el Menu

		}
	});
    //MOSTRAR SUBMENU
    $('.navegacion .menu > .item-submenu a').click(function(){
        var positionMenu = $(this).parent().attr('menu'); //Llamamos al item submenu y el atributo que creamos
        console.log(positionMenu); 
        
        $('.item-submenu[menu='+positionMenu+'] .submenu').css({'left':'0px'}); // Mostramos El submenu correspondiente

    });



    // OCULTANDO SUBMENU
	$('.navegacion .submenu li.go-back').click(function(){

		$(this).parent().css({'left':'-320px'}); // Ocultamos el submenu

	});

	// PARTE PARA LOS SECTIONS

	$('ul.menu li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.menu li a').click(function(){
		$('ul.menu li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});

		// PARTE PARA LOS TABLES

		$('ul.tabla li a:first').addClass('active');
		$('.secciones article').hide();
		$('.secciones article:first').show();
	
		$('ul.tabla li a').click(function(){
			$('ul.tabla li a').removeClass('active');
			$(this).addClass('active');
			$('.secciones article').hide();
	
			var activeTab = $(this).attr('href');
			$(activeTab).show();
			return false;
		});

			// PARTE PARA LOS BOTONES

	
			$('ul.boton la a:first').addClass('active');
			$('.secciones article').hide();
			$('.secciones article:first').show();
		
			$('ul.boton la a').click(function(){
				$('ul.boton la a').removeClass('active');
				$(this).addClass('active');
				$('.secciones article').hide();
		
				var activeTab = $(this).attr('href');
				$(activeTab).show();
				return false;
			});
	


}); 

function mostrarEditarLibro(seccion, idLib) {

	console.log("Mostrando seccion " + seccion)

	$('.secciones article').hide();
	$(seccion).show();

	var url = "api/VerLibros";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		data: { "idLib": idLib },
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);
			
			$('#codLiN').val(resultado[1]);
			$('#NomLiN').val(resultado[2]);
			$('#AutorLiN').val(resultado[4]);
			$('#yearLiN').val(resultado[5]);
			$('#EdiLiN').val(resultado[6]);
			$('#IdioLiN').val(resultado[7]);			
			$('#DesLiN').val(resultado[8]);
			$('#PreLiN').val(resultado[9]);

			var f = resultado[3];

			var mes = f.substr(0, 3);

			document.getElementById('selectLiN').value = mes;

		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}

function EditarRoll() {

	var usuario = document.getElementById('UsuarioE').value;
	var roll = document.getElementById('selectRollE').value;


	var url = "api/EditarRoll?usuario=" + usuario + "&roll=" + roll;
	
	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);
			alert("Roll Editado");

		},
		error: function (data) {
			InsertarError(23, "Error al Editar roll");
		},
	});


}
function mostrarEditarMusica(seccion, idMus) {

	console.log("Mostrando seccion " + seccion)

	$('.secciones article').hide();
	$(seccion).show();

	var url = "api/VerMusica";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		data: { "idMus": idMus },
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);

			$('#codCaN').val(resultado[1]);
			$('#NomCaN').val(resultado[2]);
			$('#yearCaN').val(resultado[5]);
			$('#IdioCaN').val(resultado[6]);
			$('#PaisCaN').val(resultado[7]);
			$('#DisCaN').val(resultado[8]);
			$('#NomDisCaN').val(resultado[9]);
			$('#DesCaN').val(resultado[10]);
			$('#PreCaN').val(resultado[11]);
			$('#selecTinterN').val(resultado[4]);

			var f = resultado[3];

			var mes = f.substr(0, 2);

			document.getElementById('selecGeneroN').value = mes;

		

			


		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}

function eliminarPelicula(idPeli) {

	var u = document.cookie;

	var url = "api/EliminarPelicula?idPeli=" + idPeli + "&user=" + u;
	

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		data: { "idPeli": idPeli },
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);
			alert("Pelicula Eliminada Exitosamente");
			MostrarPeliculas();		
		


		},
		error: function (data) {
			InsertarError(18, "Error al Eliminar pelicula");
		},
	});

}
function eliminarCancion(idMusi) {

	var u = document.cookie;

	var url = "api/EliminarCancion?idMusi=" + idMusi + "&user=" + u;


	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		data: { "idMusi": idMusi },
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);
			alert("Cancion Eliminada Exitosamente");
			MostrarMusica();

		},
		error: function (data) {
			InsertarError(15, "Error al Eliminar musica");
		},
	});

}
function eliminarLibro(idLib) {

	var u = document.cookie;

	var url = "api/EliminarLibro?idLib=" + idLib + "&user=" + u;


	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		data: { "idLib": idLib },
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);
			alert("Pelicula Eliminada Exitosamente");
			MostrarLibros();



		},
		error: function (data) {
			InsertarError(21, "Error al Eliminar libro");
		},
	});

}
function EditarCancion() {

	var consec = document.getElementById('codCaN').value;
	var nombre = document.getElementById('NomCaN').value;
	var generoSS = document.getElementById('selecGeneroN').value;
	var interpretacion = document.getElementById('selecTinterN').value;
	var yearSS = document.getElementById('yearCaN').value;
	var idiomaSS = document.getElementById('IdioCaN').value;
	var pais = document.getElementById('PaisCaN').value;
	var disquera = document.getElementById('DisCaN').value;
	var nombreDisco = document.getElementById('NomDisCaN').value;
	var archPreActual = document.getElementById('PreCaN').value;
    var archDescAct = document.getElementById('DesCaN').value;
    var u = document.cookie;

    var url = "api/Musica?consec=" + consec + "&nombre=" + nombre + "&generoSS=" + generoSS + "&tipoInter=" + interpretacion + "&idiomaSS=" + idiomaSS +
        "&pais=" + pais + "&disquera=" + disquera + "&nombreDisco=" + nombreDisco + "&yearSS=" + yearSS + "&archPreActual=" + archPreActual + "&archDescAct=" + archDescAct + "&user=" + u;

	
	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);
			alert("Cancion Editada");

		},
		error: function (data) {
			InsertarError(14, "Error al Editar musica");
		},
	});


}

function EditarLibros() {


	var consec = document.getElementById('codLiN').value;
	var nombre = document.getElementById('NomLiN').value;
	var generoSS = document.getElementById('selectLiN').value;
	var autor = document.getElementById('AutorLiN').value;
	var yearSS = document.getElementById('yearLiN').value;
	var editorial = document.getElementById('EdiLiN').value;
	var idiomaSS = document.getElementById('IdioLiN').value;
	var archPreActual = document.getElementById('PreLiN').value;
    var archDescAct = document.getElementById('DesLiN').value;
    var u = document.cookie;


	var url = "api/Libros?consec=" + consec + "&nombre=" + nombre + "&generoSS=" + generoSS + "&autor=" + autor + "&idiomaSS=" + idiomaSS +
        "&editorial=" + editorial + "&yearSS=" + yearSS + "&archPreActual=" + archPreActual + "&archDescAct=" + archDescAct + "&user=" + u;
	

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);
			alert("Libro Editado");

		},
		error: function (data) {
			InsertarError(20, "Error al Editar libro");
		},
	});


}

function editarPelicula(seccion, idPeli) {

	console.log("Mostrando seccion " + seccion)

	$('.secciones article').hide();
	$(seccion).show();

	var url = "api/VerPeliculas";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		data: { "idPeli": idPeli },
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);

		
			$('#idPeN').val(resultado[0]);
			$('#codPeN').val(resultado[1]);
			$('#NomPeN').val(resultado[2]);
			$('#yearPN').val(resultado[4]);
			$('#IdioPeN').val(resultado[5]);
			$('#ActorPeN').val(resultado[6]);
			$('#DesPeN').val(resultado[7]);
			$('#PrePeN').val(resultado[8]);


			var f = resultado[3];

			var mes = f.substr(0, 2);

			document.getElementById('selectGenE').value = mes;
		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}


function EditarPeliculas() {

	
	var consec = document.getElementById('codPeN').value;
	var nombre = document.getElementById('NomPeN').value;
	var generoSS = document.getElementById('selectGenE').value;
	var actores = document.getElementById('ActorPeN').value;
	var idiomaSS = document.getElementById('IdioPeN').value;
	var yearSS = document.getElementById('yearPN').value;
	var archPreActual = document.getElementById('PrePeN').value;
    var archDescAct = document.getElementById('DesPeN').value;
    var u = document.cookie;

	var url = "api/Peliculas?consec=" + consec + "&nombre=" + nombre + "&generoSS=" + generoSS + "&actores=" + actores +
		"&idiomaSS=" + idiomaSS + "&yearSS=" + yearSS + "&archPreActual=" + archPreActual + "&archDescAct=" + archDescAct + "&user=" + u;


	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);
			alert("Pelicula Editada");

		},
		error: function (data) {
			InsertarError(17, "Error al Editar pelicula");
		},
	});


}

function ModificarParam()
{

	var preL = document.getElementById('PreLibros').value;
	var almL = document.getElementById('AlmLibros').value;
	var preP = document.getElementById('PrePeliculas').value;
	var almP = document.getElementById('AlmPeliculas').value;
	var preM = document.getElementById('PreMusic').value;
	var almM = document.getElementById('AlmMusic').value;

	var url = "api/Parametros?preL=" + preL + "&rutaL=" + almL + "&preP=" + preP + "&rutaP=" + almP +
		"&preM=" + preM + "&rutaM=" + almM;

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);
			alert("Parametros Actualizados");

		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});


}


function MostrarEasy() {


	var ca = document.cookie.split(';');
	var u = ca[0];
	var url = "api/VerEasy?iduser=" + u;

	console.log(url);

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);
			var c = resultado.length;

			if (c != 0) {

				document.getElementById('numEasy').value = resultado[0];
				document.getElementById('CodEasy').value = resultado[1];
				document.getElementById('passEasy').value = resultado[2];

            }


		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}



function crearCompra(tipo) {


	var ca = document.cookie.split(';');
	var u = ca[0];
	var tipo;

	if (tipo == 'Tarjeta') {

		tipo = "Tarjeta";

	} else if (tipo == "EasyPay") {

		tipo = "EasyPay";

	}


	var url = "api/Compras?monto=" + "5000" + "&user=" + u + "&tipo=" + tipo;


		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");

					alert(resultado);

			},
			error: function (data) {
				InsertarError(4, "Error al Crear Compra");
			},
		});

	}



function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}







 function Descargar() {

	var url = "api/Descarga";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");

			alert(resultado);
		},
		error: function (data) {
			InsertarError(25, "Ocurrio un Error al Descargar");
		},
	});

}




function MostrarTarjeta() {




	var ca = document.cookie.split(';');
	var u = ca[0];


	var url = "api/VerTarjetas?iduser=" + u;

	console.log(url);

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);
			var c = resultado.length;

			if (c != 0) {

				var tipo = resultado[4];
				var f = resultado[2];

				var mes = f.substr(0, 2);
				var a = f.substr(3, 4);

				document.getElementById('Mes').value = mes;
				document.getElementById('Ano').value = a;



				if (tipo == 'Visa') {

					document.getElementById('Visa').checked = true;

				} else if (tipo == 'MasterCard') {

					document.getElementById('MasterCard').checked = true;
				}

				document.getElementById('Num_Tarjeta').value = resultado[0];
				document.getElementById('TarjetaH').value = resultado[1];
				document.getElementById('CodigoS').value = resultado[3];
			}

		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}

function MostrarParam()

{	


	var url = "api/Parametros";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");

			document.getElementById('PreLibros').value = resultado[0];
			document.getElementById('AlmLibros').value = resultado[1];
			document.getElementById('PrePeliculas').value = resultado[2];
			document.getElementById('AlmPeliculas').value = resultado[3];
			document.getElementById('PreMusic').value = resultado[4];
			document.getElementById('AlmMusic').value = resultado[5];

		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});



}

function check() {

	var checkBox = document.getElementById("CPrefNN");
	var r = document.getElementById("RangoInNN").value;
	var text = document.getElementById("PrefNN");

	// If the checkbox is checked, display the output text
	if (checkBox.checked == true) {
		text.disabled = false;
	} else {

		text.value = "";
		text.disabled = true;
		document.getElementById("conseNN").value = r;
	}
}

function checkd()
{
	// Get the checkbox
	var checkBox = document.getElementById("CRangoNN");
	// Get the output text

	var tex2 = document.getElementById("RangoFiNN");

	// If the checkbox is checked, display the output text
	if (checkBox.checked == true) {

		tex2.disabled = false;

	} else {

		tex2.value = "";
		tex2.disabled = true;
	}
}

function valideKey(evt) {

	var code = (evt.which) ? evt.which : evt.keyCode;
	if (code == 8) {
		//backspace
		return true;
	}
	else if (code >= 48 && code <= 57) {
		//is a number
		return true;
	}
	else {
		return false;
	}
}

function generoCliente() {
	//1) Definir Las Variables Correspondintes
	var opt_1 = new Array("Generos de Libros", "Drama", "Comedia", "Terror", "Ciencia Ficcion", "Western", "Fantasia", "Thriller", "Accion",
		"Aventura", "Animacion", "Documental", "Romance", "Musical", "Misterio");
	var opt_2 = new Array("Categoria de Musica", "Rock", "Pop", "Hip Hop", "Reggae", "Regueton", "Cumbia", "Jazz", "Blues", "Punk", "Country"
		, "Soul", "Gospel", "Indie", "Clasico", "Disco", "Rap", "R&B", "Ambient", "Ost", "Alternativo");
	var opt_3 = new Array("Generos de Peliculas", "Drama", "Comedia", "Terror", "Ciencia Ficcion", "Western", "Fantasia", "Thriller", "Accion",
		"Aventura", "Animacion", "Documental", "Romance", "Musical", "Misterio");

	// 2) crear una funcion que permita ejecutar el cambio dinamico
	var cosa;
	//Se toma el vamor de la "cosa seleccionada"
	cosa = document.formulario1.cosa[document.formulario1.cosa.selectedIndex].value;
	//se chequea si la "cosa" esta definida
	if (cosa != 0) {
		//selecionamos las cosas Correctas
		mis_opts = eval("opt_" + cosa);
		//se calcula el numero de cosas
		num_opts = mis_opts.length;
		//marco el numero de opt en el select
		document.formulario1.opt.length = num_opts;
		//para cada opt del array, la pongo en el select
		for (i = 0; i < num_opts; i++) {
			document.formulario1.opt.options[i].value = mis_opts[i];
			document.formulario1.opt.options[i].text = mis_opts[i];
		}
	} else {
		//si no habia ninguna opt seleccionada, elimino las cosas del select
		document.formulario1.opt.length = 1;
		//ponemos un guion en la unica opt que he dejado
		document.formulario1.opt.options[0].value = "-";
		document.formulario1.opt.options[0].text = "-";
	}
	//hacer un reset de las opts
	document.formulario1.opt.options[0].selected = true;

}

function OcultarActores() {


	var selectPP = document.getElementById('selectPP').value;
	if (selectPP == 3) {

		document.getElementById('Lactores').style.display = 'block';
		document.getElementById('actoresp').style.display = 'block';

	} else {

		document.getElementById('Lactores').style.display = 'none';
		document.getElementById('actoresp').style.display = 'none';
	}
}

function OcultarLibros() {


	var selectPP = document.getElementById('selectPP').value;
	if (selectPP == 1) {

		document.getElementById('autorp').style.display = 'block';
		document.getElementById('Lautor').style.display = 'block';
		document.getElementById('editorialp').style.display = 'block';
		document.getElementById('Leditorial').style.display = 'block';

	} else {

		document.getElementById('autorp').style.display = 'none';
		document.getElementById('Lautor').style.display = 'none';
		document.getElementById('editorialp').style.display = 'none';
		document.getElementById('Leditorial').style.display = 'none';
	}
}

function OcultarMusica() {


	var selectPP = document.getElementById('selectPP').value;
	if (selectPP == 2) {

		document.getElementById('LselecInter').style.display = 'block';
		document.getElementById('selecInterp').style.display = 'block';
		document.getElementById('Lpais').style.display = 'block';
		document.getElementById('paisp').style.display = 'block';
		document.getElementById('Ldisquera').style.display = 'block';
		document.getElementById('disquerap').style.display = 'block';
		document.getElementById('Ldisco').style.display = 'block';
		document.getElementById('discop').style.display = 'block';

	} else {

		document.getElementById('LselecInter').style.display = 'none';
		document.getElementById('selecInterp').style.display = 'none';
		document.getElementById('Lpais').style.display = 'none';
		document.getElementById('paisp').style.display = 'none';
		document.getElementById('Ldisquera').style.display = 'none';
		document.getElementById('disquerap').style.display = 'none';
		document.getElementById('Ldisco').style.display = 'none';
		document.getElementById('discop').style.display = 'none';
	}
}

function valideKey2(evt) {

	var code = (evt.which) ? evt.which : evt.keyCode;
	if (code == 8) {
		//backspace
		return true;
	}
	else if (code >= 65 && code <= 90 || code >= 97 && code <= 122) {
		//is a number
		return true;
	}
	else {
		return false;
	}
}


function consecu() {

	var checkBox = document.getElementById("CPrefNN");
	var p = document.getElementById("PrefNN").value;
	var r = document.getElementById("RangoInNN").value;

	if (checkBox.checked == true) {

		var cons = p + "-" + r;
		document.getElementById("conseNN").value = cons;

	} else if (checkBox.checked == false) {

		document.getElementById("conseNN").value = r;

	} 

}


function InsertConsec()
{
	var sel = document.getElementById("SelectNConsec").options.selectedIndex;
	var select = document.getElementById("SelectNConsec").options.item(sel).text;
	var consec = document.getElementById("conseNN").value;
	var pref = document.getElementById("CPrefNN").checked;
	var prefijo = document.getElementById("PrefNN").value;
	var ran = document.getElementById("CRangoNN").checked;
	var rangI = document.getElementById("RangoInNN").value;
	var rangoF = document.getElementById("RangoFiNN").value;
	var url = "";
	var u = document.cookie;

	if (sel == 0 || consec == "") {
		
		alert("Llene los campos necesarios");


	} else if (ran == true && rangI >= rangoF || rangI == 0 || ran == true && rangoF == 0) {

			alert("Ingrese rangos validos");

	}  else {

		console.log(rangI + rangoF);

			if (pref == true && ran == true) {

				"api/Consecutivo?user=" + u + "&consec=" 

				url = "api/Consecutivo?user=" + u + "&consec=" + consec + "&desc=" + select + "&pref=" + prefijo + "&rangI="
					+ rangI + "&rangF=" + rangoF;

			} else if (pref == false && ran == true) {

				url = "api/Consecutivo?user=" + u + "&consec=" + consec + "&desc=" + select + "&pref=NA" + "&rangI="
					+ rangI + "&rangF=" + rangoF;

			} else if (pref == true && ran == false) {

				url = "api/Consecutivo?user=" + u + "&consec=" + consec + "&desc=" + select + "&pref=" + prefijo + "&rangI=" + rangI
					+ "&rangF=NA";

			} else if (pref == false && ran == false) {

				url = "api/Consecutivo?user=" + u + "&consec=" + consec + "&desc=" + select + "&pref=NA" + "&rangI=" + rangI
					+ "&rangF=NA";

			}

			$.ajax({
				url: url,
				async: true,
				dataType: "json",
				type: 'GET',
				success: function (resultado) {
					console.log("Se obtuvo respuesta del API");
					console.log(resultado);
					alert(resultado);

				},
				error: function (data) {
					InsertarError(1, "Error al Crear consecutivo");
				},
			});
			}
}


function con(consec) {

	var sub = consec.substr(4);


	var urls = "api/Consecutivo?consec=" + consec + "&desc=" + "Libros" + "&pref=" + "LIB" + "&rangI=" + sub
		+ "&rangF=NA";

	$.ajax({
		url: urls,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {

			console.log("Se obtuvo respuesta del API");
			console.log(resultado);

		},
		error: function (data) {

			alert("Ocurrio un error en el API");
		},
	});

}


function crearLibro() {


	var consec = document.getElementById('codLiE').value;
	var nombre = document.getElementById('NomLiE').value;
	var categoria =   document.getElementById('selectLiE').value;
	var autor = document.getElementById('AutorLiE').value;
	var idioma = document.getElementById('IdioLiE').value;
	var editorial = document.getElementById('EdiLiE').value;
	var fecha = document.getElementById('yearLiE').value;
	var archPreActual = document.getElementById('PreActuLi').value;
	var archPre = document.getElementById('PreLiE').value;
	var archDesc = document.getElementById('DesLiE').value;
    var archDescAct = document.getElementById('DesActuLi').value;
    var u = document.cookie;

	if (consec == "" || nombre == "" || categoria == "" || autor == "" ||
		idioma == "" || editorial == "" || fecha == "" || archPreActual == ""
		|| archPre == "" || archDesc == "" || archDescAct == "" || categoria == "Seleccione") {

		alert('Ingrese Datos necesarios');

	} else if (consec == "NO HAY DISPONIBLES") {

			alert("Agregue mas rango al Consecutivo");

		    }

		else {


		var url = "api/Libros?consec=" + consec + "&nombre=" + nombre + "&categoria=" + categoria + "&autor=" + autor +
			"&idioma=" + idioma + "&editorial=" + editorial + "&fecha=" + fecha + "&archPreActual=" + archPreActual +
			"&archPre=" + archPre + "&archDesc=" + archDesc + "&archDescAct=" + archDescAct +'&user=' + u;


		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");

				if (resultado == 'Libro Creado Exitosamente') {

					alert(resultado);
					document.getElementById('NomLiE').value = "";
					document.getElementById('selectLiE').value.selectedIndex = "0";
					document.getElementById('AutorLiE').value = "";
					document.getElementById('IdioLiE').value = "";
					document.getElementById('EdiLiE').value = "";
					document.getElementById('yearLiE').value = "";
					document.getElementById('PreActuLi').value = "";
					document.getElementById('PreLiE').value = "";
					document.getElementById('DesLiE').value = "";
					document.getElementById('DesActuLi').value = "";
					AutoLibros();


				} else if (resultado == 'Ocurrio un problema') {


					alert(resultado);

				}

			},
			error: function (data) {
				InsertarError(19, "Error al Crear libro");
			},
		});

		
	}

}


function AutoLibros() {



	var url = "api/Libros";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {

			console.log("Se obtuvo respuesta del API");
			console.log(resultado);

			var rango = Number(resultado[2]);
			var final = Number(resultado[4]);
			var pref = resultado[3];
			var count = Number(resultado[0]);
			var x = "";
			var result = 0;

			if (count == 1) {

				rango++;
				x = pref + "-" + String(rango);
				document.getElementById('codLiE').value = x;
				document.getElementById('DesActuLi').value = resultado[1];
				document.getElementById('PreActuLi').value = resultado[5];

			} else if (count > 1 && count < final) {

				result = rango + count;
				x = pref + "-" + String(result);
				document.getElementById('codLiE').value = x;
				document.getElementById('DesActuLi').value = resultado[1];
				document.getElementById('PreActuLi').value = resultado[5];

			} else if (count > 1 && count > final) {

				alert("Este rango ya no tiene consecutivos disponibles");
				ocument.getElementById('codLiE').value = "NO HAY DISPONIBLES";

			}

			var y = document.getElementById('codLiE').value;




		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}



function crearMusica() {


	var consec = document.getElementById('codCaE').value;
	var nombre = document.getElementById('NomCaE').value;
	var genero = document.getElementById('selecGeneroC').value;
	var sel = document.getElementById("selecTinterC").value;
	var pais = document.getElementById('PaisCaE').value;
	var idioma = document.getElementById('IdioCaE').value;
	var disquera = document.getElementById('DisCaE').value;
	var disco = document.getElementById('NomDisCaE').value;
	var fecha = document.getElementById('yearCaE').value;
	var archPreActual = document.getElementById('PreActuCa').value;
	var archPre = document.getElementById('PreCaE').value;
	var archDesc = document.getElementById('DesCaE').value;
	var archDescAct = document.getElementById('DesActuCa').value;


	var u = document.cookie;

	if (consec == "" || nombre == "" || genero == "" || sel == "" ||
		idioma == "" || pais == "" || fecha == "" || disco == "" || disquera == "" || archPreActual == ""
		|| archPre == "" || archDesc == "" || sel == "Seleccione" || genero == "Seleccione") {

		alert('Ingrese Datos necesarios');

	} else if (consec == "NO HAY DISPONIBLES") {

		alert("Agregue mas rango al Consecutivo");

	}
	else {

		var url = "api/Musica?consec=" + consec + "&nombre=" + nombre + "&genero=" + genero + "&tipoInter=" + sel +
			"&pais=" + pais + "&idioma=" + idioma + "&disquera=" + disquera + "&fecha=" + fecha + "&disco=" + disco + "&archPreActual=" + archPreActual +
			"&archPre=" + archPre + "&archDesc=" + archDesc + "&archDescAct=" + archDescAct + "&user=" + u;

		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");

				if (resultado == 'Musica Creada Exitosamente') {

					alert(resultado);
					document.getElementById('codCaE').value = "";
					document.getElementById('NomCaE').value = "";
					document.getElementById('selecGeneroC').selectedIndex = 0;
					document.getElementById('PaisCaE').value = "";
					document.getElementById('IdioCaE').value = "";
					document.getElementById('DisCaE').value = "";
					document.getElementById('NomDisCaE').value = "";
					document.getElementById('yearCaE').value = "";
					document.getElementById('PreActuCa').value = "";
					document.getElementById('PreCaE').value = "";
					document.getElementById('DesCaE').value = "";
					document.getElementById('DesActuCa').value = "";
					document.getElementById("selecTinterC").selectedIndex = 0;

					AutoMusica();

				} 

			},
			error: function (data) {
				InsertarError(13, "Error al Crear musica");
			},
		});


	}

}


function AutoMusica() {


	var url = "api/Musica";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {

			console.log("Se obtuvo respuesta del API");
			console.log(resultado);

			var rango = Number(resultado[2]);
			var final = Number(resultado[4]);
			var pref = resultado[3];
			var count = Number(resultado[0]);
			var x = "";
			var result = 0;

			if (count == 1) {

				rango++;
				x = pref + "-" + String(rango);
				document.getElementById('codCaE').value = x;
				document.getElementById('DesActuCa').value = resultado[1];
				document.getElementById('PreActuCa').value = resultado[5];

			} else if (count > 1 && count < final) {

				result = rango + count;
				x = pref + "-" + String(result);
				document.getElementById('codCaE').value = x;
				document.getElementById('DesActuCa').value = resultado[1];
				document.getElementById('PreActuCa').value = resultado[5];


			} else if (count > 1 && count > final) {

				alert("Este rango ya no tiene consecutivos disponibles");
				ocument.getElementById('codLiE').value = "NO HAY DISPONIBLES";

			}

			var y = document.getElementById('codCaE').value;




		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}



function crearPeli() {


	var consec = document.getElementById('codPeE').value;
	var nombre = document.getElementById('NomPeE').value;
	var genero = document.getElementById("selectGenP").value;
	var actores = document.getElementById('ActorPeE').value;
	var idioma = document.getElementById('IdioPeE').value;
	var fecha = document.getElementById('yearPE').value;
	var archPreActual = document.getElementById('PreActuPe').value;
	var archPre = document.getElementById('PrePeE').value;
	var archDesc = document.getElementById('DesPeE').value;
	var archDescAct = document.getElementById('DesActuPe').value;
	var u = document.cookie;
	

	if (consec == "" || nombre == "" || genero == "" || actores == "" ||
		idioma == "" || fecha == "" || archPreActual == ""
		|| archPre == "" || archDesc == "" || genero =="Seleccione") {

		alert('Ingrese Datos necesarios');

	} else if (consec == "NO HAY DISPONIBLES") {

		alert("Agregue mas rango al Consecutivo");

	}
	else {

		var url = "api/Peliculas?consec=" + consec + "&nombre=" + nombre + "&genero=" + genero + "&actores=" + actores +
			"&idioma=" + idioma + "&fecha=" + fecha + "&archPreActual=" + archPreActual +
			"&archPre=" + archPre + "&archDesc=" + archDesc + "&archDescAct=" + archDescAct + "&user=" + u;

		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");

				if (resultado == 'Pelicula Creada Exitosamente') {

					alert(resultado);
					document.getElementById('codPeE').value = "";
					document.getElementById('NomPeE').value = "";
					document.getElementById('ActorPeE').value = "";
					document.getElementById('IdioPeE').value = "";
					document.getElementById('yearPE').value = "";
					document.getElementById('PreActuPe').value = "";
					document.getElementById('PrePeE').value = "";
					document.getElementById('DesPeE').value = "";
					document.getElementById('selectGenP').selectedIndex = 0;
					DesActuPe
					document.getElementById('DesActuPe').value = "";

					AutoPeli();


				} else if (resultado == 'Ocurrio un problema') {


					alert(resultado);

				}


			},
			error: function (data) {
				InsertarError(16, "Error al Crear pelicula");
			},
		});


	}

}


function AutoPeli() {



	var url = "api/Peliculas";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {

			console.log("Se obtuvo respuesta del API");
			console.log(resultado);

			var rango = Number(resultado[2]);
			var final = Number(resultado[4]);
			var pref = resultado[3];
			var count = Number(resultado[0]);
			var x = "";
			var result = 0;

			if (count == 1) {

				rango++;
				x = pref + "-" + String(rango);
				document.getElementById('codPeE').value = x;
				document.getElementById('DesActuPe').value = resultado[1];
				document.getElementById('PreActuPe').value = resultado[5];

			} else if (count > 1 && count < final) {

				result = rango + count;
				x = pref + "-" + String(result);
				document.getElementById('codPeE').value = x;
				document.getElementById('DesActuPe').value = resultado[1];
				document.getElementById('PreActuPe').value = resultado[5];

			} else if (count > 1 && count > final) {

				alert("Este rango ya no tiene consecutivos disponibles");
				ocument.getElementById('codPeE').value = "NO HAY DISPONIBLES";

			}

			var y = document.getElementById('codPeE').value;




		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});
}

function crearCliente() {

	var us = document.getElementById('Usuario').value;
	var nom = document.getElementById('Nombre').value;
	var papel = document.getElementById('Papellido').value;
	var sapel = document.getElementById('Sapellido').value;
	var pass = document.getElementById('Password').value;
	var confpass = document.getElementById('Cpassword').value;
	var correo = document.getElementById('Correo').value;
	var preg = document.getElementById('Question').value;
	var resp = document.getElementById('Respuesta').value;


	if (us == "" || nom == "" || papel == "" || sapel == "" || pass == "" || confpass == "" ||
		correo == "" || preg == "" || resp == "") {


		alert("Hacen falta valores");

	} else if (pass != confpass) {

		alert("El password no coincide");
	} else {


		var url = "api/InsertaUsuario?user=" + us + "&pass=" + pass + "&nombre=" + nom + "&pApellido=" + papel +
			"&sApellido=" + sapel + "&roll=" + "Cliente" + "&correo=" + correo + "&pSeguridad=" + preg + "&rSeguridad=" + resp;

		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");


				if (resultado == 'Ese usuario ya existe') {

					alert(resultado);

				} else {

					alert(resultado);
					document.getElementById('Usuario').value = '';
					document.getElementById('Nombre').value = '';
					document.getElementById('Papellido').value = '';
					document.getElementById('Sapellido').value = '';
					document.getElementById('Password').value = '';
					document.getElementById('Cpassword').value = '';
					document.getElementById('Correo').value = '';
					document.getElementById('Question').value = '';
					document.getElementById('Respuesta').value = '';
				}

			},
			error: function (data) {
				InsertarError(25, "Error al Crear cliente");
			},
		});


	}

}

function crearUsuario() {

	var us = document.getElementById('Usuario').value;
	var nom = document.getElementById('Nombre').value;
	var rol = document.getElementById('selectRoll').selectedIndex;
	var roll = document.getElementById('selectRoll').value;
	var papel = document.getElementById('Papellido').value;
	var sapel = document.getElementById('Sapellido').value;
	var pass = document.getElementById('Password').value;
	var confpass = document.getElementById('Cpassword').value;
	var correo = document.getElementById('Correo').value;
	var preg = document.getElementById('Question').value;
	var resp = document.getElementById('Respuesta').value;


	if (us == "" || nom == "" || papel == "" || sapel == "" || pass == "" || confpass == "" ||
		correo == "" || preg == "" || resp == "" || rol == 0) {


		alert("Hacen falta valores");

	} else if (pass != confpass) {

		alert("El password no coincide");
	} else {


		var url = "api/InsertaUsuario?user=" + us + "&pass=" + pass + "&nombre=" + nom + "&pApellido=" + papel +
			"&sApellido=" + sapel + "&roll=" + roll + "&correo=" + correo + "&pSeguridad=" + preg + "&rSeguridad=" + resp;



		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");


				if (resultado == 'Ese usuario ya existe') {

					alert(resultado);

				} else {

					alert(resultado);
					document.getElementById('Usuario').value = '';
					document.getElementById('Nombre').value = '';
					document.getElementById('Papellido').value = '';
					document.getElementById('Sapellido').value = '';
					document.getElementById('Password').value = '';
					document.getElementById('Cpassword').value = '';
					document.getElementById('Correo').value = '';
					document.getElementById('Question').value = '';
					document.getElementById('Respuesta').value = '';



				}

			},
			error: function (data) {

				InsertarError(22, "Error al Crear usuario");

			},
		});


    }

}


function MostrarEditarRol(seccion, idR) {
	
	console.log("Mostrando seccion " + seccion)

	$('.secciones article').hide();
	$(seccion).show();

	var url = "api/VerUsuarios";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		data: { "idR": idR },
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);

			$('#UsuarioE').val(resultado[1]);
			

			var f = resultado[2];


			document.getElementById('selectRollE').value = f;

		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}

function MostrarUsers() {



	var url = "api/VerUsuarios";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);


			var tabla = '<ul class="tabla">';
			tabla += '<table id="UsuarioTB">';
			tabla += '<tr><thead><th>ID</th><th>Usuario</th><th>Nombre</th><th>Apellido</th><th>Correo</th><th colspan="2">Roll</th></thead>';
			tabla += ' </tr>';


			var x = 1;
			var q = 2;
			var w = 3;
			var e = 4;
			var r = 5;
			var t = 6;
			var count = Number(resultado[0]);

			for (var i = 0; i < count; i++) {

				var o = '<input type="button" class="botons2" value="Editar" onclick="MostrarEditarRol(' + "'#tab70'," + "'" + resultado[x] + "'" + ')">';
				
				tabla += "<tr><td>" + resultado[x] + "</td><td>" + resultado[q] +
					"</td><td>" + resultado[w] + "</td><td>" + resultado[e] + "</td><td>" + resultado[r] + "</td><td>" + resultado[t] + "</td><td>" + o+ "</td></tr>";

				x += 6;
				q += 6;
				w += 6;
				e += 6;
				r += 6;
				t += 6;

			}
			tabla += '</table>';
			tabla += '</ul>'
			var d = document.getElementById('Tabla');
			d.innerHTML = tabla;
			//document.getElementById("Tabla").appendChild(btn);

		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});



}

function MostrarPeliculas() {



	var url = "api/VerPeliculas";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);

			var tabla = '<table id="table">';
			tabla += '<tr><thead><th>ID</th><th colspan="3">Nombre</th></thead>';
			tabla += ' </tr>';

			var x = 1;
			var q = 2;
			var count = Number(resultado[0]);
			
			for (var i = 0; i < count; i++) {

				var u = '<input type="button" class="botons2" value="Editar" onclick="editarPelicula(' + "'#tab11'," + "'" + resultado[x] + "'" + ')">';
				var e = '<input type="button" class="botons2" value="Eliminar" onclick="eliminarPelicula('  + "'" + resultado[x] + "'" + ')">';

				tabla += "<tr><td>" + resultado[x] + "</td><td>" + resultado[q] + "</td><td>" + u+"</td><td>"+e+  "</td></tr>";

				x += 2;
				q += 2;
				
			}
			tabla += '</table>';
			
			var d = document.getElementById('TablaPP');
		d.innerHTML = tabla;
			//document.getElementById("Tabla").appendChild(btn);
			console.log(table);
		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});







}



function MostrarLibros() {



	var url = "api/VerLibros";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);


			var tabla = '<ul class="tabla">';
			tabla += '<table>';
			tabla += '<tr><thead><th>ID</th><th colspan="3">Nombre</th></thead>';
			tabla += ' </tr>';


			var x = 1;
			var q = 2;

			var count = Number(resultado[0]);

			for (var i = 0; i < count; i++) {

				var u = '<input type="button" class="botons2" value="Editar" onclick="mostrarEditarLibro(' + "'#tab14'," + "'" + resultado[x] + "'" + ')">';
				var e = '<input type="button" class="botons2" value="Eliminar" onclick="eliminarLibro(' + "'" + resultado[x] + "'" + ')">';

				tabla += "<tr><td>" + resultado[x] + "</td><td>" + resultado[q] + "</td><td>" + u + "</td><td>" + e + "</td></tr>";

				x += 2;
				q += 2;

			}
			tabla += '</table>';
			tabla += '</ul>'
			var d = document.getElementById('TablaLI');
			d.innerHTML = tabla;
			//document.getElementById("Tabla").appendChild(btn);

		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});



}


function MostrarMusica() {



	var url = "api/VerMusica";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);


			var tabla = '<ul class="tabla">';
			tabla += '<table>';
			tabla += '<tr><thead><th>ID</th><th colspan="3">Cancion</th></thead>';
			tabla += ' </tr>';

		
			var x = 1;
			var q = 2;

			var count = Number(resultado[0]);

			for (var i = 0; i < count; i++) {

				var u = '<input type="button" class="botons2" value="Editar" onclick="mostrarEditarMusica(' + "'#tab17'," + "'" + resultado[x] + "'" + ')">';
				var e = '<input type="button" class="botons2" value="Eliminar" onclick="eliminarCancion(' + "'" + resultado[x] + "'" + ')">';

				tabla += "<tr><td>" + resultado[x] + "</td><td>" + resultado[q] + "</td><td>" + u + "</td><td>" + e + "</td></tr>";

				x += 2;
				q += 2;

			}
			tabla += '</table>';
			tabla += '</ul>'
			var d = document.getElementById('TablaMU');
			d.innerHTML = tabla;
			//document.getElementById("Tabla").appendChild(btn);

		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});



}


function EditarConsecutivos() {

	var id = document.getElementById('ID').value;
	var consec = document.getElementById('conse').value;
	var pref = document.getElementById("CPref").checked;
	var prefijo = document.getElementById('Pref').value;
	var ran = document.getElementById("CRango").checked;
	var rangoI = document.getElementById('RangoIn').value;
	var rangoFi = document.getElementById('RangoFi').value;
	var descrip = document.getElementById('SelectEConsec').value;
	var u = document.cookie;

	if (id == 1 || id == 2 || id == 3 || id == 4 || id == 40) {

		alert("No puede editar este consecutivo");

	} else {

		if (ran == true && rangoI >= rangoFi || rangoI == 0 || ran == true && rangoFi == 0) {

			alert("Ingrese rangos validos");

		} else {

			console.log(rangoI + rangoFi);

			if (pref == true && ran == true) {

				
				var url = "api/EditarConsecutivo/" + id + "?usuario=" + u + "&consec=" + consec + "&descrip=" + descrip + "&pref=" + prefijo +
					"&rangoI=" + rangoI + "&rangoF=" + rangoFi;

			}

			if (descrip == 0 || consec == "") {

				alert("Llene los campos necesarios");


			} else if (ran == true && rangoI >= rangoFi || rangoI == 0 || ran == true && rangoFi == 0) {

				alert("Ingrese rangos validos");

			} else {

				console.log(rangoI + rangoFi);

				if (pref == true && ran == true) {



					url = "api/EditarConsecutivo/" + id + "?usuario=" + u + "&consec=" + consec + "&descrip=" + descrip + "&pref=" + prefijo +
						"&rangoI=" + rangoI + "&rangoF=" + rangoFi;

				} else if (pref == false && ran == true) {

					url = "api/EditarConsecutivo/" + id + "?usuario=" + u + "&consec="+ consec + "&descrip=" + descrip + "&pref=" + prefijo +
						"&rangoI=" + rangoI + "&rangoF=" + rangoFi;

				} else if (pref == true && ran == false) {

					url = "api/EditarConsecutivo/" + id + "?usuario=" + u + "&consec="+ consec + "&descrip=" + descrip + "&pref=" + prefijo +
						"&rangoI=" + rangoI + "&rangoF=" + rangoFi;

				} else if (pref == false && ran == false) {

					url = "api/EditarConsecutivo/" + id + "?usuario=" + u + "&consec=" + consec + "&descrip=" + descrip + "&pref=" + prefijo +
						"&rangoI=" + rangoI + "&rangoF=" + rangoFi;


				}

			}
			$.ajax({
				url: url,
				async: true,
				dataType: "json",
				type: 'GET',
				success: function (resultado) {
					console.log("Se obtuvo respuesta del API");
					alert(resultado);

				},
				error: function (data) {
					InsertarError(2, "Error al Editar Consecutivo");

				},
			});

		}
	}
}



function Backm() {
	window.location.href = "index.html"
}

function VaciarC() {

	var url = "api/Carrito";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'POST',
		success: function (resultado) {

			verCarrito();
			document.getElementById('Total').value = '0';


		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}
function verCarrito() {


	var url = "api/Carrito";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);
			var tabla = '<ul class="tabla">';
			tabla += '<table>';
			tabla += '<tr><thead><th>Nombre</th><th>Categoria</th><th>Precio</th><th>Tipo</th></thead>';
			tabla += ' </tr>';


			var x = 1;
			var q = 2;
			var y = 3;
			var w = 4;

			var count = Number(resultado[0]);

			for (var i = 0; i < count; i++) {


				tabla += "<tr><td>" + resultado[x] + "</td><td>" + resultado[q] + "</td><td>" + resultado[y] + "</td><td>" + resultado[w] + "</td></tr>";

				x += 4;
				q += 4;
				y += 4;
				w += 4;

			}
			tabla += '</table>';
			tabla += '</ul>'
			var d = document.getElementById('carritoT');
			d.innerHTML = tabla;

		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});


}

function validarFacebook() {

	var us = document.getElementById('facebook').value;


	var url = "api/Login/" + us;

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {

			console.log("Se obtuvo respuesta del API");

			var u = resultado.substr(6);


			document.cookie = us;
			console.log('cookie ' + document.cookie);
			alert("Usuario Valido");


			GoClienteFace();




		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});


}

function Backm() {
	window.location.href = "index.html"
}

function GoPagoTarjeta() {
	window.location.href = "PagoTarjeta.html"
}

function GoCaptchaT() {
	window.location.href = "CaptchaTarjeta.html"
}

function GoCaptchaE() {
	window.location.href = "CaptchaEasyPay.html"
}

function GoCaptchaTFace() {
	window.location.href = "CaptchaTarjetaFace.html"
}

function GoCaptchaEFace() {
	window.location.href = "CaptchaEasyPayFace.html"
}

function GoMetodo() {


	var monto = document.getElementById('Total').value;

	if (monto == '0') {

		alert('El carrito esta vacio');
	} else {


		window.location.href = "MetodosDePago.html";

	}

}

function GoMetodoFace() {

	var monto = document.getElementById('Total').value;

	if (monto == '0') {

		alert('El carrito esta vacio');
	} else {


		window.location.href = "MetodosDePagoFacebook.html";

	}
	

}

function GoCliente() {
	window.location.href = "MenuCliente.html"
}

function GoAdmin() {
	window.location.href = "MenuPrincipal.html"
}

function CerrarSesion() {

	window.location.href = "index.html";
	elimTcookies();
	VaciarC();
}


function GoLogin() {
	window.location.href = "index.html"
}

function GoSegu() {
	window.location.href = "MenuSeguridad.html"
}

function GoRegistroCliente() {
	window.location.href = "RegistroCliente.html"
}

function GoClienteFace() {
	window.location.href = "MenuClienteFacebook.html"
}

function GoConsec() {
	window.location.href = "MenuConsecutivo.html"
}


function GoConsult() {
	window.location.href = "MenuConsulta.html"
}


function GoMant() {
	window.location.href = "MenuMantenimiento.html"
}


function GoPagoEasyBuy() {
	window.location.href = "PagoEasyPay.html"
}

function GoPagoEasyBuyFace() {
	window.location.href = "PagoEasyPayFace.html"
}


function mostrarEditarConsecutivo(seccion, idCons) {

	console.log("Mostrando seccion " + seccion)

	$('.secciones article').hide();
	$(seccion).show();

	var url = "api/VerConsecutivos";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		data: { "idCons": idCons },
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);

			$('#ID').val(resultado[0]);
			$('#conse').val(resultado[1]);
			$('#Pref').val(resultado[3]);
			$('#RangoIn').val(resultado[4]);
			$('#RangoFi').val(resultado[5]);

			if (resultado[5] != 'NA') {


				document.getElementById('CRango').checked = true;

			} else if (resultado[3] != 'NA') {


				document.getElementById('CPref').checked = true;
			}

			var f = resultado[2];


			document.getElementById('SelectEConsec').value = f;


		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}


function eliminarConsecutivo(idCons) {

	var u = document.cookie;

	if (idCons == 1 || idCons == 2 || idCons == 3 || idCons == 4 || idCons == 40) {

		alert("No puede eliminar este consecutivo");

	} else {


		var url = "api/EliminarConsecutivo?usuario=" + u +"&idCons=" + idCons;


		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			data: { "idCons": idCons },
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");
				console.log(resultado);
				alert(resultado);
				MostrarConsecutivos();



			},

			error: function (data) {

				InsertarError(3, "Error al Editar roll");
			},
		});
	}
}


function MostrarConsecutivos() {

	var url = "api/VerConsecutivos";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);


			var tabla = '<ul class="tabla">';
			tabla += '<table>';
			tabla += '<tr><thead><th>ID</th><th>Consecutivo</th><th colspan="3">Descripcion</th></thead>';
			tabla += ' </tr>';


			var x = 1;
			var q = 2;
			var e = 3;

			var count = Number(resultado[0]);

			for (var i = 0; i < count; i++) {
				var u = '<input type="button" class="botons2" value="Editar" onclick="mostrarEditarConsecutivo(' + "'#tab6'," + "'" + resultado[x] + "'" + ')">';
				var k = '<input type="button" class="botons2" value="Eliminar" onclick="eliminarConsecutivo(' + "'" + resultado[x] + "'" + ')">';


				tabla += "<tr><td>" + resultado[x] + "</td><td>" + resultado[q] + "</td><td>" + resultado[e] + "</td><td>" + u + "</td><td>" + k + "</td></tr>";

				x += 3;
				q += 3;
				e += 3;
			}
			tabla += '</table>';
			tabla += '</ul>'
			var d = document.getElementById('TablaCON');
			d.innerHTML = tabla;
			//document.getElementById("Tabla").appendChild(btn);

		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});



}




function MostrarCliLibros() {


	var url = "api/VerLibros";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'POST',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);


			var tabla = '<ul class="tabla">';
			tabla += '<table>';
			tabla += '<tr><thead><th>ID</th><th>Nombre</th><th>Autor</th><th colspan="2">Genero</th></thead>';
			tabla += ' </tr>';


			var x = 1;
			var q = 2;
			var y = 3;
			var w = 4;

			var count = Number(resultado[0]);

			for (var i = 0; i < count; i++) {

				var u = '<input type="button" class="botons2" value="Comprar" onclick="agregarCarritoLibro(' + "'#tab11'," + "'" + resultado[x] + "'" + ')">';



				tabla += "<tr><td>" + resultado[x] + "</td><td>" + resultado[w] + "</td><td>" + resultado[q] + "</td><td>" + resultado[y] + "</td><td>" + u + "</td></tr>";

				x += 4;
				q += 4;
				y += 4;
				w += 4;

			}
			tabla += '</table>';
			tabla += '</ul>'
			var d = document.getElementById('TablaUL');
			d.innerHTML = tabla;


		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}

function MostrarCliLibros2() {


	var url = "api/VerLibros";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'POST',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);


			var tabla = '<ul class="tabla">';
			tabla += '<table>';
			tabla += '<tr><thead><th>ID</th><th>Nombre</th><th>Autor</th><th colspan="2">Genero</th></thead>';
			tabla += ' </tr>';


			var m = 1;
			var x = 2;
			var q = 3;
			var y = 4;

			var count = Number(resultado[0]);

			for (var i = 0; i < count; i++) {

				var u = '<input type="button" class="botons2" value="Comprar" onclick="agregarCarritoLibro(' + "'#tab90'," + "'" + resultado[m] + "'" + ')">';





				tabla += "<tr><td>" + resultado[m] + "</td><td>" + resultado[y] + "</td><td>" + resultado[x] + "</td><td>" + resultado[q] + "</td><td>" + u + "</td></tr>";

				m += 4;
				x += 4;
				q += 4;
				y += 4;
			}
			tabla += '</table>';
			tabla += '</ul>'
			var d = document.getElementById('TablaULL');
			d.innerHTML = tabla;


		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}



function MostrarCliMusica() {

	var url = "api/VerMusica";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'POST',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);


			var tabla = '<ul class="tabla">';
			tabla += '<table>';
			tabla += '<tr><thead><th>ID</th><th>Nombre</th><th>Disquera</th><th colspan="2">Genero</th></thead>';
			tabla += ' </tr>';


			var m = 1;
			var x = 2;
			var q = 3;
			var y = 4;

			var count = Number(resultado[0]);

			for (var i = 0; i < count; i++) {

				var u = '<input type="button" class="botons2" value="Comprar" onclick="agregarCarritoCancion(' + "'#tab90'," + "'" + resultado[m] + "'" + ')">';





				tabla += "<tr><td>" + resultado[m] + "</td><td>" + resultado[y] + "</td><td>" + resultado[x] + "</td><td>" + resultado[q] + "</td><td>" + u + "</td></tr>";

				m += 4;
				x += 4;
				q += 4;
				y += 4;
			}
			tabla += '</table>';
			tabla += '</ul>'
			var d = document.getElementById('TablaUM');
			d.innerHTML = tabla;


		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}


function MostrarCliMusica2() {


	var url = "api/VerMusica";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'POST',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);


			var tabla = '<ul class="tabla">';
			tabla += '<table>';
			tabla += '<tr><thead><th>ID</th><th>Nombre</th><th>Disquera</th><th colspan="2">Genero</th></thead>';
			tabla += ' </tr>';


			var m = 1;
			var x = 2;
			var q = 3;
			var y = 4;

			var count = Number(resultado[0]);

			for (var i = 0; i < count; i++) {

				var u = '<input type="button" class="botons2" value="Comprar" onclick="agregarCarritoCancion(' + "'#tab90'," + "'" + resultado[m] + "'" + ')">';





				tabla += "<tr><td>" + resultado[m] + "</td><td>" + resultado[y] + "</td><td>" + resultado[x] + "</td><td>" + resultado[q] + "</td><td>" + u + "</td></tr>";

				m += 4;
				x += 4;
				q += 4;
				y += 4;
			}
			tabla += '</table>';
			tabla += '</ul>'
			var d = document.getElementById('TablaUMM');
			d.innerHTML = tabla;


		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}


function MostrarCliPelicula() {


	var url = "api/VerPeliculas";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'POST',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);


			var tabla = '<ul class="tabla">';
			tabla += '<table>';
			tabla += '<tr><thead><th>ID</th><th>Nombre</th><th>Fecha</th><th colspan="2">Genero</th></thead>';
			tabla += ' </tr>';

			var m = 1;
			var x = 2;
			var q = 3;
			var y = 4;

			var count = Number(resultado[0]);

			for (var i = 0; i < count; i++) {

				var u = '<input type="button" class="botons2" value="Comprar" onclick="agregarCarritoPelicula(' + "'#tab90'," + "'" + resultado[m] + "'" + ')">';





				tabla += "<tr><td>" + resultado[m] + "</td><td>" + resultado[y] + "</td><td>" + resultado[x] + "</td><td>" + resultado[q] + "</td><td>" + u + "</td></tr>";

				m += 4;
				x += 4;
				q += 4;
				y += 4;

			}
			tabla += '</table>';
			tabla += '</ul>'
			var d = document.getElementById('TablaUP');
			d.innerHTML = tabla;


		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}

function MostrarCliPelicula2() {


	var url = "api/VerPeliculas";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'POST',
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);


			var tabla = '<ul class="tabla">';
			tabla += '<table>';
			tabla += '<tr><thead><th>ID</th><th>Nombre</th><th>Fecha</th><th colspan="2">Genero</th></thead>';
			tabla += ' </tr>';

			var m = 1;
			var x = 2;
			var q = 3;
			var y = 4;

			var count = Number(resultado[0]);

			for (var i = 0; i < count; i++) {

				var u = '<input type="button" class="botons2" value="Comprar" onclick="agregarCarritoPelicula(' + "'#tab90'," + "'" + resultado[m] + "'" + ')">';





				tabla += "<tr><td>" + resultado[m] + "</td><td>" + resultado[y] + "</td><td>" + resultado[x] + "</td><td>" + resultado[q] + "</td><td>" + u + "</td></tr>";

				m += 4;
				x += 4;
				q += 4;
				y += 4;

			}
			tabla += '</table>';
			tabla += '</ul>'
			var d = document.getElementById('TablaUPP');
			d.innerHTML = tabla;


		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});


}


function AutoUser() {

	var u = document.cookie;
	console.log('u ' + u);
	var url = "api/CambiarC?user=" + u;


	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success:  function (resultado) {

			console.log("Se obtuvo respuesta del API");
			console.log(resultado);

			document.getElementById('Preg').value = resultado;

		},
		error: function (data) {

			alert("Ocurrio un error en el API");
		},
	});

}

function CabmiarContra() {


	var old = document.getElementById('OldPassword').value;
	var res = document.getElementById('ResSeguridad').value;
	var nueva = document.getElementById('Npassword').value;
	var confirm = document.getElementById('Cpassword').value;
	var u = document.cookie;
	console.log('Cookie' + u);


	if (old == "" || res == "" || nueva == "" || confirm == "") {

		alert('Favor llenar los espacios');

	} else if (nueva != confirm) {

		alert('Las contraseñas no coinciden');

	} else {

		var url = "api/CambiarC?user=" + u + "&old=" + old + "&nueva=" + nueva + "&res=" + res;

		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {

				console.log("Se obtuvo respuesta del API");

				alert(resultado);



			},
			error: function (data) {

				InsertarError(26, "Error al Cambiar Password");
			},
		});

	}

}


function validar() {

	console.log(document.cookie);
	var us = document.getElementById('user').value;
	var cntra = document.getElementById('contra').value;

	if (us == "" || cntra == "") {
		alert("Ingrese datos");

	} else {


		var url = "/api/Login?user=" + us + "&contras=" + cntra;

		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
            success: function (resultado) {

				console.log("Se obtuvo respuesta del API");

                var u = resultado.substr(6);


                if (resultado == "Invalido") {

					alert("Usuario Invalido");
					document.getElementById('user').value = "";
					document.getElementById('contra').value = "";

                } else if (resultado != "Invalido") {

                    document.cookie = us;
                    console.log('cookie ' + document.cookie);
                    alert("Usuario Valido");

					if (u == 'Cliente') {

						GoCliente();

					} else if (u == 'Administrador') {

						GoAdmin();

					} else if (u == 'Seguridad') {

						GoSegu();

					} else if (u == 'Consulta') {

						GoConsult();

					} else if (u == 'Mantenimiento') {

						GoMant();
					} else if (u == 'Consecutivo') {

						GoConsec();

                    }
					
				}

			},
			error: function (data) {
				alert("Ocurrio un error en el API");
			},
		});

	}
}


//function validarFacebook() {

//	var us = document.getElementById('facebook').value;


//	var url = "api/Login/" + us;

//	$.ajax({
//		url: url,
//		async: true,
//		dataType: "json",
//		type: 'GET',
//		success: function (resultado) {

//			console.log("Se obtuvo respuesta del API");

//			var u = resultado.substr(6);


//			document.cookie = us;
//			console.log('cookie ' + document.cookie);
//			alert("Usuario Valido");


//			GoClienteFace();




//		},
//		error: function (data) {
//			alert("Ocurrio un error en el API");
//		},
//	});


//}


function InsertarError(numero, mensaje) {



	var f = new Date();

	 f = (f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());


	var url = "api/Error?fecha= " + f + "&numero=" + numero + "&mensaje=" + mensaje;


	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {

			console.log("Se obtuvo respuesta del API");

			alert('ERROR\nCodigo: ' + numero + '\nFecha: ' + f  + '\nMensaje: ' + mensaje );

		},
		error: function (data) {

			alert("ERROR");
		},
	});

}




function elimTcookies() {

	var ca = document.cookie.split(';');

	for (var i = 0; i < ca.length; i++) {

		var c = ca[i];
		elimCookie(c);

	}
}


function eliminarFila(btn) {

	elimCookie(this.e);
	elimCookie(this.ep);
	prod = prod - 1;
	var row = btn.parentNode.parentNode;
	row.parentNode.removeChild(row);
	console.log(document.cookie);
}


function elimCookie(name) {


	var expiry = new Date();
	expiry.setTime(expiry.getTime() - 3600);
	document.cookie = name + "=; expires=" + expiry.toGMTString() + "; path=/";
	console.log(document.cookie);

}



function Consultar() {


	var ent = document.getElementById('selectRl').value;

	var url = "api/Busqueda?entidad=" + ent;



	if (ent == 1) {

		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");
				console.log(resultado);


				var tabla = '';
				tabla += '<table id="example" class="display" style="width:100%">';
				tabla += '<thead><tr><th>Numero</th><th>Fecha</th><th>Tipo</th><th>Monto</th></tr></thead>';



				var t = 1;
				var q = 2;
				var y = 3;
				var x = 4;

				var count = Number(resultado[0]);

				for (var i = 0; i < count; i++) {


					tabla += "<tr><td>" + resultado[t] + "</td><td>" + resultado[x] + "</td><td>" + resultado[y]  + "</td><td>" + resultado[q] + "</td>" + "</tr>";

					t += 4;
					q += 4;
					y += 4;
					x += 4;


				}
				tabla += '</table>';
				var d = document.getElementById('Con');
				d.innerHTML = tabla;


				$(document).ready(function () {
					var table = $('#example').DataTable({
						orderCellsTop: true,
						fixedHeader: true
					});

					//Creamos una fila en el head de la tabla y lo clonamos para cada columna
					$('#example thead tr').clone(true).appendTo('#example thead');

					$('#example thead tr:eq(1) th').each(function (i) {
						var title = $(this).text(); //es el nombre de la columna
						$(this).html('<input type="text" placeholder="Search...' + title + '" />');

						$('input', this).on('keyup change', function () {
							if (table.column(i).search() !== this.value) {
								table
									.column(i)
									.search(this.value)
									.draw();
							}
						});
					});
				});



			},
			error: function (data) {
				alert("Ocurrio un error en el API");
			},
		});

	} else if (ent == 2) {


		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");
				console.log(resultado);


				var tabla = '';
				tabla += '<table id="example2" class="display" style="width:100%">';
				tabla += '<thead><tr><th>Numero</th><th>Mensaje</th><th>Fecha</th></tr></thead>';



				var t = 1;
				var q = 2;
				var y = 3;



				var count = Number(resultado[0]);

				for (var i = 0; i < count; i++) {


					tabla += "<tr><td>" + resultado[t] + "</td><td>" + resultado[q] + "</td><td>" + resultado[y] + "</td>" + "</tr>";

					t += 3;
					q += 3;
					y += 3;



				}
				tabla += '</table>';
				console.log(tabla);
				var d = document.getElementById('Con');
				d.innerHTML = tabla;


				$(document).ready(function () {
					var table = $('#example2').DataTable({
						orderCellsTop: true,
						fixedHeader: true
					});

					//Creamos una fila en el head de la tabla y lo clonamos para cada columna
					$('#example2 thead tr').clone(true).appendTo('#example2 thead');

					$('#example2 thead tr:eq(1) th').each(function (i) {
						var title = $(this).text(); //es el nombre de la columna
						$(this).html('<input type="text" placeholder="Search...' + title + '" />');

						$('input', this).on('keyup change', function () {
							if (table.column(i).search() !== this.value) {
								table
									.column(i)
									.search(this.value)
									.draw();
							}
						});
					});
				});



			},
			error: function (data) {
				alert("Ocurrio un error en el API");
			},
		});


	} else if (ent == "3") {

		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");
				console.log(resultado);


				var tabla = '';
				tabla += '<table id="example3" class="display" style="width:100%">';
				tabla += '<thead><tr><th>Codigo</th><th>Descripcion</th><th>Fecha</th><th>Detalle</th></tr></thead>';



				var t = 1;
				var q = 2;
				var y = 3;
				var x = 4;

				var count = Number(resultado[0]);

				for (var i = 0; i < count; i++) {


					tabla += "<tr><td>" + resultado[t] + "</td><td>" + resultado[q] + "</td><td>" + resultado[y] + "</td><td>" + resultado[x] + "</td>" + "</tr>";

					t += 4;
					q += 4;
					y += 4;
					x += 4;


				}
				tabla += '</table>';
				console.log(tabla);
				var d = document.getElementById('Con');
				d.innerHTML = tabla;


				$(document).ready(function () {
					var table = $('#example3').DataTable({
						orderCellsTop: true,
						fixedHeader: true
					});

					//Creamos una fila en el head de la tabla y lo clonamos para cada columna
					$('#example3 thead tr').clone(true).appendTo('#example3 thead');

					$('#example3 thead tr:eq(1) th').each(function (i) {
						var title = $(this).text(); //es el nombre de la columna
						$(this).html('<input type="text" placeholder="Search...' + title + '" />');

						$('input', this).on('keyup change', function () {
							if (table.column(i).search() !== this.value) {
								table
									.column(i)
									.search(this.value)
									.draw();
							}
						});
					});
				});



			},
			error: function (data) {
				alert("Ocurrio un error en el API");
			},
		});

	} else if (ent == "4") {


		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");
				console.log(resultado);


				var tabla = '';
				tabla += '<table id="example" class="display" style="width:100%">';
				tabla += '<thead><tr><th>Nombre</th><th>Genero</th><th>Tipo</th><th>Fecha</th></tr></thead>';



				var t = 1;
				var q = 2;
				var y = 3;
				var o = 4;


				var count = Number(resultado[0]);

				for (var i = 0; i < count; i++) {


					tabla += "<tr><td>" + resultado[t] + "</td><td>" + resultado[q] + "</td><td>" + resultado[y] + "</td><td>" + resultado[o] + "</td>" + "</tr>";

					t += 4;
					q += 4;
					y += 4;
					o += 4;


				}
				tabla += '</table>';
				console.log(tabla);
				var d = document.getElementById('Con');
				d.innerHTML = tabla;


				$(document).ready(function () {
					var table = $('#example').DataTable({
						orderCellsTop: true,
						fixedHeader: true
					});

					//Creamos una fila en el head de la tabla y lo clonamos para cada columna
					$('#example thead tr').clone(true).appendTo('#example thead');

					$('#example thead tr:eq(1) th').each(function (i) {
						var title = $(this).text(); //es el nombre de la columna
						$(this).html('<input type="text" placeholder="Search...' + title + '" />');

						$('input', this).on('keyup change', function () {
							if (table.column(i).search() !== this.value) {
								table
									.column(i)
									.search(this.value)
									.draw();
							}
						});
					});
				});



			},
			error: function (data) {
				alert("Ocurrio un error en el API");
			},
		});

	}

}




function BuscarCliente() {


	var ent = document.getElementById('selectEntCons').value;

	var url = "api/BusquedaCli?entidad=" + ent;


	if (ent == 1) {

		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");
				console.log(resultado);


				var tabla = '';
				tabla += '<table id="example" class="display" style="width:100%">';
				tabla += '<thead><tr><th>Nombre</th><th>Genero</th><th>Year</th><th>Idioma</th><th>Autor</th><th>Editorial</th></tr></thead>';



				var t = 1;
				var q = 2;
				var y = 3;
				var x = 4;
				var o = 5;
				var n = 6;

				var count = Number(resultado[0]);

				for (var i = 0; i < count; i++) {


					tabla += "<tr><td>" + resultado[t] + "</td><td>" + resultado[q] + "</td><td>" + resultado[y] + "</td><td>" + resultado[x] + "</td><td>" + resultado[o] + "</td><td>" + resultado[n] + "</td>" + "</tr>";

					t += 6;
					q += 6;
					y += 6;
					x += 6;
					o += 6;
					n += 6;

				}
				tabla += '</table>';
				console.log(tabla);
				var d = document.getElementById('ConCLi');
				d.innerHTML = tabla;


				$(document).ready(function () {
					var table = $('#example').DataTable({
						orderCellsTop: true,
						fixedHeader: true
					});

					//Creamos una fila en el head de la tabla y lo clonamos para cada columna
					$('#example thead tr').clone(true).appendTo('#example thead');

					$('#example thead tr:eq(1) th').each(function (i) {
						var title = $(this).text(); //es el nombre de la columna
						$(this).html('<input type="text" placeholder="Search...' + title + '" />');

						$('input', this).on('keyup change', function () {
							if (table.column(i).search() !== this.value) {
								table
									.column(i)
									.search(this.value)
									.draw();
							}
						});
					});
				});



			},
			error: function (data) {
				alert("Ocurrio un error en el API");
			},
		});

	} else if (ent == 2) {


		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");
				console.log(resultado);


				var tabla = '';
				tabla += '<table id="example" class="display" style="width:100%">';
				tabla += '<thead><tr><th>Nombre</th><th>Genero</th><th>Year</th><th>Idioma</th><th>Actor</th></tr></thead>';



				var t = 1;
				var q = 2;
				var y = 3;
				var x = 4;
				var o = 5;


				var count = Number(resultado[0]);

				for (var i = 0; i < count; i++) {


					tabla += "<tr><td>" + resultado[t] + "</td><td>" + resultado[q] + "</td><td>" + resultado[y] + "</td><td>" + resultado[x] + "</td><td>" + resultado[o] + "</td>" + "</tr>";

					t += 5;
					q += 5;
					y += 5;
					x += 5;
					o += 5;


				}
				tabla += '</table>';
				console.log(tabla);
				var d = document.getElementById('ConCLi');
				d.innerHTML = tabla;


				$(document).ready(function () {
					var table = $('#example').DataTable({
						orderCellsTop: true,
						fixedHeader: true
					});

					//Creamos una fila en el head de la tabla y lo clonamos para cada columna
					$('#example thead tr').clone(true).appendTo('#example thead');

					$('#example thead tr:eq(1) th').each(function (i) {
						var title = $(this).text(); //es el nombre de la columna
						$(this).html('<input type="text" placeholder="Search...' + title + '" />');

						$('input', this).on('keyup change', function () {
							if (table.column(i).search() !== this.value) {
								table
									.column(i)
									.search(this.value)
									.draw();
							}
						});
					});
				});



			},
			error: function (data) {
				alert("Ocurrio un error en el API");
			},
		});


	} else if (ent == "3") {

		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");
				console.log(resultado);


				var tabla = '';
				tabla += '<table id="example" class="display" style="width:100%">';
				tabla += '<thead><tr><th>Nombre</th><th>Genero</th><th>Year</th><th>Idioma</th><th>Tipo Inter</th><th>Pais</th><th>Disquera</th><th>Disco</th></tr></thead>';



				var t = 1;
				var q = 2;
				var y = 3;
				var x = 4;
				var o = 5;
				var n = 6;
				var f = 7;
				var w = 8;

				var count = Number(resultado[0]);

				for (var i = 0; i < count; i++) {


					tabla += "<tr><td>" + resultado[t] + "</td><td>" + resultado[q] + "</td><td>" + resultado[y] + "</td><td>" + resultado[x] + "</td><td>" + resultado[o] + "</td><td>" + resultado[n] + "</td><td>" + resultado[f] + "</td><td>" +
						resultado[w] + "</td>" + "</tr>";

					t += 8;
					q += 8;
					y += 8;
					x += 8;
					o += 8;
					n += 8;
					f += 8;
					w += 8;

				}
				tabla += '</table>';
				console.log(tabla);
				var d = document.getElementById('ConCLi');
				d.innerHTML = tabla;


				$(document).ready(function () {
					var table = $('#example').DataTable({
						orderCellsTop: true,
						fixedHeader: true
					});

					//Creamos una fila en el head de la tabla y lo clonamos para cada columna
					$('#example thead tr').clone(true).appendTo('#example thead');

					$('#example thead tr:eq(1) th').each(function (i) {
						var title = $(this).text(); //es el nombre de la columna
						$(this).html('<input type="text" placeholder="Search...' + title + '" />');

						$('input', this).on('keyup change', function () {
							if (table.column(i).search() !== this.value) {
								table
									.column(i)
									.search(this.value)
									.draw();
							}
						});
					});
				});



			},
			error: function (data) {
				alert("Ocurrio un error en el API");
			},
		});

	} else if (ent == "4") {


		$.ajax({
			url: url,
			async: true,
			dataType: "json",
			type: 'GET',
			success: function (resultado) {
				console.log("Se obtuvo respuesta del API");
				console.log(resultado);


				var tabla = '';
				tabla += '<table id="example" class="display" style="width:100%">';
				tabla += '<thead><tr><th>Nombre</th><th>Genero</th><th>Tipo</th></tr></thead>';



				var t = 1;
				var q = 2;
				var y = 3;



				var count = Number(resultado[0]);

				for (var i = 0; i < count; i++) {


					tabla += "<tr><td>" + resultado[t] + "</td><td>" + resultado[q] +  "</td><td>" + resultado[y] + "</td>" + "</tr>";

					t += 3;
					q += 3;
					y += 3;



				}
				tabla += '</table>';
				console.log(tabla);
				var d = document.getElementById('ConCLi');
				d.innerHTML = tabla;


				$(document).ready(function () {
					var table = $('#example').DataTable({
						orderCellsTop: true,
						fixedHeader: true
					});

					//Creamos una fila en el head de la tabla y lo clonamos para cada columna
					$('#example thead tr').clone(true).appendTo('#example thead');

					$('#example thead tr:eq(1) th').each(function (i) {
						var title = $(this).text(); //es el nombre de la columna
						$(this).html('<input type="text" placeholder="Search...' + title + '" />');

						$('input', this).on('keyup change', function () {
							if (table.column(i).search() !== this.value) {
								table
									.column(i)
									.search(this.value)
									.draw();
							}
						});
					});
				});



			},
			error: function (data) {
				alert("Ocurrio un error en el API");
			},
		});

    }


}

function agregarCarritoLibro(seccion, idLib) {

	alert('Articulo Agregado al Carrito');

	var url = "api/VerLibros";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		data: { "idLib": idLib },
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);

			var sub = resultado[1].substr(0, 3);

			if (sub == 'LIB') {

				sub = 'Libro';
			} else if (sub == 'MUS') {

				sub = 'Musica';
			} else if (sub == 'PEL') {

				sub = 'Pelicula';
			}

			InsertarCarrito(resultado[1], resultado[2], resultado[10], sub, '5000');

		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}
function agregarCarritoCancion(seccion, idMus) {

	var url = "api/VerMusica";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		data: { "idMus": idMus },
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);

			var sub = resultado[1].substr(0, 3);

			if (sub == 'LIB') {

				sub = 'Libro';
			} else if (sub == 'MUS') {

				sub = 'Musica';
			} else if (sub == 'PEL') {

				sub = 'Pelicula';
			}

			InsertarCarrito(resultado[1], resultado[2], resultado[12], sub, '5000');
			alert('Articulo Agregado al Carrito');

		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}
function agregarCarritoPelicula(seccion, idPeli) {

	alert('Articulo Agregado al Carrito');


	var url = "api/VerPeliculas";

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		data: { "idPeli": idPeli },
		success: function (resultado) {
			console.log("Se obtuvo respuesta del API");
			console.log(resultado);

			var sub = resultado[1].substr(0, 3);

			if (sub == 'LIB') {

				sub = 'Libro';
			} else if (sub == 'MUS') {

				sub = 'Musica';
			} else if (sub == 'PEL') {

				sub = 'Pelicula';
			}


			InsertarCarrito(resultado[1], resultado[2], resultado[9], sub, '5000');

		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});
}


function InsertarCarrito(consecu, nombre, cate, tipo, precio) {


	var url = "api/Carrito?consec=" + consecu + "&nombre=" + nombre + "&tipo=" + tipo + "&categoria=" + cate + "&monto=" + precio;

	$.ajax({
		url: url,
		async: true,
		dataType: "json",
		type: 'GET',
		success: function (resultado) {
			console.log("Se agrego el elemento al carrito");

			var total = Number(resultado) * 5000;
			document.getElementById('Total').value = total;

		},
		error: function (data) {
			alert("Ocurrio un error en el API");
		},
	});

}