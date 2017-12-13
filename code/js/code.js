//creating svg circle for animation
//hover and click animation

var draw = SVG('circle').size('100%', '100%');
var circ = draw.circle('100%', '100%').attr({ fill: '#fff' });

//celebration
$('#right-container ul li a.celebration').mouseenter(function() {
		$('#circle').addClass('half-move');
        $('.celebration img').addClass('seen');
        $('.card.celebration').addClass('seen');
	});

$('#right-container ul li a.celebration').mouseleave(function() {
		$('#circle').removeClass('half-move');
        $('.celebration img').removeClass('seen');
        $('.card.celebration').removeClass('seen');
	});

$('#right-container ul li a.celebration').on('click', function() {
		$('#circle').addClass('full-move');
        $('.celebration img').addClass('seen cardmove');
        $('.celebration p').addClass('seen');
        $('.celebration h4').addClass('seen');
        $('.card.celebration').addClass('seen');
    
        $('.culture img').removeClass('seen cardmove');
        $('.culture p').removeClass('seen');
        $('.culture h4').removeClass('seen');
        $('.card.culture').removeClass('seen');
    
        $('.society img').removeClass('seen cardmove');
        $('.society p').removeClass('seen');
        $('.society h4').removeClass('seen');
        $('.card.society').removeClass('seen');
    
        $('.pets img').removeClass('seen cardmove');
        $('.pets p').removeClass('seen');
        $('.pets h4').removeClass('seen');
        $('.card.pets').removeClass('seen');
	});

//culture
$('#right-container ul li a.culture').mouseenter(function() {
		$('#circle').addClass('half-move');
        $('.culture img').addClass('seen');
        $('.card.culture').addClass('seen');
	});

$('#right-container ul li a.culture').mouseleave(function() {
		$('#circle').removeClass('half-move');
        $('.culture img').removeClass('seen');
        $('.card.culture').removeClass('seen');
	});

$('#right-container ul li a.culture').on('click', function() {
		$('#circle').addClass('full-move');
        $('.culture img').addClass('seen cardmove');
        $('.culture p').addClass('seen');
        $('.culture h4').addClass('seen');
        $('.card.culture').addClass('seen');
    
        $('.celebration img').removeClass('seen cardmove');
        $('.celebration p').removeClass('seen');
        $('.celebration h4').removeClass('seen');
        $('.card.celebration').removeClass('seen');
    
        $('.society img').removeClass('seen cardmove');
        $('.society p').removeClass('seen');
        $('.society h4').removeClass('seen');
        $('.card.society').removeClass('seen');
    
        $('.pets img').removeClass('seen cardmove');
        $('.pets p').removeClass('seen');
        $('.pets h4').removeClass('seen');
        $('.card.pets').removeClass('seen');
	});


//society
$('#right-container ul li a.society').mouseenter(function() {
		$('#circle').addClass('half-move');
        $('.society img').addClass('seen');
        $('.card.society').addClass('seen');
	});

$('#right-container ul li a.society').mouseleave(function() {
		$('#circle').removeClass('half-move');
        $('.society img').removeClass('seen');
        $('.card.society').removeClass('seen');
	});

$('#right-container ul li a.society').on('click', function() {
		$('#circle').addClass('full-move');
        $('.society img').addClass('seen cardmove');
        $('.society p').addClass('seen');
        $('.society h4').addClass('seen');
        $('.card.society').addClass('seen');
    
        $('.celebration img').removeClass('seen cardmove');
        $('.celebration p').removeClass('seen');
        $('.celebration h4').removeClass('seen');
        $('.card.celebration').removeClass('seen');
    
        $('.culture img').removeClass('seen cardmove');
        $('.culture p').removeClass('seen');
        $('.culture h4').removeClass('seen');
        $('.card.culture').removeClass('seen');
    
        $('.pets img').removeClass('seen cardmove');
        $('.pets p').removeClass('seen');
        $('.pets h4').removeClass('seen');
        $('.card.pets').removeClass('seen');
	});

//pets
$('#right-container ul li a.pets').mouseenter(function() {
		$('#circle').addClass('half-move');
        $('.pets img').addClass('seen');
        $('.card.pets').addClass('seen');
	});

$('#right-container ul li a.pets').mouseleave(function() {
		$('#circle').removeClass('half-move');
        $('.pets img').removeClass('seen');
        $('.card.pets').removeClass('seen');
	});

$('#right-container ul li a.pets').on('click', function() {
		$('#circle').addClass('full-move');
        $('.pets img').addClass('seen cardmove');
        $('.pets p').addClass('seen');
        $('.pets h4').addClass('seen');
        $('.card.pets').addClass('seen');
    
        $('.celebration img').removeClass('seen cardmove');
        $('.celebration p').removeClass('seen');
        $('.celebration h4').removeClass('seen');
        $('.card.celebration').removeClass('seen');
    
        $('.culture img').removeClass('seen cardmove');
        $('.culture p').removeClass('seen');
        $('.culture h4').removeClass('seen');
        $('.card.culture').removeClass('seen');
    
        $('.society img').removeClass('seen cardmove');
        $('.society p').removeClass('seen');
        $('.society h4').removeClass('seen');
        $('.card.society').removeClass('seen');
	});

