$(function() {

	$("#my-menu").mmenu({
		extensions: ["theme-black", "effect-menu-slide", "pagedim-black"],
		navbar: {
			title: 'COFFEEID'
		}
	});

	var api = $('#my-menu').data('mmenu');
		api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	$('.carousel-gallery').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class= "fa fa-angle-left" </i>','<i class= "fa fa-angle-right" </i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		} 
	});  

$(window).scroll(function(){
  var num = $(this)[0].pageYOffset;

  
  if (num >= 70){
    $('#top-menu').addClass('top-menu-stick');
  } else {
    $('#top-menu').removeClass('top-menu-stick');
  }
})


$(window).innerWidth(function(){
	var wid = $(this)[0].pageXOffset;
	
	if (wid <= 768){
		$('.owl-nav').addClass('disabled');
	}else{
		$('.owl-nav').addClass('disabled').css('display', 'block');
	}
})
	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				// Done Functions
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
	
	
	 $(document).ready(function(){
    $(".anchor").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
    
    var ua = navigator.userAgent,
	event = (ua.match(/iPad/i) || ua.match(/iPhone/)) ? "touchstart" : "click";

	jQuery("body").on(event, '#btn', function(e) {
	    $('.item_describe').toggleClass('description-open');
    		if($('#desc-row').hasClass('desc-row-visible')){
    		   	setTimeout(function() {
    				$('.desc-row').removeClass('desc-row-visible');
    	}, 100);
    		}else{
    			setTimeout(function() {
    				$('.desc-row').addClass('desc-row-visible');
    	}, 800);
    		}
	});
});

jQuery(function($){
   $("#phone").mask("+7(999) 999-9999");
});

$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true,
  mainClass: 'mfp-fade',
  removalDelay: 300// Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

});


$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
})