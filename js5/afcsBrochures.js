$(document).ready(function(){

//parallaxIt

  $(".rightPic").mousemove(function(e) {
    parallaxIt(e, ".phone1", -5);
    parallaxIt(e, ".singleBook", 15);
    parallaxIt(e, ".shadow2", -15);
    parallaxIt(e, ".phone2", -8);
    parallaxIt(e, ".shadow", -8);
    parallaxIt(e, ".circle1", 5);
    parallaxIt(e, ".circle2", 3);
  });

  function parallaxIt(e, target, movement) {
    var $this = $(".rightPic");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
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
