$(document).ready(function(){
    $(".scrollar").on('click', function(event) {

      event.preventDefault();

      var hash = this.hash;
  
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
        
      });
    });
  });

var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

$(document).ready(function() {
	
	var $target2 = $('.fadeRight'),
		$target = $('.fadeLeft'),
			
		 	animationClass2 = 'animate__fadeInRight',

			animationClass = 'animate__fadeInLeft',

			windowHeight = $(window).height(),

			offset = windowHeight - (windowHeight / 4);

	function animeScroll() {
		
		var documentTop = $(document).scrollTop();
		
		$target.each(function() {
			
			if (documentTop > boxTop(this) - offset) {
				
				$(this).addClass(animationClass);
				$(this).css('visibility','visible')
			}
		});
	}
	
	function animeScroll2() {
		
		var documentTop = $(document).scrollTop();
		
		$target2.each(function() {
			
			if (documentTop > boxTop(this) - offset) {
				
				$(this).addClass(animationClass2);
				$(this).css('visibility','visible')
			}
		});
	}

	animeScroll();
	animeScroll2();
	
	$(document).scroll(function() {
		
		setTimeout(function() {
			animeScroll()
			animeScroll2()
		}, 150);
	});
});