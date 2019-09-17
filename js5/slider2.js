let pageModule = {
config: {
classes: {
container: '.container',
wrapper: '.wrapper',
flex: '.flexing',
flexrelatve: '.flex-relative',
close: '.close',
nav: '.navbar',
middle: '.w800',
center: '.center',
slide: '.homeSlider',
},
ids: {
calendar: '#myCool2'
},
timeout: {
basic: 800,
normal: 2000,
long: 3500
}
},
showContent: function(div){
// show contents for divs if you want to here.
},
hideContent: function(div){
// hide contents for divs if you want to here.
},
animateContent: function(div){
// animate contents for divs if you want to here.
},
getNavFixedHeight: function(){
var nav = pageModule.config.classes.nav
// Calculate where to put the height for the nav when a scroll happens
let fixedHeight = $(nav).height() // div.innerHeight -
console.log(`fixed height is ${fixedHeight}`);
return fixedHeight;
},

getMiddleFixedHeight: function() {
var middle = pageModule.config.classes.middle

let middleHeight = $(middle).height();
console.log(`middle height is ${middleHeight}`);

return middleHeight;
},
getCenterFixedHeight: function() {
var center = pageModule.config.classes.center

let centerHeight = $(center).height();
console.log(`center height is ${centerHeight}`);

return centerHeight;
},
getSlideFixedHeight: function() {
var slide = pageModule.config.classes.slide

let slideHeight = $(slide).height();
console.log(`slide height is ${slideHeight}`);

return slideHeight;
},

init: function() {
// This is where we carry out our project
let self = this;
// Start the stuff. This could be your init file.
console.log('this is started');

},

}


pageModule.init();


//closing calendar

$("#myCool2 .close10").on("click", function(){

$('.slick-dots').show();
$('.centerBlocks').addClass('bottomBoxShadow');

$('#news2').removeClass('animated slideInRight')
$('#news2').removeClass('flexing-scroll')
$('#myCool2').removeClass('animated slideInRight')

$('#myCool2').removeClass('flexing-scroll')

$('#hiddenVideos2').removeClass('animated slideInRight')
$('#hiddenVideos2').removeClass('flexing-scroll')


var divPosition = $('#anchorPointTop2').offset();
$('html, body').animate({scrollTop: divPosition.top}, 1000);

setTimeout(function(){
$('#hiddenVideos2').removeClass('bottomShadow');
$('#myCool2').removeClass('bottomShadow');
$('#news2').removeClass('bottomShadow');
},1100);

setTimeout(function(){
$( "#myCool2" ).slideToggle(1000);
// $( "#news2" ).slideToggle(1000);
// $( "#hiddenVideos2" ).slideToggle(1000);
},100);


});


//closing videos
$("#hiddenVideos2 .close11").click(function(){

$('.slick-dots').show();
$('.centerBlocks').addClass('bottomBoxShadow');

$('#news2').removeClass('animated slideInRight')
$('#news2').removeClass('flexing-scroll')
$('#myCool2').removeClass('animated slideInRight')

$('#myCool2').removeClass('flexing-scroll')

$('#hiddenVideos2').removeClass('animated slideInRight')
$('#hiddenVideos2').removeClass('flexing-scroll')



var divPosition = $('#anchorPointTop2').offset();
$('html, body').animate({scrollTop: divPosition.top}, 1000);

setTimeout(function(){
$('#hiddenVideos2').removeClass('bottomShadow');
$('#myCool2').removeClass('bottomShadow');
$('#news2').removeClass('bottomShadow');
},1100);
setTimeout(function(){
$( "#hiddenVideos2" ).slideToggle(1000);
// $( "#news2" ).slideToggle(1000);
// $( "#myCool2" ).slideToggle(1000);
},100);


});



