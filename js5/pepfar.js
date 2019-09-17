$('.newCarousel').slick({
slidesToShow: 2,
slidesToScroll:1,
dots:true,
autoplay:false,
autoplaySpeed:1500,
arrows:false,
centerMode: false,
adaptiveHeight: true,
responsive: [
 {
   breakpoint: 1024,
   settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: true,
     dots: true,
     arrows:false
   }
 },
 {
   breakpoint: 600,
   settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows:false,
     dots:true,
   }
 },
 {
   breakpoint: 480,
   settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     dots:true,
     arrows:false
   }
 }
 // You can unslick at a given breakpoint now by adding:
 // settings: "unslick"
 // instead of a settings object
]
});




  $('.carousel').slick({
  slidesToShow: 1.66,
  dots:false,
  autoplay:false,
  autoplaySpeed:1500,
  arrows:true,
  variableWidth: false,
  centerMode: false,

  responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       infinite: true,
       dots: false,
       arrows:true
     }
   },
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
       arrows:true,
       dots:false,
     }
   },
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       dots:false,
       arrows:true
     }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]
});

$('.slider').slick({
 centerMode: true,
 centerPadding: '25%',
 slidesToShow: 1,
 speed: 500,
 useTransform: true,
 dots:false,
 arrows:true,
 responsive: [
 {
   breakpoint: 1024,
   settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: true,
     dots: true,
     arrows:false
   }
 }


 // You can unslick at a given breakpoint now by adding:
 // settings: "unslick"
 // instead of a settings object
]
});


//open red button to read more


$('.button-red').on('click', function() {

  if($(".toggleDiv").is(':visible')) {
    $(".button-red").text('FULL CASE STUDY');
    console.log('slide up')
    $(".toggleDiv").slideUp();


  }

  else if ($(".toggleDiv").is(':hidden')){
    $(".button-red").text('READ LESS')
    console.log('slide no')
    $(".toggleDiv").slideDown();
  }

});




//bottom slide if else statements to make them slide4

//if else statements to make the carousel slide at the bottom

$('#one').on('click', function() {

if ($('.group2').css('opacity') == '0' && $(window).width() > 992) {

console.log("group 2 is 0")
    setTimeout(function(){
    // $('.group1').css('css', 'auto');
    $('.group2').css('css', 'auto');
    $('.group1').css('right', 'auto');
    // $('.group2').css('left', 'auto');
    $('.group1').removeClass('animated slideInLeft');
    $('.group1').removeClass('animated slideInRight');
    $('.group2').removeClass('animated slideInLeft');
    $('.group2').removeClass('animated slideInRight');
    },0);



      $(".group1").animate({"left": -$("body").width(), opacity : 0}, 1190);
      $(".group2").animate({"opacity": 1,"left": 'auto'}, 1400);



setTimeout(function(){
      $('.group2').css('position', 'absolute');
      $('.group2').css('left', 'auto');
      $('.group2').css('right', 'auto');
      $('.group2').addClass('animated slideInRight');

    }, 120);

}

else if ($('.group2').css('opacity') == '1'  && $(window).width() > 992) {
console.log("group 2 is 1")


setTimeout(function(){
$('.group1').css('css', 'auto');
$('.group2').css('left', 'auto');
$('.group1').css('right', 'auto');
$('.group1').removeClass('animated slideInLeft');
$('.group1').removeClass('animated slideInRight');
$('.group2').removeClass('animated slideInLeft');
$('.group2').removeClass('animated slideInRight');
},0);



  $(".group2").animate({"left": -$("body").width(), opacity : 0}, 1190);
  $(".group1").animate({"opacity": 1, "left": 'auto'}, 1400);



setTimeout(function(){
  $('.group1').css('position', 'auto');
  $('.group1').css('left', 'auto');
  $('.group1').addClass('animated slideInRight');

},120);


}

});


$('#two').on('click', function() {

if ($('.group1').css('opacity') == '1'  && $(window).width() > 992) {
console.log("group 1 is 1")
  setTimeout(function(){
  $('.group1').css('css', 'auto');
  $('.group2').css('css', 'auto');
  $('.group1').css('right', 'auto');
  $('.group2').css('left', 'auto');
  $('.group1').removeClass('animated slideInLeft');
  $('.group1').removeClass('animated slideInRight');
  $('.group2').removeClass('animated slideInLeft');
  $('.group2').removeClass('animated slideInRight');
  },0);


    $(".group1").animate({"right": -$("body").width(), opacity : 0}, 1190);
    $(".group2").animate({"opacity": 1, "left": 'auto'}, 1400);


  setTimeout(function(){
    $('.group2').css('position', 'absolute');
    $('.group2').css('right', 'auto');

    $('.group2').addClass('animated slideInLeft');

},120);


}


else if ($('.group1').css('opacity') == '0'  && $(window).width() > 992) {
console.log("group 1 is 0")
    setTimeout(function(){
    $('.group1').css('css', 'auto');
    $('.group2').css('css', 'auto');
    $('.group2').css('right', 'auto');
    // $('.group2').css('left', 'auto');
    $('.group1').css('left', 'auto');
    $('.group1').removeClass('animated slideInLeft');
    $('.group1').removeClass('animated slideInRight');
    $('.group2').removeClass('animated slideInLeft');
    $('.group2').removeClass('animated slideInRight');
    },0);




  $(".group2").animate({"right": -$("body").width(),opacity : 0}, 1190);
  $(".group1").animate({"opacity": 1, "left": 'auto'}, 1400);

    setTimeout(function(){
      $('.group1').css('css', 'auto');
      $('.group1').css('css', 'auto');
      $('.group1').css('right', 'auto');

      $('.group1').addClass('animated slideInLeft');

    },120);

}

  });
