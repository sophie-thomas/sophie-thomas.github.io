// JavaScript Document

//type text
$(function(){
    $(".element").typed({
	    strings: ["^1000thinking^1000", "^1000creating^1000", "^1000designing^1000", "^1000prototyping^1000", "^1000designing^1000"],
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