//closing the news2 div
$("#news2 .close12").click(function(){

$('.slick-dots').show();
$('.centerBlocks').addClass('bottomBoxShadow');


$('#news2').removeClass('animated slideInRight')
$('#news2').removeClass('flexing-scroll')
$('#myCool2').removeClass('animated slideInRight')

$('#myCool2').removeClass('flexing-scroll')

$('#hiddenVideos2').removeClass('animated slideInRight')
$('#hiddenVideos2').removeClass('flexing-scroll')


var divPosition = $('#anchorPointTop2').offset();
$('html, body').animate({scrollTop: divPosition.top}, 1000);

setTimeout(function(){
$('#hiddenVideos2').removeClass('bottomShadow');
$('#myCool2').removeClass('bottomShadow');
$('#news2').removeClass('bottomShadow');
},1100);
setTimeout(function(){
$( "#news2" ).slideToggle(1000);
// $( "#hiddenVideos2" ).slideToggle(1000);
// $( "#myCool2" ).slideToggle(1000);
},100);

});

//opening the videos div


$(document).on('click', ".openIt22", function() {
$('.centerBlocks').removeClass('bottomBoxShadow');

console.log($('#hiddenVideos2'))




if ($('#news2').is('.mynews2', '.bottomShadow', '.animated', '.slideInRight') && $('#hiddenVideos2').is('flexing-scroll'))  {


console.log('news2 is laeving and videos coming back in')

$('#hiddenVideos2').removeClass('flexing-scroll')
$('#news2').removeClass('animated slideInRight')

$('#news2').addClass('flexing-scroll');

setTimeout(function(){

$("#news2").animate({"left": -$("#news2").width()}, 600);
// $('#hiddenVideos2').addClass('animated slideInRight').show();
}, 350);


setTimeout(function(){
$('#news2').hide();
}, 600);


setTimeout(function(){
$('#news2').removeClass('bottomShadow')
$('#hiddenVideos2').addClass('bottomShadow')

$('#hiddenVideos2').addClass('animated slideInRight').show();
}, 500);


}



else if ($('hiddenVideos2').is('.bottomShadow', '.flexing-scroll') && $('#news2').is('.mynews2', '.animated', '.slideInRight')) {

$('#hiddenVideos2').removeClass('flexing-scroll')
$('#news2').removeClass('animated slideInRight')

$('#news2').addClass('flexing-scroll')


setTimeout(function(){

$("#news2").animate({"left": -$("#myCool2").width()}, 800);
}, 50);

setTimeout(function(){
$('#news2').hide();
}, 800);


setTimeout(function(){
// $('#hiddenVideos2').css('position','unset');
$('#myCool2').addClass('animated slideInRight').show();
}, 200);


}



else if

($('#hiddenVideos2').is('.bottomShadow')) {

console.log('videos has bottomShadow')

$('#hiddenVideos2').removeClass('flexing-scroll')
$('#myCool2').removeClass('animated slideInRight')

$('#myCool2').addClass('flexing-scroll')


setTimeout(function(){

$("#myCool2").animate({"left": -$("#myCool2").width()}, 800);
}, 400);

setTimeout(function(){
$('#myCool2').hide();
}, 800);


setTimeout(function(){
// $('#hiddenVideos2').css('position','unset');
$('#hiddenVideos2').addClass('animated slideInRight').show();
}, 800);



}

else if

(!$('#myCool2').is('.bottomShadow')  && !$('#hiddenVideos2').is('.bottomShadow') && !$('#news2').is('.bottomShadow')) {

console.log('videos does not have bottomShadow')

// $("#videos").css("pointer-events", "none");


$('.slick-dots').hide();
$('#myCool2').removeClass('animated slideDown').removeAttr('style');


var divPosition = $('#anchorPoint2').offset();
$('html, body').animate({scrollTop: divPosition.top}, 1000);


setTimeout(function(){
$( "#hiddenVideos2" ).slideToggle(1000);
// $('#hiddenVideos2').addClass('bottomShadow');
},100);

setTimeout(function(){

$('#hiddenVideos2').addClass('bottomShadow');
},1000);

}

else if

(!$('#myCool2').is('.bottomShadow')  && !$('#hiddenVideos2').is('.bottomShadow') &&  $('#myCool2').is('.cool2', '.flexing-scroll') && $('#news2').is('.mynews2' , '.bottomShadow' , '.animated' , '.slideInRight')) {
console.log("fucker bitch")


console.log('news2 is leaving and videos coming back in')


setTimeout(function(){
$('#news2').css('left', 'auto');
$('#myCool2').css('left', 'auto');
$('#myCool2').removeClass('flexing-scroll')
}, 50);


setTimeout(function(){
$('#hiddenVideos2').removeClass('flexing-scroll')

$('#news2').removeClass('animated slideInRight')

$('#news2').addClass('flexing-scroll')
}, 100);


setTimeout(function(){

$("#news2").animate({"left": -$("#news2").width()}, 900);
// $('#hiddenVideos2').addClass('animated slideInRight').show();
}, 500);


setTimeout(function(){
$('#news2').hide();
}, 900);


setTimeout(function(){
$('#news2').removeClass('bottomShadow')
$('#hiddenVideos2').addClass('bottomShadow')

$('#hiddenVideos2').addClass('animated slideInRight').show();
}, 900);

}

else if

($('#myCool2').is('.bottomShadow', '.cool2', '.flexing-scroll') && $('#hiddenVideos2').is('.flexing-scroll') && !$('#news2').is('.bottomShadow'))  {

console.log("my brain is fucked in the ass")

setTimeout(function(){
$('#myCool2').css('left', 'auto');
}, 100);


setTimeout(function(){
$('#hiddenVideos2').removeClass('flexing-scroll')
$('#myCool2').removeClass('animated slideInRight')


$('#myCool2').addClass('flexing-scroll')
}, 100);


setTimeout(function(){

$("#myCool2").animate(
{
"left": -$("#myCool2").width()
}
, 900);
}, 400);

setTimeout(function(){
$('#myCool2').hide();
}, 900);


setTimeout(function(){
// $('#hiddenVideos2').css('position','unset');

$('#myCool2').removeClass('bottomShadow')
$('#hiddenVideos2').addClass('bottomShadow')

$('#hiddenVideos2').addClass('animated slideInRight').show();
}, 900);

}

else if


($('#myCool2').is('.bottomShadow', '.cool2', '.animated', '.slideInRight')  && $('#hiddenVideos2').is('.flexing-scroll')) {

console.log("iam fucked")

setTimeout(function(){
$('#myCool2').css('left', 'auto');
}, 100);


setTimeout(function(){
$('#hiddenVideos2').removeClass('flexing-scroll')
$('#myCool2').removeClass('animated slideInRight')
$('#myCool2').addClass('flexing-scroll')
}, 100);


setTimeout(function(){

$("#myCool2").animate(
{
"left": -$("#myCool2").width()
}
, 900);
}, 300);

setTimeout(function(){
$('#myCool2').hide();
}, 900);


setTimeout(function(){
// $('#hiddenVideos2').css('position','unset');

$('#myCool2').removeClass('bottomShadow')
$('#new').addClass('bottomShadow')

$('#hiddenVideos2').addClass('animated slideInRight').show();
}, 600);

}


else if

($('#myCool2').is('.cool2', '.flexing-scroll') && $('#hiddenVideos2').is('.bottomShadow' , '.animated' , '.slideInRight') && $('#news2').is('.mynews2', '.flexing-scroll')) {

console.log("sliding this bitch videos to left and sliding calendar back in fucker")
setTimeout(function(){
$('#hiddenVideos2').css('left', 'auto');
}, 100);



setTimeout(function(){
$('#myCool2').removeClass('flexing-scroll')
$('#hiddenVideos2').removeClass('animated slideInRight')
$('#hiddenVideos2').addClass('flexing-scroll')
}, 100);


setTimeout(function(){

$("#hiddenVideos2").animate(
{
"left": -$("#hiddenVideos2").width()
}
, 900);
}, 300);

setTimeout(function(){
$('#hiddenVideos2').hide();
}, 900);


setTimeout(function(){

$('#myCool2').addClass('bottomShadow')
$('#hiddenVideos2').removeClass('bottomShadow')

$('#myCool2').addClass('animated slideInRight').show();
}, 600);

}

else if

($('#myCool2').is('.bottomShadow', '.cool2', '.flexing-scroll') && !$('#hiddenVideos2').is('.bottomShadow') && !$('#news2').is('.bottomShadow'))   {

console.log('myCool2 got the bottomShadow')


// setTimeout(function(){
$('#myCool2').css('left', 'auto');
// }, 50);



setTimeout(function(){
$('#hiddenVideos2').removeClass('flexing-scroll')
$('#myCool2').removeClass('animated slideInRight')


}, 0);

setTimeout(function(){
$('#myCool2').addClass('flexing-scroll')
$("#myCool2").animate({"left": -$("#myCool2").width()}, 900);

}, 500);


setTimeout(function(){
$('#myCool2').hide();
}, 900);


setTimeout(function(){
$('#myCool2').removeClass('bottomShadow')
$('#hiddenVideos2').addClass('bottomShadow')

$('#hiddenVideos2').addClass('animated slideInRight').show();
}, 900);

}

else if

($('#myCool2').is('.cool2' , '.flexing-scroll') && $('#news2').is('.mynews2' , '.flexing-scroll' , '.bottomShadow' , '.animated' , '.slideInRight') ) {

console.log('this is some bullshit')

// setTimeout(function(){
// $('#news2').css('left', 'auto');
// $('#myCool2').css('left', 'auto');
// $('#myCool2').removeClass('flexing-scroll')
// }, 50);
//
//
// setTimeout(function(){
// $('#hiddenVideos2').removeClass('flexing-scroll')
//
// $('#news2').removeClass('animated slideInRight')
//
// $('#news2').addClass('flexing-scroll')
// }, 100);
//
//
// setTimeout(function(){
//
// $("#news2").animate({"left": -$("#news2").width()}, 900);
// // $('#hiddenVideos2').addClass('animated slideInRight').show();
// }, 500);
//
//
// setTimeout(function(){
// $('#news2').hide();
// }, 900);
//
//
// setTimeout(function(){
// $('#news2').removeClass('bottomShadow')
// $('#hiddenVideos2').addClass('bottomShadow')
//
// $('#hiddenVideos2').addClass('animated slideInRight').show();
// }, 900);





setTimeout(function(){

// $('#news2').css('left', 'auto');


$('#myCool2').removeClass('flexing-scroll')
$('#news2').removeClass('animated slideInRight');
}, 0);

//
setTimeout(function(){
  $('#news2').addClass('flexing-scroll')

}, 50);


setTimeout(function(){

$("#news2").animate({"left": -$("#myCool2").width()}, 700);

});


setTimeout(function(){
$('#news2').hide();
}, 1000);

//elizabeth can come back here for reference in case it gets messed up. I commented out the stuff above


setTimeout(function(){
$('#news2').removeClass('bottomShadow')
$('#myCool2').removeClass('bottomShadow')
$('#hiddenVideos2').addClass('bottomShadow')

$('#hiddenVideos2').addClass('animated slideInRight').show();
}, 700);

}
});

