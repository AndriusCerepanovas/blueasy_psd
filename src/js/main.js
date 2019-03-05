// mobile burger

$(function() {
		var link = $('.m-menu-link');
		var close = $('.close-menu');
		var menu = $('.m-menu');
		link.on('click', function(event) {
			event.preventDefault();
			menu.toggleClass('m-menu__active');
		});
		close.on('click', function(event) {
			event.preventDefault();
			menu.toggleClass('m-menu__active');
		});
	});

//  sticky header

	window.onscroll = function() {myFunction()};
	  	var header = document.getElementById("myHeader");
	  	var sticky = header.offsetTop;
	  	function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// scroll height

$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 107 ) {
        $('.content').addClass('scrolled');
    }   
    if( scrolled <= 107 ) {     
        $('.content').removeClass('scrolled');
    }
});