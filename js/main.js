/*  JavaScript and jQuery for task  */
$(function () {
	/* for slider */
	var sliderOwl = $('.slider_owl');
	sliderOwl.owlCarousel({
		items: 1,
		loop: true,
	    margin:0,
	    dotsContainer: '.dots_slider',
	    dotClass: 'dot_slider',
	    dotsSpeed: 1000,
	    autoplaySpeed: 1000,
		autoplay: true,
		autoplayTimeout: 5000,
		animateOut: 'slideUnder',
		animateIn: 'slideInRight',
		onInitialized: startProgressBar,
		onTranslate: resetProgressBar,
		onTranslated: startProgressBar
	});
	function startProgressBar() {
		$('.slide_progress').css({
			width: '100%',
			transition: 'width 5000ms'
		});
	}
	function resetProgressBar() {
		$('.slide_progress').css({
			width: 0,
			transition: 'width 0s'
		});
	}
	$('.dot_slider').each(function(){
		$(this).children('span').text('0'+($(this).index()+1));
	});
	$('.next_button').click(function() {
	    sliderOwl.trigger('next.owl.carousel', [1000]);
	})
	$('.prev_button').click(function() {
	    sliderOwl.trigger('prev.owl.carousel', [1000]);
	});
	sliderOwl.on('translate.owl.carousel', function(event) {
	    $(this).find('.blok_info').slideUp(400);
	    $(this).find('.row_content .title span').slideUp(400);
	    $(this).find('.row_content .description span').slideUp(400);
	    $(this).find('.row_content .link_read span').slideUp(400);
	});
	sliderOwl.on('translated.owl.carousel', function(event) {
	    $(this).find('.blok_info').slideDown(200);
	    $(this).find('.row_content .title span').delay(200).slideDown(200);
	    $(this).find('.row_content .description span').delay(600).fadeIn(200);
	    $(this).find('.row_content .link_read span').delay(800).fadeIn(200);
	});

	/* for link active*/
	$('.nav_links a').on('click', function(){
		$('.nav_links a').removeClass('active');
		$(this).addClass('active');
	});
	$('.lang div').on('click', function(){
		$('.lang div').removeClass('active');
		$(this).addClass('active');
	});
	$('.menu_items a').on('click', function(){
		$('.menu_items a').removeClass('active');
		$(this).addClass('active');
	});

	/* for burger menu */
	$('.navbar_toggler').click(function() {
		$('.menu').fadeToggle(500).css('display', 'flex');
		$(this).toggleClass('open');
		$('.slide_progress_dots').toggleClass('under_bg');
	});
});