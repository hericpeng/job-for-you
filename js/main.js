$(document).ready(function(){
	$('.log').click(function(e){
		$('#loginModal').toggleClass('dis');
		$('#signModal').removeClass('dis');
		if($('#signModal').hasClass('dis')==true||$('#loginModal').hasClass('dis')==true){
			$('body').addClass('dark');
		}else{
			$('body').removeClass('dark');
		}
	});

	$('.sig').click(function(e){
		$('#signModal').toggleClass('dis');
		$('#loginModal').removeClass('dis');
		if($('#signModal').hasClass('dis')==true||$('#loginModal').hasClass('dis')==true){
			$('body').addClass('dark');
		}else{
			$('body').removeClass('dark');
		}
	});

	$('.close').click(function(e){
		$('#loginModal, #signModal').removeClass('dis');
		$('body').removeClass('dark');
	});
});


	

