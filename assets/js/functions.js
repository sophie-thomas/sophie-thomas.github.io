// JavaScript Document

//type text
$(function(){
    $(".element").typed({
	    strings: ["^1000creating awesome things^1000", "^1000writing articles^1000", "^1000producing videos^1000"],
	    // typing speed
        typeSpeed: 0,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
	});
});

//dribbble shots
// client access token
$.jribbble.setToken('ba4ce5db8c7143ac75657253d0f98488ab36d5de8efa4b94d2133d07160efd5c');

$.jribbble.users('sophiethomas').shots({per_page: 36}).then(function(shots) {
  var html = [];
  
  shots.forEach(function(shot) {
    html.push('<li class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });
  
  $('.shots').html(html.join(''));
});