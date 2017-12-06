//vertical dots in the form section

$(document).ready(function() {
    $('#fullpage').fullpage({
                    
        css3: true,
        'easing': 'ease',
        scrollingSpeed: 650, 
        anchors:['title', 'info1', 'info2', 'info3','info4', 'trivia1', 'trivia2', 'pictionary1', 'pictionary2', 'pictionary3', 'result '],
        navigation: true,
        
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            
            if(anchorLink == 'title' || anchorLink == 'trivia1' || anchorLink == 'trivia2' || anchorLink == 'pictionary1' || anchorLink == 'pictionary2' || anchorLink == 'pictionary3' || anchorLink == 'result'){
                $('#fp-nav').hide(200);
            } else {
                $('#fp-nav').show(200);
            }
        },
    });
});

//function to adjust the nav bar based on hash value

var slider = $('#fp-nav');

var findHash = (function() {
    
    var hash = window.location.hash;
    
    if(hash === "#title" || hash === '') {
        slider.addClass('invisible',300);
    } else {
        slider.removeClass('invisible',300); 
    }
});

setInterval(findHash,100);

//title animation

var title = $('.title h1');
var description = $('.title p');

$(document).ready(function() {
    title.addClass('titleIntro');
    setTimeout(function() { 
        description.addClass('titleIntro'); 
    }, 150);
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