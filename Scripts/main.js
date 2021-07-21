
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

    //MOSTRAR SUBMENU
    $('.navegacion .menu .item-submenu > .item-sub2menu a').click(function(){
        var position2Menu = $(this).parent().attr('item-sub2menu'); //Llamamos al item submenu y el atributo que creamos
        console.log(position2Menu); 
        
        $('.item-sub2menu[item-submenu='+position2Menu+'] .sub2menu').css({'left':'0px'}); // Mostramos El submenu correspondiente

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

function mostrarAgregarArticulo(seccion) {

	console.log("Mostrando seccion " + seccion)

	$('.secciones article').hide();
	$(seccion).show();
}



