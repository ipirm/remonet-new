    var swiper = new Swiper('.inner-slider', {
    	navigation: {
    		nextEl: '.swiper-button-next',
    		prevEl: '.swiper-button-prev',
    	},
    	pagination: {
    		el: '.swiper-pagination',
    	},
    });

    $(".hamburger--slider").click(function () {
    	$(this).toggleClass("is-active");
    });
