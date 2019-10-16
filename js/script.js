$( document ).ready(function() {
	$('.form-recommended input').on('change', function(){
		$('.form-recommended').toggleClass('active');
		$('.phone').slideToggle();
	});
	
});