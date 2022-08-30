// event pada saat link di klik
$('.page-scroll').on('click', function(e) {
	
	// ambil isi href
	var tujuan = $(this).attr('href');

	// tangkap elemen ybs
	var elementujuan = $(tujuan);
	
	// pindahkan scroll
	$('html,body').animate({
		scrollTop:elementujuan.offset().top-50
	},1300, 'easeInBack'); //default linear dan swing

	e.preventDefault();

});




// Parallax
// About
$(window).on('load', function() {
	$('.pKiri, .pKanan').addClass('pMuncul');
});

// Galeri
$(window).scroll(function(){
	var jarakWindowScroll = $(this).scrollTop();
	
	// Jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px , '+jarakWindowScroll/5+'%)'
	});
	$('.jumbotron h1').css({
		'transform' : 'translate(0px , '+jarakWindowScroll/2.3+'%)'
	});
	$('.jumbotron p').css({
		'transform' : 'translate(0px , '+jarakWindowScroll/1.2+'%)'
	});


	// Galeri
	if (jarakWindowScroll > $('.galeri').offset().top-350){
		$('.galeri .thumbnail').each(function(i){
			setTimeout(function(){
				$('.galeri .thumbnail').eq(i).addClass('muncul')
			},200 * i);
		});
	}else if (jarakWindowScroll < $('.galeri').offset().top-350){
		$('.galeri .thumbnail').each(function(i){
			setTimeout(function(){
				$('.galeri .thumbnail').eq(i).removeClass('muncul')
			},200 * i);
		});
	}
})