//opening the calendar div

$(document).on('click', ".openIt1", function() {


$('.centerBlocks').removeClass('bottomBoxShadow');

if

($('#myCool2').is('.bottomShadow', '.cool2', '.flexing-scroll')  && $('#news2').is('.mynews2' , '.bottomShadow' , '.animated' , '.slideInRight')) {

console.log("iam fucked")

setTimeout(function(){
$('#news2').css('left', 'auto');
}, 10);


setTimeout(function(){
$('#myCool2').removeClass('flexing-scroll')
$('#news2').removeClass('animated slideInRight')


$('#news2').addClass('flexing-scroll')
}, 100);


setTimeout(function(){

$("#news2").animate(
{
"left": -$("#news2").width()
}
, 900);
}, 400);

setTimeout(function(){
$('#news2').hide();
}, 900);


setTimeout(function(){

$('#myCool2').addClass('bottomShadow')
$('#news2').removeClass('bottomShadow')

$('#myCool2').addClass('animated slideInRight').show();
}, 900);

}



else if ($('#myCool2').is('.cool2', '.flexing-scroll') && $('#hiddenVideos2').is('.animated', '.slideInRight', '.bottomShadow'))  {

console.log('we are sliding videos over and calendar back into place')

setTimeout(function(){
$('#hiddenVideos2').css('left', 'auto');
}, 100);



setTimeout(function(){
$('#myCool2').removeClass('flexing-scroll')
$('#hiddenVideos2').removeClass('animated slideInRight')
$('#hiddenVideos2').addClass('flexing-scroll')
}, 100);


setTimeout(function(){

$("#hiddenVideos2").animate(
{
"left": -$("#hiddenVideos2").width()
}
, 900);
}, 500);

setTimeout(function(){
$('#hiddenVideos2').hide();
}, 900);


setTimeout(function(){

$('#myCool2').addClass('bottomShadow')
$('#hiddenVideos2').removeClass('bottomShadow')

$('#myCool2').addClass('animated slideInRight').show();
}, 900);

}


else if

($('#myCool2').is('.cool2', '.flexing-scroll') && $('#hiddenVideos2').is('.bottomShadow' , '.animated' , '.slideInRight') && $('#news2').is('.mynews2', '.flexing-scroll')) {

console.log("sliding this bitch videos to left and sliding calendar back in fucker")
setTimeout(function(){
$('#hiddenVideos2').css('left', 'auto');
}, 100);



setTimeout(function(){
$('#myCool2').removeClass('flexing-scroll')
$('#hiddenVideos2').removeClass('animated slideInRight')
$('#hiddenVideos2').addClass('flexing-scroll')
}, 100);


setTimeout(function(){

$("#hiddenVideos2").animate(
{
"left": -$("#hiddenVideos2").width()
}
, 900);
}, 500);

setTimeout(function(){
$('#hiddenVideos2').hide();
}, 900);


setTimeout(function(){


$('#myCool2').addClass('bottomShadow')
$('#hiddenVideos2').removeClass('bottomShadow')

$('#myCool2').addClass('animated slideInRight').show();
}, 900);

}


else if  ($('#myCool2').is('.bottomShadow', '.cool2', '.flexing-scroll') && $('#news2').is('.mynews2', '.animated', '.slideInRight') && $('#hiddenVideos2').is('.animated', '.slideInRight', '.flexing-scroll')) {

$('#hiddenVideos2').removeClass('flexing-scroll')
$('#myCool2').removeClass('flexing-scroll')
$('#news2').removeClass('animated slideInRight')


$('#news2').addClass('flexing-scroll')

console.log('do this shi until you get it right')

setTimeout(function(){

$("#news2").animate(
{
  "left": -$("#news2").width()
}
, 800);
}, 50);

setTimeout(function(){
$('#news2').hide();
}, 800);


setTimeout(function(){



$('#myCool2').addClass('animated slideInRight').show();
}, 200);

}

else if

(!$('#myCool2').is('.bottomShadow')  && !$('#hiddenVideos2').is('.bottomShadow') && !$('#news2').is('.bottomShadow')) {
console.log('cool no bottomShadow')


// $("#videos").css("pointer-events", "all");



$('.slick-dots').hide();

$('#myCool2').removeAttr('style');
$('#hiddenVideos2').removeAttr('style');
$('#news2').removeAttr('style');


var divPosition = $('#anchorPoint2').offset();
$('html, body').animate({scrollTop: divPosition.top}, 1000);



setTimeout(function(){
$( "#myCool2" ).slideToggle(1000);
$('#myCool2').addClass('bottomShadow');

},100);


}

else if

($('#hiddenVideos2').is('.bottomShadow') && !$('#myCool2').is('.bottomShadow') && !$('#news2').is('.bottomShadow')) {
console.log('videos has bottomShadow and myCool2 does not')

$('#myCool2').removeClass('flexing-scroll')
$('#news2').removeClass('animated slideInRight')

$('#hiddenVideos2').addClass('flexing-scroll')


setTimeout(function(){
$("#hiddenVideos2").animate(
  {
    "left": -$("#hiddenVideos2").width()
  }
  , 800);
}, 50);

setTimeout(function(){
  $('#hiddenVideos2').hide();
}, 800);


setTimeout(function(){
  // $('#hiddenVideos2').css('position','unset');
  $('#myCool2').addClass('animated slideInRight').show();
}, 200);

}

else if



(!$('#myCool2').is('.bottomShadow')  && !$('#hiddenVideos2').is('.bottomShadow') && $('#news2').is('.bottomShadow'))   {
console.log('news2 has bottomShadow and myCool2 and videos does not')


setTimeout(function(){
  $('#news2').css('left', 'auto');
}, 100);


setTimeout(function(){
  $('#myCool2').removeClass('flexing-scroll')
  $('#news2').removeClass('animated slideInRight')
  $('#news2').addClass('flexing-scroll')
}, 100);


setTimeout(function(){
  $("#news2").animate(
    {
      "left": -$("#news2").width()
    }
    , 900);
  }, 400);



  setTimeout(function(){
    $('#news2').hide();
  }, 900);


  setTimeout(function(){


    $('#myCool2').addClass('bottomShadow')
    $('#news2').removeClass('bottomShadow')
    $('#myCool2').addClass('animated slideInRight').show();
  }, 900);

}

else if

($('#myCool2').is('.cool2' , '.bottomShadow', '.flexing-scroll') && $('#news2').is('.mynews2', '.bottomShadow' , '.animated' , '.slideInRight')) {

  console.log("fuck me in the ass")


  setTimeout(function(){
    $('#news2').css('left', 'auto');
  }, 100);


  setTimeout(function(){
    $('#myCool2').removeClass('flexing-scroll')
    $('#news2').removeClass('animated slideInRight')
    $('#news2').addClass('flexing-scroll')
  }, 100);

  setTimeout(function(){

    $("#news2").animate({"left": -$("#news2").width()}, 900);
  }, 400);

  setTimeout(function(){
    $('#news2').hide();
  }, 900);


  setTimeout(function(){
    $('#news2').removeClass('bottomShadow')
    $('#hiddenVideos2').addClass('bottomShadow')

    $('#hiddenVideos2').addClass('animated slideInRight').show();
  }, 400);

}

else if

($('#myCool2').is('.cool2' , '.bottomShadow', '.flexing-scroll') && !$('#news2').is('.mynews2', '.bottomShadow' , '.animated' , '.slideInRight')) {

  console.log("this is fucking crazy")


  setTimeout(function(){
    $('#news2').css('left', 'auto');
  }, 100);


  setTimeout(function(){
    $('#myCool2').removeClass('flexing-scroll')

    $('#news2').removeClass('animated slideInRight')


    $('#news2').addClass('flexing-scroll')
  }, 100);

  setTimeout(function(){

    $("#news2").animate({"left": -$("#news2").width()}, 900);
  }, 300);

  setTimeout(function(){
    $('#news2').hide();
  }, 900);


  setTimeout(function(){

    $('#news2').removeClass('bottomShadow')
    $('#hiddenVideos2').addClass('bottomShadow')

    $('#hiddenVideos2').addClass('animated slideInRight').show();
  }, 400);

}

});