//remove hover when an option is clicked
$('#right-container ul li a').on('click', function() {
        $('#right-container ul li a').unbind("mouseenter mouseleave");
        $('.trivia .svg-images img:nth-child(2)').removeClass('svgIntro');
        $('.trivia .svg-images img:nth-child(1)').removeClass('svgIntro');
        $('.trivia .svg-images img:nth-child(4)').removeClass('svgIntro');
        $('.trivia .svg-images img:nth-child(3)').removeClass('svgIntro');
	});

//vertical dots in the form section

$(document).ready(function() {
    $('#fullpage').fullpage({
                    
        css3: true,
        'easing': 'ease',
        scrollingSpeed: 700, 
        anchors:['title', 'info1', 'info2', 'info3', 'trivia1', 'trivia2', 'pictionary1', 'pictionary2', 'pictionary3'],
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
            
            //fire animations trivia
            if(anchorLink == 'trivia2'){
                triviaImageAnimate();
            }
            
            //fire animations pictionary
            if(anchorLink == 'pictionary1'){
                pictionaryAnimate();
            }
            
            //fire animations pictionary3
            if(anchorLink == 'pictionary3'){
                shapeAnimate();
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

var imageCircle = $('.section.fp-auto-height-responsive.title img:nth-of-type(1)');
var imageMap = $('.section.fp-auto-height-responsive.title img:nth-of-type(2)');

var triangle = $('.pictionary .container-width div img:nth-child(2)');
var polygon = $('.pictionary .container-width div img:nth-child(1)');
var baloon = $('.pictionary .container-width div img:nth-child(4)');
var cap = $('.pictionary .container-width div img:nth-child(3)');

var triangleTrivia = $('.trivia .svg-images img:nth-child(2)');
var polygonTrivia = $('.trivia .svg-images img:nth-child(1)');
var baloonTrivia = $('.trivia .svg-images img:nth-child(4)');
var capTrivia = $('.trivia .svg-images img:nth-child(3)');

//fire animations for landing section
$(document).ready(function() {
    imageMap.addClass('mapIntro');
    setTimeout(function() { 
        imageCircle.addClass('circleIntro');
    }, 400);
    
    setTimeout(function() { 
        title.addClass('titleIntro');
    }, 1200);
    
    setTimeout(function() { 
        description.addClass('titleIntro'); 
    }, 1600);
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

 $('.skip a').click(function() {
       pictionaryTitle.addClass('titleIntro');
    setTimeout(function() { 
        pictionaryDescription.addClass('titleIntro'); 
    }, 100);
});

var shapeAnimate = (function() {
    triangle.addClass('svgIntro');
    setTimeout(function() { 
        polygon.addClass('svgIntro'); 
    }, 40);
    setTimeout(function() { 
        cap.addClass('svgIntro'); 
    }, 120);
    setTimeout(function() { 
        baloon.addClass('svgIntro'); 
    }, 220);
});

var triviaImageAnimate = (function() {
    triangleTrivia.addClass('svgIntro');
    setTimeout(function() { 
        polygonTrivia.addClass('svgIntro'); 
    }, 40);
    setTimeout(function() { 
        capTrivia.addClass('svgIntro'); 
    }, 120);
    setTimeout(function() { 
        baloonTrivia.addClass('svgIntro'); 
    }, 220);
});

//canavs demo
let canvas = false;
let flag = false;
let ctx = false;
var prevX = 0;
var currX = 0;
var prevY = 0;
var currY = 0;
let dot_flag = false;

var x = "black";
var y = 2;

function init() {
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
};

function color(obj) {
    switch (obj.id) {
        case "green":
            x = "green";
            break;
        case "blue":
            x = "blue";
            break;
        case "red":
            x = "red";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "orange":
            x = "orange";
            break;
        case "black":
            x = "black";
            break;
        case "white":
            x = "white";
            break;
    }
    if (x == "white") y = 14;
    else y = 2;

};


//draw
function drawCanvas() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
};


//eraser
function erase() {
    var m = confirm("Want to clear");
    if (m) {
        ctx.clearRect(0, 0, w, h);
        document.getElementById("canvasimg").style.display = "none";
    }
};


//save
function save() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
};

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            drawCanvas();
        }
    }
};

//download image
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'can', 'yourimage.png');
}, false);

//scroll to last section when submit button is clicked, also show svg images after scroll
$('#btn').click(function() {
    $('html,body').animate({
        scrollTop: $(".confirm").offset().top},
        700);
    setTimeout(function() { 
        shapeAnimate();
    }, 800);

});

//responsive canvas
$(document).ready( function(){
  		
  		//Get the canvas & context
  		var c = $('#can');
  		var ct = c.get(0).getContext('2d');
  		var container = $(c).parent();
  		
  		//Run function when browser  resize
	  	$(window).resize( respondCanvas );
	  	
	  	function respondCanvas(){
  			c.attr('width', $(container).width() ); //max width
  			c.attr('height', $(container).height() ); //max height
		}
		
		//Initial call
		respondCanvas();
  	});