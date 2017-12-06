//vertical dots in the form section

$(document).ready(function() {
    $('#fullpage').fullpage({
                    
        css3: true,
        'easing': 'ease',
        scrollingSpeed: 700, 
        anchors:['title', 'info1', 'info2', 'info3','info4', 'trivia1', 'trivia2', 'pictionary1', 'pictionary2', 'pictionary3', 'result'],
        navigation: true,
        
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            
            if(anchorLink == 'title' || anchorLink == 'trivia1' || anchorLink == 'trivia2' || anchorLink == 'pictionary1' || anchorLink == 'pictionary2' || anchorLink == 'pictionary3' || anchorLink == 'result'){
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
            //fire animations result
            if(anchorLink == 'result'){
                resultAnimate();
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

var resultTitle = $('.result h2');
var resultDescription = $('.result p');

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

//fire animations for pictionary
var pictionaryAnimate = (function() {
    pictionaryTitle.addClass('titleIntro');
    setTimeout(function() { 
        pictionaryDescription.addClass('titleIntro'); 
    }, 100);
});

//fire animations for result
var resultAnimate = (function() {
    resultTitle.addClass('titleIntro');
    setTimeout(function() { 
        resultDescription.addClass('titleIntro'); 
    }, 100);
});

/*
  $(document).ready(function(){
        var rightBoxWidth = $("#right-container").width();
        var leftBoxWidth = $("#left-container").width();
		$("ul li a").mouseover(function(){
			$(this).animate({
				width: "65%"
			}),
            $("#left-container").animate({
				width: "35%"
			});
		}).mouseout(function(){
			$(this).animate({
				width: rightBoxWidth
			}),
                $("#left-container").animate({
				width: leftBoxWidth
			});
		});
    });*/