//opening the news2 div
$(document).on('click', ".openIt33", function() {

  $('.centerBlocks').removeClass('bottomBoxShadow');

if (!$('#news2').is('.bottomShadow') && !$('#myCool2').is('.cool2', '.bottomShadow', '.slideInRight', '.animated')) {

  console.log('news2 no bottomShadow and open')

  $(".moveThis").hide();
  $(".moveThis2").hide();
  $(".moveThis3").hide();
  $('.slick-dots').hide();
  // $('#myCool2').removeClass('animated slideDown').removeAttr('style');


  $('#myCool2').removeAttr('style');
  $('#hiddenVideos2').removeAttr('style');
  $('#news2').removeAttr('style');

  var divPosition = $('#anchorPoint2').offset();
  $('html, body').animate({scrollTop: divPosition.top}, 1000);


  setTimeout(function(){
    $( "#news2" ).slideToggle(1000);
    $('#news2').addClass('bottomShadow');
  },100);

}


if (!$('#news2').is('.bottomShadow') && !$('#hiddenVideos2').is('.bottomShadow') && !$('#myCool2').is('.bottomShadow')) {

  console.log('news2 no bottomShadow and open');
  $('.slick-dots').hide();
  // $('#myCool2').removeClass('animated slideDown').removeAttr('style');


  $('#myCool2').removeAttr('style');
  $('#hiddenVideos2').removeAttr('style');
  $('#news2').removeAttr('style');

  var divPosition = $('#anchorPoint2').offset();
  $('html, body').animate({scrollTop: divPosition.top}, 1000);


  setTimeout(function(){
    $( "#news2" ).slideToggle(1000);
    $('#news2').addClass('bottomShadow');
  },100);

}


else if

($('#news2').is('.mynews2' , '.bottomShadow', '.animated', '.slideInRight') && $('#hiddenVideos2').is('.flexing-scroll') && !$('#myCool2').is('.cool2' , '.bottomShadow', '.animated' , '.slideInRight')) {

  console.log('vidoes sliding left news2 sliding in the fucker')

  setTimeout(function(){

    $('#news2').css('left', 'auto');
  }, 100);


  setTimeout(function(){
    $('#hiddenVideos2').removeClass('flexing-scroll')
    $('#news2').removeClass('animated slideInRight')
    $('#news2').addClass('flexing-scroll')
  }, 100);

  setTimeout(function(){

    $("#news2").animate({"left": -$("#news2").width()}, 900);
  }, 300);

  setTimeout(function(){
    $('#news2').hide();
  }, 900);


  setTimeout(function(){
    // $('#hiddenVideos2').css('position','unset');
    $('#news2').removeClass('bottomShadow');
    $('#hiddenVideos2').addClass('bottomShadow');


    $('#hiddenVideos2').addClass('animated slideInRight').show();
  }, 400);


}

else if ($('#myCool2').is('.cool2', '.bottomShadow', '.animated', '.slideInRight') && $('#hiddenVideos2').is('.flexing-scroll')) {

  console.log('slide nes into calendar palce')

  setTimeout(function(){
    $('#myCool2').css('left', 'auto');
    $('#news2').css('left', 'auto');
  }, 10);


  setTimeout(function(){
    $('#hiddenVideos2').removeClass('flexing-scroll')
    $('#myCool2').removeClass('animated slideInRight')


    $('#myCool2').addClass('flexing-scroll')
  }, 20);

  setTimeout(function(){

    $("#myCool2").animate({"left": -$("#myCool2").width()}, 900);
  }, 400);

  setTimeout(function(){
    $('#myCool2').hide();
  }, 900);


  setTimeout(function(){
    // $('#hiddenVideos2').css('position','unset');
    $('#news2').addClass('bottomShadow');
    $('#calendar').addClass('bottomShadow');
    $('#myCool2').removeClass('bottomShadow');

    $('#news2').addClass('animated slideInRight').show();
  }, 900);


}



else if($('#news2').is('.bottomShadow', '.cool2', '.flexing-scroll')) {

  console.log('no clue what this is')

  $('#news2').removeClass('flexing-scroll')
  $('#myCool2').removeClass('animated slideInRight')


  $('#myCool2').addClass('flexing-scroll')


  setTimeout(function(){

    $("#myCool2").animate({"left": -$("#myCool2").width()}, 800);
  }, 500);

  setTimeout(function(){
    $('#myCool2').hide();
  }, 800);


  setTimeout(function(){
    // $('#hiddenVideos2').css('position','unset');
    $('#news2').addClass('animated slideInRight').show();
  }, 800);

}

else if

($('#myCool2').is('.bottomShadow')  || $('#myCool2').is('.bottomShadow', '.animated', '.slideInRight') && !$('#news2').is('.bottomShadow')) {

  console.log("so fucking confused")


  setTimeout(function(){
    $('#myCool2').css('left', 'auto');
  }, 100);


  setTimeout(function(){
    $('#news2').removeClass('flexing-scroll')
    $('#hiddenVideos2').removeClass('flexing-scroll')
    $('#myCool2').removeClass('animated slideInRight')
    $('#myCool2').addClass('flexing-scroll')
  }, 100);

  setTimeout(function(){
    $("#myCool2").animate({"left": -$("#myCool2").width()}, 900);
  }, 400);

  setTimeout(function(){
    $('#myCool2').hide();
  }, 900);


  setTimeout(function(){


    $('#news2').addClass('bottomShadow')
    $('#cool').removeClass('bottomShadow')

    $('#news2').addClass('animated slideInRight').show();
  }, 900);


}

else if

(!$('#myCool2').is('.bottomShadow') && $('#news2').is('.flexing-scroll') && $('#hiddenVideos2').is('.animated' , '.slideInRight')) {

  console.log('vidoes sliding left news2 sliding in the fucker')

  setTimeout(function(){
    $('#hiddenVideos2').css('left', 'auto');
    $('#news2').css('left', 'auto');
  }, 100);


  setTimeout(function(){
    $('#hiddenVideos2').removeClass('animated slideInRight')

    $('#hiddenVideos2').addClass('flexing-scroll')
  }, 100);



  setTimeout(function(){
    $("#hiddenVideos2").animate({"left": -$("#hiddenVideos2").width()}, 900);
  }, 400);

  setTimeout(function(){
    $('#hiddenVideos2').hide();
  }, 900);


  setTimeout(function(){
    // $('#hiddenVideos2').css('position','unset');
    $('#news2').addClass('bottomShadow')
    $('#hiddenVideos2').removeClass('bottomShadow')

    $('#news2').addClass('animated slideInRight').show();
  }, 900);


}

else if

($('#news2').is('.mynews2' , '.bottomShadow', '.animated', '.slideInRight') && $('#hiddenVideos2').is('.flexing-scroll'))


{

  console.log("calendarBitch")
  setTimeout(function(){
    $('#hiddenVideos2').css('left', 'auto');
    $('#myCool2').css('left', 'auto');
  }, 100);



  setTimeout(function(){
    $('#hiddenVideos2').removeClass('flexing-scroll')
    $('#myCool2').removeClass('animated slideInRight')
    $('#news2').addClass('flexing-scroll')
  }, 100);


  setTimeout(function(){

    $("#myCool2").animate(
      {
        "left": -$("#myCool2").width()
      }
      , 900);
    }, 300);

    setTimeout(function(){
      $('#myCool2').hide();
    }, 900);


    setTimeout(function(){
      $('#myCool2').removeClass('bottomShadow')
      $('#news2').addClass('bottomShadow')

      $('#news2').addClass('animated slideInRight').show();
    }, 400);


  }

  else if

  ($('#myCool2').is('.cool2' , '.bottomShadow')) {

    console.log('slide news2 into cool place')


    setTimeout(function(){
      $('#hiddenVideos2').css('left', 'auto');
      $('#news2').css('left', 'auto');
    }, 100);


    setTimeout(function(){
      $('#hiddenVideos2').removeClass('animated slideInRight')

      $('#hiddenVideos2').addClass('flexing-scroll')
    }, 100);



    setTimeout(function(){
      $("#hiddenVideos2").animate({"left": -$("#hiddenVideos2").width()}, 900);
    }, 500);

    setTimeout(function(){
      $('#hiddenVideos2').hide();
    }, 900);


    setTimeout(function(){

      $('#news2').addClass('bottomShadow')
      $('#hiddenVideos2').removeClass('bottomShadow')

      $('#news2').addClass('animated slideInRight').show();
    }, 900);


  }

  else if

  ($('#hiddenVideos2').is('.bottomShadow'))  {

    console.log('slide news2 into video place')


    $('#myCool2').removeClass('flexing-scroll')

    $('#hiddenVideos2').addClass('flexing-scroll')


    setTimeout(function(){
      $("#hiddenVideos2").animate({"left": -$("#hiddenVideos2").width()}, 500);
    }, 100);

    setTimeout(function(){
      $('#hiddenVideos2').hide();
    }, 400);


    setTimeout(function(){

      $('#news2').addClass('animated slideInRight').show();
    }, 150);
  }

});
