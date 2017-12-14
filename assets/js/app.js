
/* HEADER ================================*/
$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(3000);
   }, 3000);
});

/*BUSCADOR*/
var cont = $('#container');

   $('#categorias').on('change', function() {
     var selection = $('#categorias').val();
     //cont.text(selection);
     if( selection === "Chilena") {
     cont.html('<p><a href="https://santiago.restorando.cl/restaurantes-cocina-chilena">Los mejores Restaurantes de comida Típica Chilena</a></p><img src="assets/img/busqueda-chilena.jpg" width="30%"/>');
     }
     if( selection === "Peruana") {
     cont.html('<p><a href="https://santiago.restorando.cl/restaurantes-cocina-peruana">Los mejores Restaurantes de comida Peruana</a></p><img src="assets/img/busqueda-peruana.jpg" width="30%"/>');
        }
     if( selection === "Italiana") {
     cont.html('<p><a href="https://santiago.restorando.cl/restaurantes-cocina-italiana">Los mejores Restaurantes de comida Italiana</a></p><img src="assets/img/busqueda-italiana.jpg" width="30%"/>');
     }
     if( selection === "Japonesa") {
     cont.html('<p><a href="https://santiago.restorando.cl/restaurantes-cocina-japonesa">Los mejores Restaurantes de comida Japonesa</a></p><img src="assets/img/busqueda-japonesa.jpg" width="30%"/>');
     }
     if( selection === "Naturista") {
     cont.html('<p><a href="https://www.tripadvisor.cl/Restaurants-g294305-zfz10665-Santiago_Santiago_Metropolitan_Region.html">Los mejores Restaurantes de comida Vegetariana</a></p><img src="assets/img/busqueda-naturista.jpg" width="30%"/>');
     }
})

/*FILTRANDO PRODUCTOS*/

$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});
