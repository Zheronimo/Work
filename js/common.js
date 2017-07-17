$(document).ready(function() {
	//Slick
	$('.slick').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 750,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
	//Popup
	// $('.popup').magnificPopup({type:'image'});
	$('.popup_form').magnificPopup();

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		var ths = $(this)
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				//save instance in magnifigPopup variable
				magnificPopup.close();
				//Close popup that is currently opened
				ths.trigger('reset');
			}, 1000);
		});
		return false;
	});
});
$(window).load(function() {
	//Animate
	$(".header .container h1, .header .container p").animated("fadeInDown", "fadeOut");	
	$(".header .container a").animated("shake", "fadeOut");
	$(".about_us .container p").animated("bounceInLeft", "fadeOut");
	$(".services .container p").animated("bounceInRight", "fadeOut");
	// $(".header_title p").animated("fadeInUp", "fadeOut");
	// $(".header .header_discounts").animated("flipInY", "fadeOut");
	// $(".about_item").animated("fadeInRight", "fadeOutRight");
	// $(".about .form").animated("zoomInRight", "fadeOut");
	// $(".form").animated("zoomInRight", "zoomInRight");
	// $(".carousel_item .img_wrap img").animated("shake", "fadeOut");
	// $(".request p").animated("fadeInUp", "fadeOut");
	// $("footer").animated("fadeInUp", "fadeOut");


});