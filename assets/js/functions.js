// JavaScript Document


// mobile navigation
$(function() {
    $('.click-nav > ul').toggleClass('menu-items');
    $('.menu-items').hide();
    $('.hamburger').click(function(e) {
        $('.menu-items').slideToggle(400);
        $('.clicker').toggleClass('active');
        e.stopPropagation();
    });
    $(document).click(function() {
        if ($('.menu-items').is(':visible')) {
            $('.menu-items', this).slideUp();
            $('.clicker').removeClass('active');
        }
    });
});

// work boxes
$('.work-box').each(function(i){

    setTimeout(function(){
        $('.work-box').eq(i).addClass('animated bounce');
    }, 1500 * (i+1));
});

$('.events img, .events p').each(function(i){

    setTimeout(function(){
        $('.events img, .events p').eq(i).addClass('is-showing');
    }, 250 * (i+1));
});

// filters
$(function () {
		
	var PfilterList = {
		init: function () {
			// MixItUp Plugin - http://mixitup.io
			$('#project-list').mixItUp({
				selectors: {
  			  target: '.project',
  			  filter: '.Pfilter'	
  		  },
  		  load: {
    		  filter: '.Pall'
    		}     
			});								
		}
	};
    
    var BfilterList = {
		init: function () {
			// MixItUp Plugin - http://mixitup.io
			$('#blog-list').mixItUp({
				selectors: {
  			  target: '.article',
  			  filter: '.Bfilter'	
  		  },
  		  load: {
    		  filter: '.Ball'
    		}     
			});								
		}
	};
    
    var VfilterList = {
		init: function () {
			// MixItUp Plugin - http://mixitup.io
			$('#video-list').mixItUp({
				selectors: {
  			  target: '.video',
  			  filter: '.Vfilter'	
  		  },
  		  load: {
    		  filter: '.Vall'
    		}     
			});								
		}
	};
	
	PfilterList.init();
    BfilterList.init();
    VfilterList.init();
	
});

/*
setInterval(function() {
  var randNum = Math.floor(Math.random() * $('.work-box img').length) +1
  $('.work-box img').eq(randNum).addClass('animated tada');
  setTimeout(function() {
    $('.work-box img').removeClass('animated tada');
  }, 2000);
}, 4000);
*/

// social icons
var soc = $('.social-icons');

if (soc.length > 0) {
  $(window).scroll(
    function() {
      var wScroll = $(this).scrollTop();
      // social icons
      if (wScroll > $('.social-icons').offset().top - ($(window).height() / 1.2)) {
        $('.social-icons img, .social-icons p').each(function(i) {
          setTimeout(function() {
            $('.social-icons img, .social-icons p').eq(i).addClass('is-showing');
          }, 250 * (i + 1));
        });
      }
    });
}