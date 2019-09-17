setTimeout(function(){
$('#myCool').css('left', 'auto');
}, 100);


setTimeout(function(){
    $('#news').removeClass('flexing-scroll')
    $('#hiddenVideos').removeClass('flexing-scroll')
    $('#myCool').removeClass('animated slideInRight')
    $('#myCool').addClass('flexing-scroll')
}, 100);

setTimeout(function(){
    $("#myCool").animate({"left": -$("#myCool").width()}, 900);
}, 400);

setTimeout(function(){
      $('#myCool').hide();
}, 900);


      setTimeout(function(){


        $('#news').addClass('bottomShadow')
        $('#cool').removeClass('bottomShadow')

        $('#news').addClass('animated slideInRight').show();
      }, 400);
