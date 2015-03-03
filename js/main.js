var inicio = 0;
var grupos = 9;
var selector = Math.ceil((grupos/9));
$( document ).ready(function() {

	var array = {	
	"producto":[
				
				{
					"id":"0",
					"nombre":"Lampara de luz blanca",
					"descripción":"Lampara de cocina luz blanca",
					"precio": 8000,
					"imagen": "img/leche.jpg"
				},
				{
					"id":"1",
					"nombre":"Lampara2",
					"descripción":"Lampara de sala con ventilador",
					"precio": 15000,
					"imagen": "img/pan.jpg"
				},
				{
					"id":"2",
					"nombre":"Lampara3",
					"descripción":"Lampara de cocina luz blanca",
					"precio": 12000,
					"imagen": "img/mayonesa.jpg"
				},
				{
					"id":"3",
					"nombre":"Lampara4",
					"descripción":"Lampara resistente al agua para exteriores",
					"precio": 11200,
					"imagen": "img/avena.jpg"
				},
				{
					"id":"4",
					"nombre":"Lampara5",
					"descripción":"Lampara de sala con ventilador",
					"precio": 12800,
					"imagen": "img/leche.jpg"
				},
				{
					"id":"5",
					"nombre":"Lampara6",
					"descripción":"Lampara de cocina luz blanca",
					"precio": 21500,
					"imagen": "img/pan.jpg"
				},
				{
					"id":"6",
					"nombre":"Lampara7",
					"descripción":"Lampara de sala con ventilador",
					"precio": 12000,
					"imagen": "img/mayonesa.jpg"
				},
				{
					"id":"7",
					"nombre":"Lampara8",
					"descripción":"Lampara resistente al agua para exteriores",
					"precio": 13200,
					"imagen": "img/avena.jpg"
				},
				{
					"id":"8",
					"nombre":"Lampara9",
					"descripción":"Lampara de cocina luz blanca",
					"precio": 13800,
					"imagen": "img/leche.jpg"
				},
				{
					"id":"9",
					"nombre":"Lampara10",
					"descripción":"Lampara de sala con ventilador",
					"precio": 32500,
					"imagen": "img/pan.jpg"
				},
				{
					"id":"10",
					"nombre":"Lampara11",
					"descripción":"Lampara de cocina luz blanca",
					"precio": 41000,
					"imagen": "img/mayonesa.jpg"
				},
				{
					"id":"11",
					"nombre":"Lampara12",
					"descripción":"Lampara resistente al agua para exteriores",
					"precio": 21200,
					"imagen": "img/avena.jpg"
				},
				{
					"id":"12",
					"nombre":"Lampara13",
					"descripción":"Lampara de sala con ventilador",
					"precio": 8100,
					"imagen": "img/leche.jpg"
				},
				{
					"id":"13",
					"nombre":"Lampara14",
					"descripción":"Lampara de cocina luz blanca",
					"precio": 5300,
					"imagen": "img/pan.jpg"
				},
				{
					"id":"14",
					"nombre":"Lampara15",
					"descripción":"Lampara de sala con ventilador",
					"precio": 11000,
					"imagen": "img/mayonesa.jpg"
				},
				{
					"id":"15",
					"nombre":"Lampara16",
					"descripción":"Lampara resistente al agua para exteriores",
					"precio": 31200,
					"imagen": "img/avena.jpg"
				},
				{
					"id":"16",
					"nombre":"Lampara17",
					"descripción":"Lampara resistente al agua para exteriores",
					"precio": 13200,
					"imagen": "img/avena.jpg"
				},
				{
					"id":"17",
					"nombre":"Lampara18",
					"descripción":"Lampara de cocina luz blanca",
					"precio": 13800,
					"imagen": "img/leche.jpg"
				},
				{
					"id":"18",
					"nombre":"Lampara19",
					"descripción":"Lampara de sala con ventilador",
					"precio": 32500,
					"imagen": "img/pan.jpg"
				},
				{
					"id":"19",
					"nombre":"Lampara20",
					"descripción":"Lampara de cocina luz blanca",
					"precio": 41000,
					"imagen": "img/mayonesa.jpg"
				},
				{
					"id":"20",
					"nombre":"Lampara21",
					"descripción":"Lampara resistente al agua para exteriores",
					"precio": 21200,
					"imagen": "img/avena.jpg"
				},
				{
					"id":"21",
					"nombre":"Lampara22",
					"descripción":"Lampara de sala con ventilador",
					"precio": 8100,
					"imagen": "img/leche.jpg"
				},
				{
					"id":"22",
					"nombre":"Lampara23",
					"descripción":"Lampara de cocina luz blanca",
					"precio": 5300,
					"imagen": "img/pan.jpg"
				},
				{
					"id":"23",
					"nombre":"Lampara24",
					"descripción":"Lampara de sala con ventilador",
					"precio": 11000,
					"imagen": "img/mayonesa.jpg"
				},
				{
					"id":"24",
					"nombre":"Lampara25",
					"descripción":"Lampara resistente al agua para exteriores",
					"precio": 31200,
					"imagen": "img/avena.jpg"
				}

			]
};

	dibujarProducto(array);
	
	
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
			izq +='<a  class="prod" href="#" id="' + producto.producto[i].id +'">'+ '<img  src ="'+ producto.producto[i].imagen + '"/>' + '<h2 >' + producto.producto[i].nombre  + '</h2> <h3> Precio: c' + producto.producto[i].precio + '</h3><i></i></a>' ;
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
		var pag = ".paginacion :nth-child("+(selector + 1)+")";
		$(pag).addClass('seleccionado');

	}

	$("body").on("click",'.prod', function(){
		var numero = Number($(this).attr('id'));
		event.preventDefault();
		$(".prod").removeClass('seleccionado');
		$(this).addClass('seleccionado');
		$(".prod i").hide();
		$(this).children('i').show();
		$(".display").hide();
		$(this).parent().next(".display").show().html(dibujaProducto(numero));
	});


	$("body").on("click",'#adelante-producto', function(){
	event.preventDefault();
		if(grupos < array.producto.length){
			inicio+=9;
			grupos+=9;
			selector = Math.ceil((grupos/9));
			console.log("adelante");
			$(".display").hide();
			dibujarProducto(array);
		}
		
	});

	$("body").on("click",'#atras-producto', function(){
	event.preventDefault();
		if(inicio > 0){
			inicio-=9;
			grupos-=9;
			selector = Math.ceil((grupos/9));
			console.log("adelante");
			$(".display").hide();
			dibujarProducto(array);
		}
		
	});

	function dibujaProducto(numero){
		
		var der = '<img src ="'+ array.producto[numero].imagen + '"/><div class="producto-info"><h2>' + array.producto[numero].nombre  + '</h2><h3 > Precio: c' + array.producto[numero].precio + '</h3><p> <span >Descripción: </span>' + array.producto[numero].descripción  +'</p>'+'<a href="#">COMPRAR<a/><div> ' ;
		return der;
	}
});
