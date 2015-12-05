// JavaScript Document
$(function() {
  setInterval(function(){overlayTada()}, 4000);
});

function overlayTada(){
  var randNum = Math.floor(Math.random() * $('.project-unit, .blog-unit').length) +1
  $('.project-unit, .blog-unit').eq(randNum).addClass('is-emph')
    .siblings().removeClass('is-emph');
}

//testimonials slider buttons
  $('.videos-unit').first().addClass('active-video');
  $('.videos-controls span').first().addClass('active-controls');

  $('.videos-controls span').click(function() {
      var $this = $(this),
          $siblings = $this.parent().children(),
          position = $siblings.index($this);

      $('.videos-unit').removeClass('active-video').eq(position).addClass('active-video');
      $siblings.removeClass('active-video');
      $this.addClass('active-video');

      $('.videos-controls span').removeClass('active-video').eq(position).addClass('active-controls');
      $siblings.removeClass('active-controls');
      $this.addClass('active-controls');
  });

$(window).scroll(function() {
  startAbout();
  startPortfolio();
  startYouTube();
  startVine();
  startSoundCloud();
  startBlog();
  startContact();
});

function startAbout(){
  var wScroll = $(window).scrollTop();

  if($('.about').offset().top - $(window).height()/1 < wScroll) {
    $('.about-thumbnails img').each(function(i){
      setTimeout(function(){
        $('.about-thumbnails img').eq(i).addClass('is-visible');
      }, 200 * i);
    });
  }
}

function startPortfolio(){
  var wScroll = $(window).scrollTop();

  if($('.portfolio').offset().top - $(window).height()/2 < wScroll) {
    $('.project-unit').each(function(i){
      setTimeout(function(){
        $('.project-unit').eq(i).addClass('is-visible');
      }, 300 * i);
    });
  }
}

function startYouTube(){
  var wScroll = $(window).scrollTop();

  if($('.youtube').offset().top - $(window).height()/2 < wScroll) {
    $('.videos-unit').each(function(i){
      setTimeout(function(){
        $('.videos-unit').eq(i).addClass('is-visible');
      }, 300 * i);
    });
  }
}

function startVine(){
  var wScroll = $(window).scrollTop();

  if($('.vine').offset().top - $(window).height()/2 < wScroll) {
    $('.vine-thumbnails').each(function(i){
      setTimeout(function(){
        $('.vine-thumbnails').eq(i).addClass('is-visible');
      }, 400 * i);
    });
  }
}

function startSoundCloud(){
  var wScroll = $(window).scrollTop();

  if($('.soundcloud').offset().top - $(window).height()/2 < wScroll) {
    $('.soundcloud-thumbnails').each(function(i){
      setTimeout(function(){
        $('.soundcloud-thumbnails').eq(i).addClass('is-visible');
      }, 400 * i);
    });
  }
}

function startBlog(){
  var wScroll = $(window).scrollTop();

  if($('.blog').offset().top - $(window).height()/2 < wScroll) {
    $('.blog-unit').each(function(i){
      setTimeout(function(){
        $('.blog-unit').eq(i).addClass('is-visible');
      }, 300 * i);
    });
  }
}

function startContact(){
  var wScroll = $(window).scrollTop();

  if($('.contact').offset().top - $(window).height()/1 < wScroll) {
    $('.contact h3').each(function(i){
      setTimeout(function(){
        $('.contact h3').eq(i).addClass('is-visible');
      }, 300 * i);
    });
  }
}
