//SCROLL LINKS DA PÁGINA
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
	
	//CONTEUDOS APARECENDO
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

	//SCROLL TO TOP
	$(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('a[href="#top"]').fadeIn();
        } else {
            $('a[href="#top"]').fadeOut();
        }
    });

    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

	//images trocam no hover ou click

	function showImg(){
		var imagem = $(this).attr('id');

		$(this).fadeIn('slow', function(){
			$(this).attr('src','images/' + imagem + '2.png');
		});
	};

	function offImg(){
		var imagem = $(this).attr('id');

		$(this).attr('src','images/' + imagem + '.png');
	};
	
	$('.troca-imagem').hover( showImg, offImg);

});

var geocoder;
var map;
var marker;

  function initialize() {
    var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
    var options = {
        zoom: 5,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);

    geocoder = new google.maps.Geocoder();

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
    });

    marker.setPosition(latlng);
}

// verifica se o navegador tem suporte a geolocalização
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){ // callback de sucesso
        // ajusta a posição do marker para a localização do usuário
        marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    }, 
    function(error){ // callback de erro
       alert('Erro ao obter localização!');
       console.log('Erro ao obter localização.', error);
    });
} else {
    console.log('Navegador não suporta Geolocalização!');
}

$(document).ready(function () {
    initialize();
});
