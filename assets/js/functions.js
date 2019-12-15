// JavaScript Document

(function() {
  setRandomPhoto();

  setInterval(() => {
    setRandomPhoto();
  }, 2500);
})();

// RANDOM PHOTO

function setRandomPhoto() {
  let num = Math.floor(Math.random() * 6) + 1;
  document.getElementById (
    "profileImg"
  ).src = `assets/images/sophie${num}.jpg`;
}

// ANIMATED TEXT
$(function(){
    $(".element").typed({
	    strings: ["^2000designing and prototyping websites^2000", "^2000coding websites using HTML, CSS and JavaScript^2000", "^2000filming and editing videos^2000"],
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
