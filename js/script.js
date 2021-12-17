// event pada saat link di klik
$('.page-scroll').on('click', function(e) {
	
	// ambil isi href
	var tujuan = $(this).attr('href');

	// tangkap elemen ybs
	var elementujuan = $(tujuan);
	
	// pindahkan scroll
	$('html,body').animate({
		scrollTop:elementujuan.offset().top-50
	},1300, 'easeOutBack'); //default linear dan swing

	e.preventDefault();

});