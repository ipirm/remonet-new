    var swiper = new Swiper('.inner-slider', {
    	navigation: {
    		nextEl: '.swiper-button-next',
    		prevEl: '.swiper-button-prev',
    	},
    	pagination: {
    		el: '.swiper-pagination',
    	},
    });


$( ".hamburger--slider" ).click(function() {
				
				 
  $( ".hader-nav__menu" ).slideToggle( "slow", function() {
  });
});
			$( ".mobile-menu" ).click(function() {
  $('.desktop-menu').removeClass( "is-active" );
});	
		$( ".desktop-menu" ).click(function() {
  $('.mobile-menu').addClass( "is-active" );
});	
