
$(document).ready(function(){


  $(".preloader-wrap").fadeOut(1000);



  var random = Math.floor(Math.random() * $('.item').length);
  $('.item').hide().eq(random).show();




  function first() {
    $('.inner').addClass('innerOne');
    $('.inner2').addClass('innerTwo');
  }

  function second() {
    $('.innerOne').addClass('newInner');
    $('.innerTwo').addClass('newInner2');
  }

  function third() {
    $('.outer').remove();
    $('.outer2').remove();
  }

  function fourth() {
    $( ".inner3").addClass('innerThree').fadeIn().html( "<h5>OVER 120</h5>" );
    $( ".inner4").addClass('innerFour').fadeIn().html( "<h5>CLIENTS</h5>" );
  }

  function fifth() {
    $('.innerThree').addClass('newInner');
    $('.innerFour').addClass('newInner2');
  }

  function sixth() {
    $('.outer3').remove();
    $('.outer4').remove();
  }


  function seventh() {
    $( ".inner5").addClass('innerFive').fadeIn().html( "<h5 class='breakOnMobile'>400<br> EXCEPTIONAL</h5>" );
    $( ".inner6").addClass('innerSix').fadeIn().html( "<h5>CAMPAIGNS</h5>" );
  }

  function eighth() {
    $('.innerFive').addClass('newInner');
    $('.innerSix').addClass('newInner2');
  }

  function ninth() {
    $('.outer5').remove();
    $('.outer6').remove();
  }


  function tenth() {
    $( ".inner7").addClass('innerSeven').fadeIn().html( "<h5 class='breakOnMobile'>WE DON'T<br> EVEN KNOW</h5>" );
    $( ".inner8").addClass('innerEight').fadeIn().html( "<h5 class='breakOnMobile'>HOW MANY <br>ADS</h5>" );
  }

  function eleventh() {
    $('.innerSeven').addClass('newInner');
    $('.innerEight').addClass('newInner2');
  }

  function twelfth() {
    $('.outer7').remove();
    $('.outer8').remove();
  }

  function thirteenth(){
    $( ".inner9").addClass('innerNine').fadeIn().html( "<h5>ONE</h5>" );
    $( ".inner10").addClass('innerTen').fadeIn().html( "<h5>GOAL</h5>" );
    $( ".inner10.little").addClass('innerTen').fadeIn().html( "<h5 class='mt5'>...</h5>" );
  }

  function fourteenth() {
    $('.innerNine').addClass('newInner');
    $('.innerTen').addClass('newInner2');
  }

  function fifteenth() {
    $('.outer9').remove();
    $('.outer10').remove();
  }

  function sixteenth() {
    $( ".inner11").addClass('innerEleven').fadeIn().html( "<h5>BETTER</h5>" );
    $( ".inner12").addClass('innerTwelve').fadeIn().html( "<h5 class='smallerOnMobile'>COMMUNICATIONS</h5>" );
    $( ".inner12.little").addClass('innerTwelve').fadeIn().html( "<h5 style='font-size:.5em !important'>FOR YOU.</h5>" );
  }

  function seventeenth() {
    $('.innerEleven').addClass('newInner');
    $('.innerTwelve').addClass('newInner3');
  }

  function eighteenth() {
    $('.outer11').remove();
    $('.outer12').remove();

  }

  function nineteenth() {

    $( ".inner13").addClass('innerThirteen').fadeIn().html( "<h5>SEE HOW</h5>" );
    $( ".inner14").addClass('innerFourteen').fadeIn().html( "<h5>WE DO IT</h5>" );
    $( ".inner14.little").addClass('innerFourteen').fadeIn().html( "<img style='width:40px;padding-top: 25px;' src='images5/arrow.png'>" );
  }



  setTimeout(first, 0);
  setTimeout(second, 5000);
  setTimeout(third, 5500);
  setTimeout(fourth, 6000);
  setTimeout(fifth, 11000);
  setTimeout(sixth, 11500);
  setTimeout(seventh, 12000);
  setTimeout(eighth, 17000);
  setTimeout(ninth, 17500);
  setTimeout(tenth, 18000);
  setTimeout(eleventh, 23000);
  setTimeout(twelfth, 23500);
  setTimeout(thirteenth, 24000);
  setTimeout(fourteenth, 29000);
  setTimeout(fifteenth, 29500);
  setTimeout(sixteenth, 30000);
  setTimeout(seventeenth, 35000);
  setTimeout(eighteenth, 35500);
  setTimeout(nineteenth, 35600);
});
