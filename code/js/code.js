var draw = SVG('circle').size('100%', '100%');
var circ = draw.circle('100%', '100%').attr({ fill: '#fff' });

$('#right-container ul li a').mouseenter(function() {
		$('#circle').addClass('half-move');
        $('.celebration img').addClass('seen');
	});

$('#right-container ul li a').mouseleave(function() {
		$('#circle').removeClass('half-move');
    $('.celebration img').removeClass('seen');
	});

$('#right-container ul li a').on('click', function() {
		$('#circle').addClass('full-move');
        $('.celebration img').addClass('cardmove');
        $('.celebration p').addClass('seen');
        $('.celebration h4').addClass('seen');
	});

//vertical dots in the form section

$(document).ready(function() {
    $('#fullpage').fullpage({
                    
        css3: true,
        'easing': 'ease',
        scrollingSpeed: 700, 
        anchors:['title', 'info1', 'info2', 'info3','info4', 'trivia1', 'trivia2', 'pictionary1', 'pictionary2', 'pictionary3'],
        navigation: true,
        
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            
            if(anchorLink == 'title' || anchorLink == 'trivia1' || anchorLink == 'trivia2' || anchorLink == 'pictionary1' || anchorLink == 'pictionary2' || anchorLink == 'pictionary3'){
                $('#fp-nav').hide(200);
            } else {
                $('#fp-nav').show(200);
            }
            
            //fire animations info
            if(anchorLink == 'info1'){
                infoAnimate();
            }
            //fire animations trivia
            if(anchorLink == 'trivia1'){
                triviaAnimate();
            }
            //fire animations pictionary
            if(anchorLink == 'pictionary1'){
                pictionaryAnimate();
            }
        },
    });
});


//title animation for each section

var title = $('.title h1');
var description = $('.title p');

var infoTitle = $('.info h2');
var infoDescription = $('.info p');

var triviaTitle = $('.trivia h2');
var triviaDescription = $('.trivia p');

var pictionaryTitle = $('.pictionary h2');
var pictionaryDescription = $('.pictionary p');

//fire animations for landing section
$(document).ready(function() {
    title.addClass('titleIntro');
    setTimeout(function() { 
        description.addClass('titleIntro'); 
    }, 200);
});

//fire animations for info
var infoAnimate = (function() {
    infoTitle.addClass('titleIntro');
    setTimeout(function() { 
        infoDescription.addClass('titleIntro'); 
    }, 100);
});

//fire animations for trivia
var triviaAnimate = (function() {
    triviaTitle.addClass('titleIntro');
    setTimeout(function() { 
        triviaDescription.addClass('titleIntro'); 
    }, 100);
});

 $('#third a.next').click(function() {
        triviaTitle.addClass('titleIntro');
        setTimeout(function() { 
        triviaDescription.addClass('titleIntro'); 
        }, 100);
});

//fire animations for pictionary
var pictionaryAnimate = (function() {
    pictionaryTitle.addClass('titleIntro');
    setTimeout(function() { 
        pictionaryDescription.addClass('titleIntro'); 
    }, 100);
});

 $('.skip a').click(function() {
       pictionaryTitle.addClass('titleIntro');
    setTimeout(function() { 
        pictionaryDescription.addClass('titleIntro'); 
    }, 100);
});