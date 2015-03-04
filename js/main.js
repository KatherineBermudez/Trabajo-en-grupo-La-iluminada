var inicio = 0;
var grupos = 9;
var selector = Math.ceil((grupos/9));
$( document ).ready(function() {

	var productos = {	
	"producto":[
				
				{
					"id":"0",
					"nombre":"Lampara de luz blanca",
					"descripción":"Lampara de cocina luz blanca",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],

					"precio": 8000,
					"imagen": "img/lampara2.jpg"
				},
				{
					"id":"1",
					"nombre":"Lampara2",
					"descripción":"Lampara de sala con ventilador",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 15000,
					"imagen": "img/lampara3.jpg"
				},
				{
					"id":"2",
					"nombre":"Lampara3",
					"descripción":"Lampara de cocina luz blanca",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 12000,
					"imagen": "img/lampara4.jpg"
				},
				{
					"id":"3",
					"nombre":"Lampara4",
					"descripción":"Lampara resistente al agua para exteriores",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 11200,
					"imagen": "img/lampara5.jpg"
				},
				{
					"id":"4",
					"nombre":"Lampara5",
					"descripción":"Lampara de sala con ventilador",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 12800,
					"imagen": "img/lampara6.jpg"
				},
				{
					"id":"5",
					"nombre":"Lampara6",
					"descripción":"Lampara de cocina luz blanca",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 21500,
					"imagen": "img/lampara7.jpg"
				},
				{
					"id":"6",
					"nombre":"Lampara7",
					"descripción":"Lampara de sala con ventilador",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 12000,
					"imagen": "img/lampara2.jpg"
				},
				{
					"id":"7",
					"nombre":"Lampara8",
					"descripción":"Lampara resistente al agua para exteriores",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 13200,
					"imagen": "img/lampara3.jpg"
				},
				{
					"id":"8",
					"nombre":"Lampara9",
					"descripción":"Lampara de cocina luz blanca",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 13800,
					"imagen": "img/lampara4.jpg"
				},
				{
					"id":"9",
					"nombre":"Lampara10",
					"descripción":"Lampara de sala con ventilador",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 32500,
					"imagen": "img/lampara5.jpg"
				},
				{
					"id":"10",
					"nombre":"Lampara11",
					"descripción":"Lampara de cocina luz blanca",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 41000,
					"imagen": "img/lampara6.jpg"
				},
				{
					"id":"11",
					"nombre":"Lampara12",
					"descripción":"Lampara resistente al agua para exteriores",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 21200,
					"imagen": "img/lampara7.jpg"
				},
				{
					"id":"12",
					"nombre":"Lampara13",
					"descripción":"Lampara de sala con ventilador",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 8100,
					"imagen": "img/lampara2.jpg"
				},
				{
					"id":"13",
					"nombre":"Lampara14",
					"descripción":"Lampara de cocina luz blanca",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 5300,
					"imagen": "img/lampara3.jpg"
				},
				{
					"id":"14",
					"nombre":"Lampara15",
					"descripción":"Lampara de sala con ventilador",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 11000,
					"imagen": "img/lampara4.jpg"
				},
				{
					"id":"15",
					"nombre":"Lampara16",
					"descripción":"Lampara resistente al agua para exteriores",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 31200,
					"imagen": "img/lampara5.jpg"
				},
				{
					"id":"16",
					"nombre":"Lampara17",
					"descripción":"Lampara resistente al agua para exteriores",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 13200,
					"imagen": "img/lampara6.jpg"
				},
				{
					"id":"17",
					"nombre":"Lampara18",
					"descripción":"Lampara de cocina luz blanca",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 13800,
					"imagen": "img/lampara7.jpg"
				},
				{
					"id":"18",
					"nombre":"Lampara19",
					"descripción":"Lampara de sala con ventilador",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 32500,
					"imagen": "img/lampara2.jpg"
				},
				{
					"id":"19",
					"nombre":"Lampara20",
					"descripción":"Lampara de cocina luz blanca",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 41000,
					"imagen": "img/lampara6.jpg"
				},
				{
					"id":"20",
					"nombre":"Lampara21",
					"descripción":"Lampara resistente al agua para exteriores",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 21200,
					"imagen": "img/lampara3.jpg"
				},
				{
					"id":"21",
					"nombre":"Lampara22",
					"descripción":"Lampara de sala con ventilador",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 8100,
					"imagen": "img/lampara4.jpg"
				},
				{
					"id":"22",
					"nombre":"Lampara23",
					"descripción":"Lampara de cocina luz blanca",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 5300,
					"imagen": "img/lampara5.jpg"
				},
				{
					"id":"23",
					"nombre":"Lampara24",
					"descripción":"Lampara de sala con ventilador",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 11000,
					"imagen": "img/lampara6.jpg"
				},
				{
					"id":"24",
					"nombre":"Lampara25",
					"descripción":"Lampara resistente al agua para exteriores",
					"caracteristicas":[
						{
							"0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"1":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"3":"Fusce convallis nulla magna, nec ultricies sapien commodo ac.",
							"4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."

						}
					],
					"precio": 31200,
					"imagen": "img/lampara7.jpg"
				}

			]
};

	dibujarProducto(productos);
	
	
	function dibujarProducto(producto){
		document.getElementById("primer-producto").innerHTML = "";
		document.getElementById("segundo-producto").innerHTML = "";
		document.getElementById("tercer-producto").innerHTML = "";
		var izq="";
		var grupos1 = 9
		console.log(inicio);
		var paginas = Math.ceil(producto.producto.length / grupos1);
		console.log( (Math.ceil(grupos/9)) ,producto.producto.length , paginas);
		var paginacion = '<a href="#" class="pagina" id="atras-producto">Anterior</a>';

		for (var i = inicio ; i < grupos; i++) {
			if(i >= producto.producto.length){
				break;
			}
			console.log(i);
			izq +='<a  class="prod" href="#" data-producto="' + producto.producto[i].id +'">'+ '<img  src ="'+ producto.producto[i].imagen + '"/>' + '<h2 >' + producto.producto[i].nombre  + '</h2> <h3> Precio: c' + producto.producto[i].precio + '</h3><i></i></a>' ;
			if(i === (grupos-7)){
				document.getElementById("primer-producto").innerHTML = izq;
				izq = '';
			}
			if(i === (grupos-4)){
				document.getElementById("segundo-producto").innerHTML = izq;
				izq = '';
			}

			if(i === (grupos-1)){
				document.getElementById("tercer-producto").innerHTML = izq;
				izq = '';
			}

			
		}	
		for (var i = 1 ; i <= paginas; i++) {
			paginacion+= '<a href="#" class="pagina">'+ i + '</a>'
		}
		paginacion+= '<a href="#" class="pagina" id="adelante-producto">Siguiente</a>';
		document.getElementById("paginacion-productos").innerHTML = paginacion;
		console.log(selector);
		var pag = ".paginacion-productos :nth-child("+(selector + 1)+")";
		$(pag).addClass('seleccionado');

	}

	$("body").on("click",'.prod', function(){
		var numero = Number($(this).attr('data-producto'));
		event.preventDefault();
		$(".prod").removeClass('seleccionado');
		$(this).addClass('seleccionado');
		$(".prod i").hide();
		$(this).children('i').show();
		$(".display-producto").hide();
		$(this).parent().next(".display-producto").show().html(dibujaProducto(numero));
	});


	$("body").on("click",'#adelante-producto', function(){
	event.preventDefault();
		if(grupos < productos.producto.length){
			inicio+=9;
			grupos+=9;
			selector = Math.ceil((grupos/9));
			console.log("adelante");
			$(".display-producto").hide();
			dibujarProducto(productos);
		}
		
	});

	$("body").on("click",'#atras-producto', function(){
	event.preventDefault();
		if(inicio > 0){
			inicio-=9;
			grupos-=9;
			selector = Math.ceil((grupos/9));
			console.log("adelante");
			$(".display-producto").hide();
			dibujarProducto(productos);
		}
		
	});

	function dibujaProducto(numero){
		
		var der = '<img src ="'+ productos.producto[numero].imagen + '"/><div class="producto-info"><h2>' + productos.producto[numero].nombre  + '</h2><h3 > Precio: c' + productos.producto[numero].precio + '</h3><p> <span >Descripción: </span>' + productos.producto[numero].descripción  +'</p>'+'<a href="#" class="comprar">COMPRAR<a/><div> ' ;
		return der;
	}



/*  desarrollo de proyectos-------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------*/


var proyecto = {	
	"proyecto":[
				
				{
					"id":"0",
					"titulo":"Iluminacion del Museo de Arte",
					"detalle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum, massa a bibendum rhoncus, ligula augue ullamcorper turpis, nec rhoncus sem leo sit amet libero. Sed ex elit, interdum in elit sit amet, efficitur aliquet nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum, massa a bibendum rhoncus, ligula augue ullamcorper turpis, nec rhoncus sem leo sit amet libero. Sed ex elit, interdum in elit sit amet, efficitur aliquet nisi.",
					"cliente": "Museo de Arte",
					"imagen": "img/proyecto1.jpg"
				},
				{
					"id":"1",
					"titulo":"Lampara Principal de la Casa Precidencial",
					"detalle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum, massa a bibendum rhoncus, ligula augue ullamcorper turpis, nec rhoncus sem leo sit amet libero. Sed ex elit, interdum in elit sit amet, efficitur aliquet nisi.",
					"cliente": "Casa Precidencial",
					"imagen": "img/proyecto2.jpg"
				},
				{
					"id":"2",
					"titulo":"Lámpara principal Museo Dorado",
					"detalle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum, massa a bibendum rhoncus, ligula augue ullamcorper turpis, nec rhoncus sem leo sit amet libero. Sed ex elit, interdum in elit sit amet, efficitur aliquet nisi.",
					"cliente": "Museo Dorado",
					"imagen": "img/proyecto3.jpg"
				},
				{
					"id":"3",
					"titulo":"Iluminacion Expoempresa 2012",
					"detalle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum, massa a bibendum rhoncus, ligula augue ullamcorper turpis, nec rhoncus sem leo sit amet libero. Sed ex elit, interdum in elit sit amet, efficitur aliquet nisi.",
					"cliente": "Expoempresa",
					"imagen": "img/proyecto4.jpg"
				},
				{
					"id":"4",
					"titulo":"Lampara principal del Museo Dorado",
					"detalle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum, massa a bibendum rhoncus, ligula augue ullamcorper turpis, nec rhoncus sem leo sit amet libero. Sed ex elit, interdum in elit sit amet, efficitur aliquet nisi.",
					"cliente": "Museo Dorado",
					"imagen": "img/proyecto5.jpg"
				}

			]
};

	dibujarProyecto(proyecto);
	
	
	function dibujarProyecto(proyecto){
		document.getElementById("primer-proyecto").innerHTML = "";
		var izq='';
		console.log(inicio);
		;

		for (var i = 0 ; i < 3; i++) {
			
			console.log(i);
			izq +='<a  class="proy" href="#" data-proyecto="' + proyecto.proyecto[i].id +'">' + '<h2 >' + proyecto.proyecto[i].titulo  + '</h2><i></i><img  src ="'+ proyecto.proyecto[i].imagen + '"/></a>' ;
				
		}
				document.getElementById("primer-proyecto").innerHTML = izq;
				izq = '';

	}

	$("body").on("click",'.proy', function(){
		var numero = Number($(this).attr('data-proyecto'));
		event.preventDefault();
		$(".proy").removeClass('blanco');
		$(this).addClass('blanco');
		$(".proy i").hide();
		$(this).children('i').show();
		$(".display-proyecto").hide();
		$(this).parent().parent().children(".display-proyecto").show().html(dibujaproyecto(numero));
	});


	function dibujaproyecto(numero){
		
		var der = '<img src ="'+ proyecto.proyecto[numero].imagen + '"/><div class="proyecto-info"><h2>' + proyecto.proyecto[numero].titulo  + '</h2><h3 > Cliente: ' + proyecto.proyecto[numero].cliente + '</h3></div><p> <span >Descripción: </span>' + proyecto.proyecto[numero].detalle  +'</p>';
		return der;
	}


});







