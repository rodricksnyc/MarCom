$(document).ready(function () {

  //scroll magic
  $('a[href^="#top"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }

  });

  $('a[href^="#lastTop"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }

  });

  $('a[href^="#veryTop"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }

  });



  if ($(document).innerWidth() >= 992) {

    $('nav').hover(function() {
        $('.navigation').stop().slideToggle('1000');
    });

    console.log("nav desktop")
      $('nav.secondNav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();

        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });

      $('html').click(function() {
        $('.nav-dropdown').hide();
      });

      $('#nav-toggle').click(function() {
        $('nav.secondNav ul').slideToggle();
      });

      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });

}

if ($(document).innerWidth() <= 991) {
  console.log("nav mobile")


  $('#nav-toggle').click(function() {
    $('nav.secondNav ul.nav-list').slideToggle();
  });

  $('#test').click(function() {
    $('#testDrop').slideToggle();
  });

  $('#nuc').click(function() {
    $('#nucDrop').slideToggle();
  });

  $('#maint').click(function() {
    $('#maintDrop').slideToggle();
  });

  $('#rd').click(function() {
    $('#rdDrop').slideToggle();
  });

  $('#sm').click(function() {
    $('#smDrop').slideToggle();
  });

}


    $(".preloader-wrap").fadeOut(0);
    $("a").css({"cursor":"grab"});

//search bar

      $('#tipue_search_input').tipuesearch();

       $('input[type="text"]').val('');


       $('#delete').on('click', function(){


        console.log("efbewirbiwbeib")

        $('#tipModal').hide();



      })


      $('#tipModal').on('click', "#delete", function(){

        $('#tipModal').hide();

      })



$('.m-carousel').on('select.flickity', function( event, pointer, cellElement, cellIndex ) {

//custCaption1

if ($('.m-carousel__item.one').is('.is-selected'))   {

$('.m-carousel__item.two').off();
$('.m-carousel__item.three').off();
$('.m-carousel__item.four').off();
$('.m-carousel__item.five').off();
$('.m-carousel__item.six').off();
$('.m-carousel__item.seven').off();
$('.m-carousel__item.eight').off();
$('.m-carousel__item.nine').off();
$('.m-carousel__item.ten').off();

  console.log("cccccccccccccccc")
$('.m-carousel__item.one').hover(function() {
  $(".custCaption1").slideDown();
},
function(){
  $(".custCaption1").slideUp();
});

}

//custCaption2

 if ($('.m-carousel__item.two').is('.is-selected'))   {

   $('.m-carousel__item.one').off();
   $('.m-carousel__item.three').off();
   $('.m-carousel__item.four').off();
   $('.m-carousel__item.five').off();
   $('.m-carousel__item.six').off();
   $('.m-carousel__item.seven').off();
   $('.m-carousel__item.eight').off();
   $('.m-carousel__item.nine').off();
   $('.m-carousel__item.ten').off();

  console.log("wwwwwcccccccccccccccc")
  $('.m-carousel__item.two').hover(function(){
    $(".custCaption2").slideDown();
  },
  function(){
    $(".custCaption2").slideUp();
  });

}

//custCaption3

 if ($('.m-carousel__item.three').is('.is-selected'))   {
   $('.m-carousel__item.one').off();
   $('.m-carousel__item.two').off();

   $('.m-carousel__item.four').off();
   $('.m-carousel__item.five').off();
   $('.m-carousel__item.six').off();
   $('.m-carousel__item.seven').off();
   $('.m-carousel__item.eight').off();
   $('.m-carousel__item.nine').off();
   $('.m-carousel__item.ten').off();

    console.log("hhhhhhcccccccccccccccc")
$('.m-carousel__item.three').hover(function(){
  $(".custCaption3").slideDown();
},
function(){
  $(".custCaption3").slideUp();
});

}

//custCaption4

 if ($('.m-carousel__item.four').is('.is-selected'))   {

   $('.m-carousel__item.one').off();
   $('.m-carousel__item.two').off();
   $('.m-carousel__item.three').off();

   $('.m-carousel__item.five').off();
   $('.m-carousel__item.six').off();
   $('.m-carousel__item.seven').off();
   $('.m-carousel__item.eight').off();
   $('.m-carousel__item.nine').off();
   $('.m-carousel__item.ten').off();

  console.log("eeeeeeeecccccccccccccccc")
$('.m-carousel__item.four').hover(function(){
  $(".custCaption4").slideDown();
},
function(){
  $(".custCaption4").slideUp();
});

}

//custCaption5

if ($('.m-carousel__item.five').is('.is-selected'))   {

  $('.m-carousel__item.one').off();
  $('.m-carousel__item.two').off();
  $('.m-carousel__item.three').off();
  $('.m-carousel__item.four').off();

  $('.m-carousel__item.six').off();
  $('.m-carousel__item.seven').off();
  $('.m-carousel__item.eight').off();
  $('.m-carousel__item.nine').off();
  $('.m-carousel__item.ten').off();

  console.log("676776767cccccccccccccccc")

$('.m-carousel__item.five').hover(function(){
  $(".custCaption5").slideDown();
},
function(){
  $(".custCaption5").slideUp();
});

}


//custCaption6

if ($('.m-carousel__item.six').is('.is-selected'))   {

  $('.m-carousel__item.one').off();
  $('.m-carousel__item.two').off();
  $('.m-carousel__item.three').off();
  $('.m-carousel__item.four').off();

  $('.m-carousel__item.five').off();
  $('.m-carousel__item.seven').off();
  $('.m-carousel__item.eight').off();
  $('.m-carousel__item.nine').off();
  $('.m-carousel__item.ten').off();




$('.m-carousel__item.six').hover(function(){
  $(".custCaption6").slideDown();
},
function(){
  $(".custCaption6").slideUp();
});

}

//custCaption7

if ($('.m-carousel__item.seven').is('.is-selected'))   {


  $('.m-carousel__item.one').off();
  $('.m-carousel__item.two').off();
  $('.m-carousel__item.three').off();
  $('.m-carousel__item.four').off();

  $('.m-carousel__item.five').off();
  $('.m-carousel__item.six').off();
  $('.m-carousel__item.eight').off();
  $('.m-carousel__item.nine').off();
  $('.m-carousel__item.ten').off();


$('.m-carousel__item.seven').hover(function(){
  $(".custCaption7").slideDown();
},
function(){
  $(".custCaption7").slideUp();
});

}

//custCaption8

if ($('.m-carousel__item.eight').is('.is-selected'))   {


  $('.m-carousel__item.one').off();
  $('.m-carousel__item.two').off();
  $('.m-carousel__item.three').off();
  $('.m-carousel__item.four').off();
  $('.m-carousel__item.five').off();
  $('.m-carousel__item.six').off();

  $('.m-carousel__item.seven').off();

  $('.m-carousel__item.nine').off();
  $('.m-carousel__item.ten').off();


$('.m-carousel__item.eight').hover(function(){
  $(".custCaption8").slideDown();
},
function(){
  $(".custCaption8").slideUp();
});

}

//custCaption9

if ($('.m-carousel__item.nine').is('.is-selected'))   {

  $('.m-carousel__item.one').off();
  $('.m-carousel__item.two').off();
  $('.m-carousel__item.three').off();
  $('.m-carousel__item.four').off();
  $('.m-carousel__item.five').off();
  $('.m-carousel__item.six').off();

  $('.m-carousel__item.seven').off();

  $('.m-carousel__item.eight').off();
  $('.m-carousel__item.ten').off();


$('.m-carousel__item.nine').hover(function(){
  $(".custCaption9").slideDown();
},
function(){
  $(".custCaption9").slideUp();
});

}

//custCaption10

if ($('.m-carousel__item.ten').is('.is-selected'))   {


  $('.m-carousel__item.one').off();
  $('.m-carousel__item.two').off();
  $('.m-carousel__item.three').off();
  $('.m-carousel__item.four').off();
  $('.m-carousel__item.five').off();
  $('.m-carousel__item.six').off();

  $('.m-carousel__item.seven').off();

  $('.m-carousel__item.eight').off();
  $('.m-carousel__item.nine').off();



$('.m-carousel__item.ten').hover(function(){
  $(".custCaption10").slideDown();
},
function(){
  $(".custCaption10").slideUp();
});

}


});

  //my vertical carousel for videos
  $('.carousel .vertical .item').each(function(){


    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=1;i<2;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }

  });



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
        calendar: '#myCool'
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

  $("#myCool .close").on("click", function(){

    $(".moveThis").show();
    $(".moveThis2").show();
    $(".moveThis3").show();
    $('.slick-dots').show();


    $('#news').removeClass('animated slideInRight')
    $('#news').removeClass('flexing-scroll')
    $('#myCool').removeClass('animated slideInRight')

    $('#myCool').removeClass('flexing-scroll')

    $('#hiddenVideos').removeClass('animated slideInRight')
    $('#hiddenVideos').removeClass('flexing-scroll')


    $("html, body").animate({scrollTop: pageModule.getMiddleFixedHeight() + 100}, 1000);

    setTimeout(function(){
      $('#hiddenVideos').removeClass('bottomShadow');
      $('#myCool').removeClass('bottomShadow');
      $('#news').removeClass('bottomShadow');
    },1100);

    setTimeout(function(){
      $( "#myCool" ).slideToggle(1000);
      // $( "#news" ).slideToggle(1000);
      // $( "#hiddenVideos" ).slideToggle(1000);
    },100);


  });


  //closing videos
  $("#hiddenVideos .close3").click(function(){

    $(".moveThis").show();
    $(".moveThis2").show();
    $(".moveThis3").show();
    $('.slick-dots').show();


    $('#news').removeClass('animated slideInRight')
    $('#news').removeClass('flexing-scroll')
    $('#myCool').removeClass('animated slideInRight')

    $('#myCool').removeClass('flexing-scroll')

    $('#hiddenVideos').removeClass('animated slideInRight')
    $('#hiddenVideos').removeClass('flexing-scroll')


    $("html, body").animate({scrollTop: pageModule.getMiddleFixedHeight() + 100}, 1000);

    setTimeout(function(){
      $('#hiddenVideos').removeClass('bottomShadow');
      $('#myCool').removeClass('bottomShadow');
      $('#news').removeClass('bottomShadow');
    },1100);
    setTimeout(function(){
      $( "#hiddenVideos" ).slideToggle(1000);
      // $( "#news" ).slideToggle(1000);
      // $( "#myCool" ).slideToggle(1000);
    },100);


  });



  //closing the news div
  $("#news .close4").click(function(){

    $(".moveThis").show();
    $(".moveThis2").show();
    $(".moveThis3").show();
    $('.slick-dots').show();



    $('#news').removeClass('animated slideInRight')
    $('#news').removeClass('flexing-scroll')
    $('#myCool').removeClass('animated slideInRight')

    $('#myCool').removeClass('flexing-scroll')

    $('#hiddenVideos').removeClass('animated slideInRight')
    $('#hiddenVideos').removeClass('flexing-scroll')


    $("html, body").animate({scrollTop: pageModule.getMiddleFixedHeight() + 100}, 1000);

    setTimeout(function(){
      $('#hiddenVideos').removeClass('bottomShadow');
      $('#myCool').removeClass('bottomShadow');
      $('#news').removeClass('bottomShadow');
    },1100);
    setTimeout(function(){
      $( "#news" ).slideToggle(1000);
      // $( "#hiddenVideos" ).slideToggle(1000);
      // $( "#myCool" ).slideToggle(1000);
    },100);

  });

//opening the videos div


  $(document).on('click', ".openIt2", function(e) {

    console.log($('#hiddenVideos'))

    e.stopPropagation();



if ($('#news').is('.myNews', '.bottomShadow', '.animated', '.slideInRight') && $('#hiddenVideos').is('flexing-scroll'))  {


console.log('news is laeving and videos coming back in')

  $('#hiddenVideos').removeClass('flexing-scroll')
  $('#news').removeClass('animated slideInRight')

  $('#news').addClass('flexing-scroll')

  setTimeout(function(){

      $("#news").animate({"left": -$("#news").width()}, 600);
    // $('#hiddenVideos').addClass('animated slideInRight').show();
  }, 350);


  setTimeout(function(){
    $('#news').hide();
  }, 600);


  setTimeout(function(){
    $('#news').removeClass('bottomShadow')
    $('#hiddenVideos').addClass('bottomShadow')

    $('#hiddenVideos').addClass('animated slideInRight').show();
  }, 500);


}



else if ($('hiddenVideos').is('.bottomShadow', '.flexing-scroll') && $('#news').is('.myNews', '.animated', '.slideInRight')) {

  $('#hiddenVideos').removeClass('flexing-scroll')
  $('#news').removeClass('animated slideInRight')

  $('#news').addClass('flexing-scroll')


  setTimeout(function(){

  $("#news").animate({"left": -$("#myCool").width()}, 800);
  }, 50);

  setTimeout(function(){
    $('#news').hide();
  }, 800);


  setTimeout(function(){
    // $('#hiddenVideos').css('position','unset');
    $('#myCool').addClass('animated slideInRight').show();
  }, 200);


}



    else if

    ($('#hiddenVideos').is('.bottomShadow')) {

      console.log('videos has bottomShadow')

      $('#hiddenVideos').removeClass('flexing-scroll')
      $('#myCool').removeClass('animated slideInRight')

      $('#myCool').addClass('flexing-scroll')


      setTimeout(function(){

      $("#myCool").animate({"left": -$("#myCool").width()}, 800);
      }, 50);

      setTimeout(function(){
        $('#myCool').hide();
      }, 800);


      setTimeout(function(){
        // $('#hiddenVideos').css('position','unset');
        $('#hiddenVideos').addClass('animated slideInRight').show();
      }, 200);



    }

    else if

  (!$('#myCool').is('.bottomShadow')  && !$('#hiddenVideos').is('.bottomShadow') && !$('#news').is('.bottomShadow')) {

      console.log('videos does not have bottomShadow')

      $("#videos").css("pointer-events", "none");

      $(".moveThis").hide();
      $(".moveThis2").hide();
      $(".moveThis3").hide();
      $('.slick-dots').hide();
      $('#myCool').removeClass('animated slideDown').removeAttr('style');


      var divPosition = $('#anchorPoint').offset();
      $('html, body').animate({scrollTop: divPosition.top}, 1000);


      setTimeout(function(){
        $( "#hiddenVideos" ).slideToggle(1000);
        // $('#hiddenVideos').addClass('bottomShadow');
      },100);

      setTimeout(function(){

        $('#hiddenVideos').addClass('bottomShadow');
      },1000);

    }

    else if

  (!$('#myCool').is('.bottomShadow')  && !$('#hiddenVideos').is('.bottomShadow') &&  $('#myCool').is('.cool', '.flexing-scroll') && $('#news').is('.myNews' , '.bottomShadow' , '.animated' , '.slideInRight')) {
        console.log("fucker bitch")


        console.log('news is leaving and videos coming back in')


  setTimeout(function(){
        $('#news').css('left', 'auto');
        $('#myCool').css('left', 'auto');
        $('#myCool').removeClass('flexing-scroll')
      }, 50);


        setTimeout(function(){
          $('#hiddenVideos').removeClass('flexing-scroll')

          $('#news').removeClass('animated slideInRight')

          $('#news').addClass('flexing-scroll')
        }, 100);


          setTimeout(function(){

              $("#news").animate({"left": -$("#news").width()}, 900);
            // $('#hiddenVideos').addClass('animated slideInRight').show();
          }, 500);


          setTimeout(function(){
            $('#news').hide();
          }, 900);


          setTimeout(function(){
            $('#news').removeClass('bottomShadow')
            $('#hiddenVideos').addClass('bottomShadow')

            $('#hiddenVideos').addClass('animated slideInRight').show();
          }, 900);

      }

  else if

  ($('#myCool').is('.bottomShadow', '.cool', '.flexing-scroll') && $('#hiddenVideos').is('.flexing-scroll') && !$('#news').is('.bottomShadow'))  {

    console.log("my brain is fucked in the ass")

    setTimeout(function(){
    $('#myCool').css('left', 'auto');
  }, 100);


  setTimeout(function(){
    $('#hiddenVideos').removeClass('flexing-scroll')
    $('#myCool').removeClass('animated slideInRight')


    $('#myCool').addClass('flexing-scroll')
}, 100);


      setTimeout(function(){

    $("#myCool").animate(
      {
        "left": -$("#myCool").width()
      }
      , 900);
    }, 300);

      setTimeout(function(){
        $('#myCool').hide();
      }, 900);


      setTimeout(function(){
        // $('#hiddenVideos').css('position','unset');

        $('#myCool').removeClass('bottomShadow')
        $('#hiddenVideos').addClass('bottomShadow')

        $('#hiddenVideos').addClass('animated slideInRight').show();
      }, 600);



  }

else if


($('#myCool').is('.bottomShadow', '.cool', '.animated', '.slideInRight')  && $('#hiddenVideos').is('.flexing-scroll')) {

console.log("iam fucked")

setTimeout(function(){
$('#myCool').css('left', 'auto');
}, 100);


setTimeout(function(){
$('#hiddenVideos').removeClass('flexing-scroll')
$('#myCool').removeClass('animated slideInRight')
$('#myCool').addClass('flexing-scroll')
}, 100);


  setTimeout(function(){

$("#myCool").animate(
  {
    "left": -$("#myCool").width()
  }
  , 900);
}, 300);

  setTimeout(function(){
    $('#myCool').hide();
  }, 900);


  setTimeout(function(){
    // $('#hiddenVideos').css('position','unset');

    $('#myCool').removeClass('bottomShadow')
    $('#new').addClass('bottomShadow')

    $('#hiddenVideos').addClass('animated slideInRight').show();
  }, 600);

}


else if

($('#myCool').is('.cool', '.flexing-scroll') && $('#hiddenVideos').is('.bottomShadow' , '.animated' , '.slideInRight') && $('#news').is('.myNews', '.flexing-scroll')) {

console.log("sliding this bitch videos to left and sliding calendar back in fucker")
  setTimeout(function(){
  $('#hiddenVideos').css('left', 'auto');
  }, 100);



  setTimeout(function(){
  $('#myCool').removeClass('flexing-scroll')
  $('#hiddenVideos').removeClass('animated slideInRight')
  $('#hiddenVideos').addClass('flexing-scroll')
}, 100);


    setTimeout(function(){

  $("#hiddenVideos").animate(
    {
      "left": -$("#hiddenVideos").width()
    }
    , 900);
  }, 300);

    setTimeout(function(){
      $('#hiddenVideos').hide();
    }, 900);


    setTimeout(function(){

      $('#myCool').addClass('bottomShadow')
      $('#hiddenVideos').removeClass('bottomShadow')

      $('#myCool').addClass('animated slideInRight').show();
    }, 600);

}

else if

    ($('#myCool').is('.bottomShadow', '.cool', '.flexing-scroll') && !$('#hiddenVideos').is('.bottomShadow') && !$('#news').is('.bottomShadow'))   {

    console.log('mycool got the bottomShadow')


  // setTimeout(function(){
    $('#myCool').css('left', 'auto');
  // }, 50);



  // setTimeout(function(){
      $('#hiddenVideos').removeClass('flexing-scroll')
      $('#myCool').removeClass('animated slideInRight')


  // }, 50);

      // setTimeout(function(){
      $('#myCool').addClass('flexing-scroll')
      $("#myCool").animate({"left": -$("#myCool").width()}, 600);

    // }, 80);


      setTimeout(function(){
        $('#myCool').hide();
      }, 700);


      setTimeout(function(){
        $('#myCool').removeClass('bottomShadow')
        $('#hiddenVideos').addClass('bottomShadow')

        $('#hiddenVideos').addClass('animated slideInRight', 700).show();
      }, 50);

    }

    else if

    ($('#myCool').is('.cool' , '.flexing-scroll') && $('#news').is('.myNews' , '.flexing-scroll' , '.bottomShadow' , '.animated' , '.slideInRight') ) {

      console.log('this is some bullshit')

      setTimeout(function(){
        $('#myCool').css('left', 'auto');
        $('#news').css('left', 'auto');
        $('#myCool').removeClass('flexing-scroll')
        $('#news').removeClass('animated slideInRight').hide();
      }, 100);


        setTimeout(function(){
          $('#myCool').addClass('flexing-scroll')

        }, 400);


          setTimeout(function(){

              $("#myCool").animate({"left": -$("#myCool").width()}, 900);

          }, 600);


          setTimeout(function(){
            $('#myCool').hide();
          }, 900);


          setTimeout(function(){
            $('#news').removeClass('bottomShadow')
            $('#myCool').removeClass('bottomShadow')
            $('#hiddenVideos').addClass('bottomShadow')

            $('#hiddenVideos').addClass('animated slideInRight').show();
          }, 900);



    }



  });

//opening the calendar div

  $(document).on('click', ".openIt", function(e) {
    e.stopPropagation();

if

($('#myCool').is('.bottomShadow', '.cool', '.flexing-scroll')  && $('#news').is('.myNews' , '.bottomShadow' , '.animated' , '.slideInRight')) {

console.log("iam fucked")

setTimeout(function(){
$('#news').css('left', 'auto');
}, 100);


setTimeout(function(){
$('#myCool').removeClass('flexing-scroll')
$('#news').removeClass('animated slideInRight')


$('#news').addClass('flexing-scroll')
}, 100);


  setTimeout(function(){

$("#news").animate(
  {
    "left": -$("#news").width()
  }
  , 900);
}, 400);

  setTimeout(function(){
    $('#news').hide();
  }, 900);


  setTimeout(function(){

    $('#myCool').addClass('bottomShadow')
    $('#news').removeClass('bottomShadow')

    $('#myCool').addClass('animated slideInRight').show();
  }, 900);

}



else if ($('#myCool').is('.cool', '.flexing-scroll') && $('#hiddenVideos').is('.animated', '.slideInRight', '.bottomShadow'))  {

console.log('we are sliding videos over and calendar back into place')

setTimeout(function(){
$('#hiddenVideos').css('left', 'auto');
}, 100);



setTimeout(function(){
$('#myCool').removeClass('flexing-scroll')
$('#hiddenVideos').removeClass('animated slideInRight')
$('#hiddenVideos').addClass('flexing-scroll')
}, 100);


  setTimeout(function(){

$("#hiddenVideos").animate(
  {
    "left": -$("#hiddenVideos").width()
  }
  , 900);
}, 500);

  setTimeout(function(){
    $('#hiddenVideos').hide();
  }, 900);


  setTimeout(function(){

    $('#myCool').addClass('bottomShadow')
    $('#hiddenVideos').removeClass('bottomShadow')

    $('#myCool').addClass('animated slideInRight').show();
  }, 900);

}


else if

($('#myCool').is('.cool', '.flexing-scroll') && $('#hiddenVideos').is('.bottomShadow' , '.animated' , '.slideInRight') && $('#news').is('.myNews', '.flexing-scroll')) {

console.log("sliding this bitch videos to left and sliding calendar back in fucker")
  setTimeout(function(){
  $('#hiddenVideos').css('left', 'auto');
  }, 100);



  setTimeout(function(){
  $('#myCool').removeClass('flexing-scroll')
  $('#hiddenVideos').removeClass('animated slideInRight')
  $('#hiddenVideos').addClass('flexing-scroll')
}, 100);


    setTimeout(function(){

  $("#hiddenVideos").animate(
    {
      "left": -$("#hiddenVideos").width()
    }
    , 900);
  }, 500);

    setTimeout(function(){
      $('#hiddenVideos').hide();
    }, 900);


    setTimeout(function(){


      $('#myCool').addClass('bottomShadow')
      $('#hiddenVideos').removeClass('bottomShadow')

      $('#myCool').addClass('animated slideInRight').show();
    }, 900);

}


else if  ($('#myCool').is('.bottomShadow', '.cool', '.flexing-scroll') && $('#news').is('.myNews', '.animated', '.slideInRight') && $('#hiddenVideos').is('.animated', '.slideInRight', '.flexing-scroll')) {

  $('#hiddenVideos').removeClass('flexing-scroll')
  $('#myCool').removeClass('flexing-scroll')
  $('#news').removeClass('animated slideInRight')


  $('#news').addClass('flexing-scroll')

   console.log('do this shi until you get it right')

    setTimeout(function(){

  $("#news").animate(
    {
      "left": -$("#news").width()
    }
    , 800);
  }, 50);

    setTimeout(function(){
      $('#news').hide();
    }, 800);


    setTimeout(function(){



      $('#myCool').addClass('animated slideInRight').show();
    }, 200);

}

else if

  (!$('#myCool').is('.bottomShadow')  && !$('#hiddenVideos').is('.bottomShadow') && !$('#news').is('.bottomShadow')) {
        console.log('cool no bottomShadow')


        $("#videos").css("pointer-events", "all");


        $(".moveThis").hide();
        $(".moveThis2").hide();
        $(".moveThis3").hide();
        $('.slick-dots').hide();

        $('#myCool').removeAttr('style');
        $('#hiddenVideos').removeAttr('style');
        $('#news').removeAttr('style');


        var divPosition = $('#anchorPoint').offset();
        $('html, body').animate({scrollTop: divPosition.top}, 1000);



        setTimeout(function(){
          $( "#myCool" ).slideToggle(1000);
          $('#myCool').addClass('bottomShadow');

        },100);


      }

      else if

      ($('#hiddenVideos').is('.bottomShadow') && !$('#myCool').is('.bottomShadow') && !$('#news').is('.bottomShadow')) {
        console.log('videos has bottomShadow and myCool does not')

        $('#myCool').removeClass('flexing-scroll')
        $('#news').removeClass('animated slideInRight')

        $('#hiddenVideos').addClass('flexing-scroll')


      setTimeout(function(){
        $("#hiddenVideos").animate(
          {
            "left": -$("#hiddenVideos").width()
          }
          , 800);
        }, 50);

          setTimeout(function(){
            $('#hiddenVideos').hide();
          }, 800);


          setTimeout(function(){
            // $('#hiddenVideos').css('position','unset');
            $('#myCool').addClass('animated slideInRight').show();
          }, 200);

        }

else if



(!$('#myCool').is('.bottomShadow')  && !$('#hiddenVideos').is('.bottomShadow') && $('#news').is('.bottomShadow'))   {
  console.log('news has bottomShadow and myCool and videos does not')


setTimeout(function(){
    $('#news').css('left', 'auto');
  }, 100);


setTimeout(function(){
  $('#myCool').removeClass('flexing-scroll')
  $('#news').removeClass('animated slideInRight')
  $('#news').addClass('flexing-scroll')
}, 100);


  setTimeout(function(){
  $("#news").animate(
    {
      "left": -$("#news").width()
    }
    , 900);
  }, 400);



    setTimeout(function(){
      $('#news').hide();
    }, 900);


    setTimeout(function(){


          $('#myCool').addClass('bottomShadow')
          $('#news').removeClass('bottomShadow')
         $('#myCool').addClass('animated slideInRight').show();
    }, 900);

  }

else if

  ($('#myCool').is('.cool' , '.bottomShadow', '.flexing-scroll') && $('#news').is('.myNews', '.bottomShadow' , '.animated' , '.slideInRight')) {

  console.log("fuck me in the ass")


  setTimeout(function(){
  $('#news').css('left', 'auto');
}, 100);


  setTimeout(function(){
      $('#myCool').removeClass('flexing-scroll')
      $('#news').removeClass('animated slideInRight')
      $('#news').addClass('flexing-scroll')
  }, 100);

  setTimeout(function(){

      $("#news").animate({"left": -$("#news").width()}, 900);
  }, 400);

  setTimeout(function(){
        $('#news').hide();
  }, 900);


        setTimeout(function(){
          $('#news').removeClass('bottomShadow')
          $('#hiddenVideos').addClass('bottomShadow')

          $('#hiddenVideos').addClass('animated slideInRight').show();
        }, 400);

  }

  else if

  ($('#myCool').is('.cool' , '.bottomShadow', '.flexing-scroll') && !$('#news').is('.myNews', '.bottomShadow' , '.animated' , '.slideInRight')) {

  console.log("this is fucking crazy")


  setTimeout(function(){
  $('#news').css('left', 'auto');
}, 100);


  setTimeout(function(){
      $('#myCool').removeClass('flexing-scroll')

      $('#news').removeClass('animated slideInRight')


      $('#news').addClass('flexing-scroll')
  }, 100);

  setTimeout(function(){

      $("#news").animate({"left": -$("#news").width()}, 900);
  }, 300);

  setTimeout(function(){
        $('#news').hide();
  }, 900);


        setTimeout(function(){

          $('#news').removeClass('bottomShadow')
          $('#hiddenVideos').addClass('bottomShadow')

          $('#hiddenVideos').addClass('animated slideInRight').show();
        }, 400);

  }

  });

//opening the news div
  $(document).on('click', ".openIt3", function(e) {

  if (!$('#news').is('.bottomShadow') && !$('#myCool').is('.cool', '.bottomShadow', '.slideInRight', '.animated')) {

  console.log('news no bottomShadow and open')

    $(".moveThis").hide();
    $(".moveThis2").hide();
    $(".moveThis3").hide();
    $('.slick-dots').hide();
    // $('#myCool').removeClass('animated slideDown').removeAttr('style');


    $('#myCool').removeAttr('style');
    $('#hiddenVideos').removeAttr('style');
    $('#news').removeAttr('style');

    var divPosition = $('#anchorPoint').offset();
    $('html, body').animate({scrollTop: divPosition.top}, 1000);


    setTimeout(function(){
      $( "#news" ).slideToggle(1000);
      $('#news').addClass('bottomShadow');
    },100);

}


if (!$('#news').is('.bottomShadow') && !$('#hiddenVideos').is('.bottomShadow') && !$('#myCool').is('.bottomShadow')) {

console.log('news no bottomShadow and open')

  $(".moveThis").hide();
  $(".moveThis2").hide();
  $(".moveThis3").hide();
  $('.slick-dots').hide();
  // $('#myCool').removeClass('animated slideDown').removeAttr('style');


  $('#myCool').removeAttr('style');
  $('#hiddenVideos').removeAttr('style');
  $('#news').removeAttr('style');

  var divPosition = $('#anchorPoint').offset();
  $('html, body').animate({scrollTop: divPosition.top}, 1000);


  setTimeout(function(){
    $( "#news" ).slideToggle(1000);
    $('#news').addClass('bottomShadow');
  },100);

}


else if

($('#news').is('.myNews' , '.bottomShadow', '.animated', '.slideInRight') && $('#hiddenVideos').is('.flexing-scroll') && !$('#myCool').is('.cool' , '.bottomShadow', '.animated' , '.slideInRight')) {

  console.log('vidoes sliding left news sliding in the fucker')

  setTimeout(function(){

  $('#news').css('left', 'auto');
}, 100);


  setTimeout(function(){
  $('#hiddenVideos').removeClass('flexing-scroll')
  $('#news').removeClass('animated slideInRight')
  $('#news').addClass('flexing-scroll')
  }, 100);

  setTimeout(function(){

  $("#news").animate({"left": -$("#news").width()}, 900);
  }, 300);

  setTimeout(function(){
    $('#news').hide();
  }, 900);


  setTimeout(function(){
    // $('#hiddenVideos').css('position','unset');
      $('#news').removeClass('bottomShadow');
      $('#hiddenVideos').addClass('bottomShadow');


    $('#hiddenVideos').addClass('animated slideInRight').show();
  }, 400);


}

else if ($('#myCool').is('.cool', '.bottomShadow', '.animated', '.slideInRight') && $('#hiddenVideos').is('.flexing-scroll')) {

console.log('slide nes into calendar palce')

setTimeout(function(){
$('#myCool').css('left', 'auto');
$('#news').css('left', 'auto');
}, 100);


setTimeout(function(){
$('#hiddenVideos').removeClass('flexing-scroll')
$('#myCool').removeClass('animated slideInRight')


$('#myCool').addClass('flexing-scroll')
}, 100);

setTimeout(function(){

$("#myCool").animate({"left": -$("#myCool").width()}, 900);
}, 300);

setTimeout(function(){
  $('#myCool').hide();
}, 900);


setTimeout(function(){
  // $('#hiddenVideos').css('position','unset');
    $('#news').addClass('bottomShadow');
    $('#calendar').addClass('bottomShadow');
    $('#myCool').removeClass('bottomShadow');

  $('#news').addClass('animated slideInRight').show();
}, 400);


}



else if($('#news').is('.bottomShadow', '.cool', '.flexing-scroll')) {

  console.log('no clue what this is')

$('#news').removeClass('flexing-scroll')
$('#myCool').removeClass('animated slideInRight')


$('#myCool').addClass('flexing-scroll')


setTimeout(function(){

$("#myCool").animate({"left": -$("#myCool").width()}, 800);
}, 50);

setTimeout(function(){
  $('#myCool').hide();
}, 800);


setTimeout(function(){
  // $('#hiddenVideos').css('position','unset');
  $('#news').addClass('animated slideInRight').show();
}, 200);

}

else if

($('#myCool').is('.bottomShadow')  || $('#myCool').is('.bottomShadow', '.animated', '.slideInRight') && !$('#news').is('.bottomShadow')) {

console.log("so fucking confused")


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


}

else if

(!$('#myCool').is('.bottomShadow') && $('#news').is('.flexing-scroll') && $('#hiddenVideos').is('.animated' , '.slideInRight')) {

    console.log('vidoes sliding left news sliding in the fucker')

  setTimeout(function(){
  $('#hiddenVideos').css('left', 'auto');
  $('#news').css('left', 'auto');
}, 100);


  setTimeout(function(){
  $('#hiddenVideos').removeClass('animated slideInRight')

  $('#hiddenVideos').addClass('flexing-scroll')
}, 100);



  setTimeout(function(){
  $("#hiddenVideos").animate({"left": -$("#hiddenVideos").width()}, 900);
  }, 300);

  setTimeout(function(){
    $('#hiddenVideos').hide();
  }, 900);


  setTimeout(function(){
    // $('#hiddenVideos').css('position','unset');
    $('#news').addClass('bottomShadow')
    $('#hiddenVideos').removeClass('bottomShadow')

    $('#news').addClass('animated slideInRight').show();
  }, 400);


}

else if

($('#news').is('.myNews' , '.bottomShadow', '.animated', '.slideInRight') && $('#hiddenVideos').is('.flexing-scroll'))


{

console.log("calendarBitch")
  setTimeout(function(){
  $('#hiddenVideos').css('left', 'auto');
  $('#myCool').css('left', 'auto');
  }, 100);



  setTimeout(function(){
  $('#hiddenVideos').removeClass('flexing-scroll')
  $('#myCool').removeClass('animated slideInRight')
  $('#news').addClass('flexing-scroll')
}, 100);


    setTimeout(function(){

  $("#myCool").animate(
    {
      "left": -$("#myCool").width()
    }
    , 900);
  }, 300);

    setTimeout(function(){
      $('#myCool').hide();
    }, 900);


    setTimeout(function(){
    $('#myCool').removeClass('bottomShadow')
      $('#news').addClass('bottomShadow')

      $('#news').addClass('animated slideInRight').show();
    }, 400);


}

else if

($('#myCool').is('.cool' , '.bottomShadow')) {

  console.log('slide news into cool place')


  setTimeout(function(){
  $('#hiddenVideos').css('left', 'auto');
  $('#news').css('left', 'auto');
}, 100);


  setTimeout(function(){
  $('#hiddenVideos').removeClass('animated slideInRight')

  $('#hiddenVideos').addClass('flexing-scroll')
}, 100);



 setTimeout(function(){
  $("#hiddenVideos").animate({"left": -$("#hiddenVideos").width()}, 900);
}, 300);

  setTimeout(function(){
    $('#hiddenVideos').hide();
  }, 900);


  setTimeout(function(){

    $('#news').addClass('bottomShadow')
    $('#hiddenVideos').removeClass('bottomShadow')

    $('#news').addClass('animated slideInRight').show();
  }, 400);


}

else if

 ($('#hiddenVideos').is('.bottomShadow'))  {

  console.log('slide news into video place')


   $('#myCool').removeClass('flexing-scroll')

   $('#hiddenVideos').addClass('flexing-scroll')


  setTimeout(function(){
   $("#hiddenVideos").animate({"left": -$("#hiddenVideos").width()}, 500);
  }, 100);

   setTimeout(function(){
     $('#hiddenVideos').hide();
   }, 400);


   setTimeout(function(){

     $('#news').addClass('animated slideInRight').show();
   }, 150);


 }

  });



          //flickity carousel
          var elem = document.querySelector('.m-carousel')
          if(elem) {
            var flkty = new Flickity( elem, {
              wrapAround: true,
              pageDots: false,
              adaptiveHeight: false,
              lazyLoad: 2,
              arrowShape:'M27.1,46.45a5.07,5.07,0,0,0,0,7.12L55.74,82.21a5.08,5.08,0,0,0,7.14,0h0a5,5,0,0,0,0-7.14l-25-25,25-25a5.07,5.07,0,0,0,0-7.14h0a5,5,0,0,0-7.14,0Z'
            });
          }

          //navigation bar animations aka the top header menu animations
          $('.social').click(function(e) {
            e.preventDefault();
            $('.makeToggle').hide();
            $('.icon').addClass('easeIt').animate({ width: 'show' }, 600);

            setTimeout(function(){
              $(".icon").addClass("addIt");
            }, 400);
            if ($('#funStuff').hasClass('icon noShow2 easeIt addIt')) {
              console.log('fuck')
              $('.hideAgain2').addClass('away');
            } else if (!$('#funStuff').hasClass('icon noShow2 easeIt addIt')) {
              console.log('fuck it')
              $('.hideAgain2').removeClass('away');
              // $('.hideAgain2').addClass('back');
            }
          });

          $('#searchIt').click(function(e) {
            e.preventDefault();
            if ($('#funStuff').hasClass('icon noShow2 easeIt addIt')) {
              console.log('fuck')
              $('.hideAgain2').addClass('away');
            } else if (!$('#funStuff').hasClass('icon noShow2 easeIt addIt')) {
              console.log('fuck it')
              $('.hideAgain2').removeClass('away');
              // $('.hideAgain2').addClass('back');
            }
          });

          $('.hideAgain').click(function(e){
            e.preventDefault();
            setTimeout(function(){
              $(".icon").removeClass("addIt");
            }, 400);
            $('.fas.fa-search').removeClass('searchGray');
            $('#removeIt').show();
            $('.icon').animate({ width: 'hide' }, {"height" : "0px"}, 1000);
            $('.bubble').animate({ width: 'hide' }, {"height" : "0px"}, 800);
            $(".makeToggle").delay('600').fadeIn();
          })
          $('.searchIt').click(function() {
            $('#removeIt').hide();
            $('.fas.fa-search').addClass('searchGray')
            $('.makeToggle').hide();
            $('.bubble').animate({ width: 'show' }, 800);
          });
          $('.hideAgain2').click(function(){
            $('.fas.fa-search').removeClass('searchGray')
            $('#removeIt').show();
            $('.bubble').animate({ width: 'hide' }, {"height" : "0px"}, 800);
            $(".makeToggle").delay('600').fadeIn();
          })


          $('.searchIt').mouseenter(function() {
            $('.fas.fa-search').addClass('searchWhite')

          })

          $('.searchIt').mouseleave(function() {

            $('.fas.fa-search').removeClass('searchWhite')

          })






          $('.moveThis').mouseover(function(){
            setTimeout(function() {
              $('.block1').addClass('block1Thing');
              $('.block1').addClass('animated fadeInUp');
            }, 100);
            setTimeout(function() {
              $('.block2').addClass('block2Thing');
              $('.block2').addClass('animated fadeInUp');
            }, 350);
            setTimeout(function() {
              $('.block3').addClass('block3Thing');
              $('.block3').addClass('animated fadeInUp');
            }, 700);

            setTimeout(function() {
              $('.block14').addClass('block14Thing');
              $('.block14').addClass('animated fadeInUp');
            }, 1200);


              setTimeout(function() {
                $('.block44').addClass('block44Thing');
                $('.block44').addClass('animated fadeInUp');
              }, 1200);

            setTimeout(function() {
              $('.block15').addClass('block15Thing');
              $('.block15').addClass('animated fadeInUp');
            },1600);



            setTimeout(function() {
              $('.trans--grow.hr1').addClass('grow');
            }, 1800);
          });


          //make the p tags float up

          $('.center').mouseover(function(){
            setTimeout( function() {

              $('.block4').addClass('animated fadeInUpBig');

            }, 0);
          });


          $('.m-carousel').mouseover(function(){
            setTimeout( function() {
              $('.block5').addClass('animated fadeInUpBig');

            }, 0);
          });

          $('.videoWrapperACQ').mouseover(function(){
            setTimeout( function() {
              $('.block6').addClass('animated fadeInUpBig');

            }, 1000);
          });

          $('.diversity').mouseover(function(){
            setTimeout( function() {
              $('.block13').addClass('animated fadeInUpBig');

            }, 0);
          });

          $('#map').mouseover(function(){
            setTimeout( function() {
              $('.block16').addClass('animated fadeInUpBig');

            }, 0);
          });


          $('.frontier').mouseover(function(){
            setTimeout( function() {
              $('.block17').addClass('animated fadeInUpBig');

            }, 0);
          });

          $('.scrollMagic').mouseover(function(){
            setTimeout( function() {
              $('.block18').addClass('animated fadeInUpBig');

            }, 0);
          });


          $('.blacker2').mouseover(function(){
            setTimeout( function() {
              $('.block10').addClass('animated fadeInUpBig');

            }, 0);
          });


          //text aka letter animations
          var startIt = $('.moveThis');
          var $tlt1 = $('.tlt1').textillate({
            autoStart: false,
            selector: '.tlt1',
            loop: false,
            minDisplayTime: 1000,
            initialDelay: 500,
            in: {
              effect: 'fadeInLeft',
              delayScale: 5,
              delay: 15,
              sync: false,
              shuffle: true,
              reverse: false,
              callback: function () {}
            },
            type: 'char'
          });
          startIt.one('mouseenter', function () { $tlt1.textillate('start'); });
          startIt.one('mouseout', function () { $tlt1.textillate('stop'); });
          var startIt2 = $('.moveThis');
          var $tlt2 = $('.tlt2').textillate({
            autoStart: false,
            selector: '.tlt2',
            loop: false,
            minDisplayTime: 1000,
            initialDelay: 1000,
            in: {
              effect: 'fadeInLeft',
              delayScale: 5,
              delay: 15,
              sync: false,
              shuffle: true,
              reverse: false,
              callback: function () {}
            },
            type: 'char'
          });
          startIt2.one('mouseenter', function () { $tlt2.textillate('start'); });
          startIt2.one('mouseout', function () { $tlt2.textillate('stop'); });
          var startIt3 = $('.moveThis');
          var $tlt3 = $('.tlt3').textillate({
            autoStart: false,
            selector: '.tlt3',
            loop: false,
            minDisplayTime: 1000,
            initialDelay: 1500,
            in: {
              effect: 'fadeInLeft',
              delayScale: 5,
              delay: 15,
              sync: false,
              shuffle: true,
              reverse: false,
              callback: function () {}
            },
            type: 'char'
          });
          startIt3.one('mouseenter', function () { $tlt3.textillate('start'); });
          startIt3.one('mouseout', function () { $tlt3.textillate('stop'); });
          //   if ($('.block1').hasClass('animated' && 'fadeInUp')) {
          //     console.log('please')
          //   $('.trans--grow').addClass('grow');
          //
          // } else if (!$('.block1').hasClass('animated' && 'fadeInUp')) {
          //     console.log('hello')
          //
          //
          //   }

          setTimeout(function() {
            $('#menu2').append('<li class="slide-line"></li>');
            $('#menu2 li.slide-line').show();
          }, 0);

          // animate slide-line on click
          jQuery(document).on('mouseenter', '#menu2 li a', function () {

                  var $this = jQuery(this),
                      // get offset of hovered this
                      offset = $this.offset(),
                      //find the offset of the wrapping div
                      offsetBody = jQuery('#box2').offset();

                  // GSAP animate to clicked menu item
                  TweenMax.to(jQuery('#menu2 .slide-line'), 0.5, {
                    css:{
                      width: $this.outerWidth() - 30 +'px',
                      left: (offset.left-offsetBody.left) + 15 +'px'
                    },
                    overwrite:"all",
                    // easing for overshoot
                    ease:Back.easeOut
                  });

          }).on('mouseleave', '#menu2 li', function () {

                  var $this = jQuery(this),
                      // get the active menu selector
                      $active = $this.parent().find("a.active"),
                      // get offset of active menu item
                      offset = $active.offset(),
                      //find the offset of the wrapping div
                      offsetBody = jQuery('#box2').offset();

                  // GSAP animate to clicked menu item
                  TweenMax.to(jQuery('#menu2 .slide-line'), 0.5, {
                    css:{
                      width: $active.outerWidth() - 30 + 'px',
                      left: (offset.left-offsetBody.left)+ 15 +'px'
                    },
                    overwrite:"all",
                    ease:Power4.easeInOut
                  });
          });


          jQuery('#menu2 > li a.highlight').first().trigger("click");
          $("a.highlight").on("click", function(e) {
            $("a.highlight").removeClass("darker");
            console.log("yo again");
            $(this).addClass("darker");
          });
          $( 'ul.nav li' ).on( 'click', function() {
            console.log("wtf");
            $( this ).parent().find( 'darker' ).removeClass( 'darker' );
            $( this ).addClass( 'darker' );
          });


          //ajax calls for the image downloads


          $('#getFile6').on('click', function () {
            $.ajax({
              url: 'http://www.elizabethrodricks.com/images5/plane0.jpg',
              method: 'GET',
              xhrFields: {
                responseType: 'blob'
              },
              success: function (data) {
                var a = document.createElement('a');
                var url = window.URL.createObjectURL(data);
                a.href = url;
                a.download = 'images5/plane0.jpg';
                a.click();
                window.URL.revokeObjectURL(url);
              }
            });
          });

       $('#getFile7').on('click', function () {
            $.ajax({
              url: 'http://www.elizabethrodricks.com/images5/plane2.jpg',
              method: 'GET',
              xhrFields: {
                responseType: 'blob'
              },
              success: function (data) {
                var a = document.createElement('a');
                var url = window.URL.createObjectURL(data);
                a.href = url;
                a.download = 'images5/plane2.jpg';
                a.click();
                window.URL.revokeObjectURL(url);
              }
            });
          });

      $('#getFile8').on('click', function () {
               $.ajax({
                 url: 'http://www.elizabethrodricks.com/images5/plane6.jpg',
                 method: 'GET',
                 xhrFields: {
                   responseType: 'blob'
                 },
                 success: function (data) {
                   var a = document.createElement('a');
                   var url = window.URL.createObjectURL(data);
                   a.href = url;
                   a.download = 'images5/plane6.jpg';
                   a.click();
                   window.URL.revokeObjectURL(url);
                 }
               });
             });
         $('#getFile9').on('click', function () {
                      $.ajax({
                        url: 'http://www.elizabethrodricks.com/images5/plane.jpg',
                        method: 'GET',
                        xhrFields: {
                          responseType: 'blob'
                        },
                        success: function (data) {
                          var a = document.createElement('a');
                          var url = window.URL.createObjectURL(data);
                          a.href = url;
                          a.download = 'images5/plane.jpg';
                          a.click();
                          window.URL.revokeObjectURL(url);
                        }
                      });
                    });

            $('#getFile10').on('click', function () {
                     $.ajax({
                       url: 'http://www.elizabethrodricks.com/images5/plane8.jpg',
                       method: 'GET',
                       xhrFields: {
                         responseType: 'blob'
                       },
                       success: function (data) {
                         var a = document.createElement('a');
                         var url = window.URL.createObjectURL(data);
                         a.href = url;
                         a.download = 'images5/plane8.jpg';
                         a.click();
                         window.URL.revokeObjectURL(url);
                       }
                     });
                   });

           $('#getFile11').on('click', function () {
             $.ajax({
               url: 'http://www.elizabethrodricks.com/images5/cargo.jpg',
               method: 'GET',
               xhrFields: {
                 responseType: 'blob'
               },
               success: function (data) {
                 var a = document.createElement('a');
                 var url = window.URL.createObjectURL(data);
                 a.href = url;
                 a.download = 'images5/cargo.jpg';
                 a.click();
                 window.URL.revokeObjectURL(url);
               }
             });
           });

           $('#getFile12').on('click', function () {
             $.ajax({
               url: 'http://www.elizabethrodricks.com/images5/plane5.jpg',
               method: 'GET',
               xhrFields: {
                 responseType: 'blob'
               },
               success: function (data) {
                 var a = document.createElement('a');
                 var url = window.URL.createObjectURL(data);
                 a.href = url;
                 a.download = 'images5/plane5.jpg';
                 a.click();
                 window.URL.revokeObjectURL(url);
               }
             });
           });
           $('#getFile13').on('click', function () {
             $.ajax({
               url: 'http://www.elizabethrodricks.com/images5/plane9.jpg',
               method: 'GET',
               xhrFields: {
                 responseType: 'blob'
               },
               success: function (data) {
                 var a = document.createElement('a');
                 var url = window.URL.createObjectURL(data);
                 a.href = url;
                 a.download = 'images5/plane9.jpg';
                 a.click();
                 window.URL.revokeObjectURL(url);
               }
             });
           });
           $('#getFile14').on('click', function () {
             $.ajax({
               url: 'http://www.elizabethrodricks.com/images5/plane11.jpg',
               method: 'GET',
               xhrFields: {
                 responseType: 'blob'
               },
               success: function (data) {
                 var a = document.createElement('a');
                 var url = window.URL.createObjectURL(data);
                 a.href = url;
                 a.download = 'images5/plane11.jpg';
                 a.click();
                 window.URL.revokeObjectURL(url);
               }
             });
           });
           $('#getFile15').on('click', function () {
             $.ajax({
               url: 'http://www.elizabethrodricks.com/images5/plane4.jpg',
               method: 'GET',
               xhrFields: {
                 responseType: 'blob'
               },
               success: function (data) {
                 var a = document.createElement('a');
                 var url = window.URL.createObjectURL(data);
                 a.href = url;
                 a.download = 'images5/plane4.jpg';
                 a.click();
                 window.URL.revokeObjectURL(url);
               }
             });
           });


        //flickity modal 1

        var model = document.getElementById('mymodel');


        var img = document.getElementById('myImg');
        var modelImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function(){


          model.style.display = "block";
          modelImg.src = this.src;
          captionText.innerHTML = this.alt;

          $('.flickity-button-icon').hide();
          $('.navbar').hide();
          $(".moveThis").hide();
          $(".moveThis2").hide();
          $(".moveThis3").hide();
          $(".scrollMagic").hide();

        }


        var span = document.getElementsByClassName("closeThis")[0];
        var bigPic = document.getElementsByClassName("bigClose")[0];

        span.onclick = function() {
          model.style.display = "none";

          $('.flickity-button-icon').show();
          $('.navbar').show();
          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();
          $(".scrollMagic").show();

        }

        bigPic.onclick = function() {
          model.style.display = "none";

          $('.flickity-button-icon').show();
          $('.navbar').show();
          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();
          $(".scrollMagic").show();

        }

        //flickity modal 2

        var model2 = document.getElementById('mymodel2');


        var img2 = document.getElementById('myImg2');
        var model2Img = document.getElementById("img02");
        var caption2Text = document.getElementById("caption2");
        img2.onclick = function(){


          model2.style.display = "block";
          model2Img.src = this.src;
          caption2Text.innerHTML = this.alt;

          $('.flickity-button-icon').hide();
          $('.navbar').hide();

          $(".moveThis").hide();
          $(".moveThis2").hide();
          $(".moveThis3").hide();
          $(".scrollMagic").hide();
        }

        var span2 = document.getElementsByClassName("closeThis2")[0];
        var bigPic2 = document.getElementsByClassName("bigClose2")[0];

        span2.onclick = function() {
          model2.style.display = "none";

          $('.flickity-button-icon').show();
          $('.navbar').show();

          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();
          $(".scrollMagic").show();

        }


        bigPic2.onclick = function() {
          model2.style.display = "none";

          $('.flickity-button-icon').show();
          $('.navbar').show();

          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();
          $(".scrollMagic").show();

        }



        //flickity modal 3

        var model3 = document.getElementById('mymodel3');


        var img3 = document.getElementById('myImg3');
        var model3Img = document.getElementById("img03");
        var caption3Text = document.getElementById("caption3");
        img3.onclick = function(){


          model3.style.display = "block";
          model3Img.src = this.src;
          caption3Text.innerHTML = this.alt;

          $('.flickity-button-icon').hide();
          $('.navbar').hide();
          $(".moveThis").hide();
          $(".moveThis2").hide();
          $(".moveThis3").hide();
          $(".scrollMagic").hide();
        }

        var span3 = document.getElementsByClassName("closeThis3")[0];
        var bigPic3 = document.getElementsByClassName("bigClose3")[0];

        span3.onclick = function() {
          model3.style.display = "none";

          $('.flickity-button-icon').show();
          $('.navbar').show();

          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();
          $(".scrollMagic").show();
        }

        bigPic3.onclick = function() {
          model3.style.display = "none";

          $('.flickity-button-icon').show();
          $('.navbar').show();

          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();
          $(".scrollMagic").show();
        }

        //flickity modal 4

        var model4 = document.getElementById('mymodel4');


        var img4 = document.getElementById('myImg4');
        var model4Img = document.getElementById("img04");
        var caption4Text = document.getElementById("caption4");
        img4.onclick = function(){


          model4.style.display = "block";
          model4Img.src = this.src;
          caption4Text.innerHTML = this.alt;

          $('.flickity-button-icon').hide();
          $('.navbar').hide();
          $(".moveThis").hide();
          $(".moveThis2").hide();
          $(".moveThis3").hide();
          $(".scrollMagic").hide();
        }

        var span4 = document.getElementsByClassName("closeThis4")[0];
        var bigPic4 = document.getElementsByClassName("bigClose4")[0];

        span4.onclick = function() {
          model4.style.display = "none";

          $('.flickity-button-icon').show();
          $('.navbar').show();

          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();
          $(".scrollMagic").show();


        }

        bigPic4.onclick = function() {
          model4.style.display = "none";

          $('.flickity-button-icon').show();
          $('.navbar').show();

          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();
          $(".scrollMagic").show();

        }

        //flickity modal 5

        var model5 = document.getElementById('mymodel5');


        var img5 = document.getElementById('myImg5');
        var model5Img = document.getElementById("img05");
        var caption5Text = document.getElementById("caption5");
        img5.onclick = function(){


          model5.style.display = "block";
          model5Img.src = this.src;
          caption5Text.innerHTML = this.alt;

          $('.flickity-button-icon').hide();
          $('.navbar').hide();
          $(".moveThis").hide();
          $(".moveThis2").hide();
          $(".moveThis3").hide();
          $(".scrollMagic").hide();

        }

        var span5 = document.getElementsByClassName("closeThis5")[0];
        var bigPic5 = document.getElementsByClassName("bigClose5")[0];

        span5.onclick = function() {
          model5.style.display = "none";


          $('.flickity-button-icon').show();
          $('.navbar').show();

          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();
          $(".scrollMagic").show();
        }

        bigPic5.onclick = function() {
          model5.style.display = "none";


          $('.flickity-button-icon').show();
          $('.navbar').show();

          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();
          $(".scrollMagic").show();
        }

// //flickity modal 6
var model6 = document.getElementById('mymodel6');


var img6 = document.getElementById('myImg6');
var model6Img = document.getElementById("img06");
var caption6Text = document.getElementById("caption6");
img6.onclick = function(){


  model6.style.display = "block";
  model6Img.src = this.src;
  caption6Text.innerHTML = this.alt;

  $('.flickity-button-icon').hide();
  $('.navbar').hide();
  $(".moveThis").hide();
  $(".moveThis2").hide();
  $(".moveThis3").hide();
  $(".scrollMagic").hide();

}

var span6 = document.getElementsByClassName("closeThis6")[0];
var bigPic6 = document.getElementsByClassName("bigClose6")[0];

span6.onclick = function() {
  model6.style.display = "none";


  $('.flickity-button-icon').show();
  $('.navbar').show();

  $(".moveThis").show();
  $(".moveThis2").show();
  $(".moveThis3").show();
  $(".scrollMagic").show();
}

bigPic6.onclick = function() {
  model6.style.display = "none";


  $('.flickity-button-icon').show();
  $('.navbar').show();

  $(".moveThis").show();
  $(".moveThis2").show();
  $(".moveThis3").show();
  $(".scrollMagic").show();
}

//flickity modal 7
var model7 = document.getElementById('mymodel7');


var img7 = document.getElementById('myImg7');
var model7Img = document.getElementById("img07");
var caption7Text = document.getElementById("caption7");
img7.onclick = function(){


  model7.style.display = "block";
  model7Img.src = this.src;
  caption7Text.innerHTML = this.alt;

  $('.flickity-button-icon').hide();
  $('.navbar').hide();
  $(".moveThis").hide();
  $(".moveThis2").hide();
  $(".moveThis3").hide();
  $(".scrollMagic").hide();

}

var span7 = document.getElementsByClassName("closeThis7")[0];
var bigPic7 = document.getElementsByClassName("bigClose7")[0];

span7.onclick = function() {
model7.style.display = "none";


  $('.flickity-button-icon').show();
  $('.navbar').show();

  $(".moveThis").show();
  $(".moveThis2").show();
  $(".moveThis3").show();
  $(".scrollMagic").show();
}

bigPic7.onclick = function() {
model7.style.display = "none";


  $('.flickity-button-icon').show();
  $('.navbar').show();

  $(".moveThis").show();
  $(".moveThis2").show();
  $(".moveThis3").show();
  $(".scrollMagic").show();
}

//flickity modal 8

var model8 = document.getElementById('mymodel8');


var img8 = document.getElementById('myImg8');
var model8Img = document.getElementById("img08");
var caption8Text = document.getElementById("caption8");
img8.onclick = function(){


  model8.style.display = "block";
  model8Img.src = this.src;
  caption8Text.innerHTML = this.alt;

  $('.flickity-button-icon').hide();
  $('.navbar').hide();
  $(".moveThis").hide();
  $(".moveThis2").hide();
  $(".moveThis3").hide();
  $(".scrollMagic").hide();

}

var span8 = document.getElementsByClassName("closeThis8")[0];
var bigPic8 = document.getElementsByClassName("bigClose8")[0];

span8.onclick = function() {
model8.style.display = "none";


  $('.flickity-button-icon').show();
  $('.navbar').show();

  $(".moveThis").show();
  $(".moveThis2").show();
  $(".moveThis3").show();
  $(".scrollMagic").show();
}

bigPic8.onclick = function() {
  model8.style.display = "none";


  $('.flickity-button-icon').show();
  $('.navbar').show();

  $(".moveThis").show();
  $(".moveThis2").show();
  $(".moveThis3").show();
  $(".scrollMagic").show();
}

//flickity modal 9


var model9 = document.getElementById('mymodel9');


var img9 = document.getElementById('myImg9');
var model9Img = document.getElementById("img09");
var caption9Text = document.getElementById("caption9");
img9.onclick = function(){


  model9.style.display = "block";
  model9Img.src = this.src;
  caption9Text.innerHTML = this.alt;

  $('.flickity-button-icon').hide();
  $('.navbar').hide();
  $(".moveThis").hide();
  $(".moveThis2").hide();
  $(".moveThis3").hide();
  $(".scrollMagic").hide();

}

var span9 = document.getElementsByClassName("closeThis9")[0];
var bigPic9 = document.getElementsByClassName("bigClose9")[0];

span9.onclick = function() {
  model9.style.display = "none";


  $('.flickity-button-icon').show();
  $('.navbar').show();

  $(".moveThis").show();
  $(".moveThis2").show();
  $(".moveThis3").show();
  $(".scrollMagic").show();
}

bigPic9.onclick = function() {
  model9.style.display = "none";


  $('.flickity-button-icon').show();
  $('.navbar').show();

  $(".moveThis").show();
  $(".moveThis2").show();
  $(".moveThis3").show();
  $(".scrollMagic").show();
}

//flickity modal 10

var model10 = document.getElementById('mymodel10');


var img10 = document.getElementById('myImg10');
var model10Img = document.getElementById("img10");
var caption10Text = document.getElementById("caption10");
img10.onclick = function(){


  model10.style.display = "block";
  model10Img.src = this.src;
  caption10Text.innerHTML = this.alt;

  $('.flickity-button-icon').hide();
  $('.navbar').hide();
  $(".moveThis").hide();
  $(".moveThis2").hide();
  $(".moveThis3").hide();
  $(".scrollMagic").hide();

}

var span10 = document.getElementsByClassName("closeThis10")[0];
var bigPic10 = document.getElementsByClassName("bigClose10")[0];

span10.onclick = function() {
  model10.style.display = "none";


  $('.flickity-button-icon').show();
  $('.navbar').show();

  $(".moveThis").show();
  $(".moveThis2").show();
  $(".moveThis3").show();
  $(".scrollMagic").show();
}

bigPic10.onclick = function() {
  model10.style.display = "none";


  $('.flickity-button-icon').show();
  $('.navbar').show();

  $(".moveThis").show();
  $(".moveThis2").show();
  $(".moveThis3").show();
  $(".scrollMagic").show();
}

//flickity modal 11

var model11 = document.getElementById('mymodel11');
var img11 = document.getElementById('myImg11');
var model11Img = document.getElementById("img11");
var caption11Text = document.getElementById("caption11");
img11.onclick = function(){

  model11.style.display = "block";
  model11Img.src = this.src;
  caption11Text.innerHTML = this.alt;

  $('.flickity-button-icon').hide();
  $('.navbar').hide();

}

var span11 = document.getElementsByClassName("closeThis10")[0];
var bigPic11 = document.getElementsByClassName("bigClose11")[0];

$('.closeThis10').on('click', function() {
  $('.model11').hide();
})


span11.onclick = function() {
model11.style.display = "none";

  $('.flickity-button-icon').show();
  $('.navbar').show();

}

  bigPic11.onclick = function() {
  model11.style.display = "none";

  $('.flickity-button-icon').show();
  $('.navbar').show();

}

//flickity modal 12

var model12 = document.getElementById('mymodel12');

var img12 = document.getElementById('myImg12');
var model12Img = document.getElementById("img12");
var caption12Text = document.getElementById("caption12");
img12.onclick = function(){

  model12.style.display = "block";
  model12Img.src = this.src;
  caption12Text.innerHTML = this.alt;

  $('.flickity-button-icon').hide();
  $('.navbar').hide();

}

var span12 = document.getElementsByClassName("closeThis12")[0];
var bigPic12 = document.getElementsByClassName("bigClose12")[0];

$('.closeThis10').on('click', function() {
  $('.model12').hide();
})

$('.bigClose12').on('click', function() {
  $('.model12').hide();
})

$('.closeThis10').on('click', function() {
console.log("wtffdkvbf")
model12.style.display = "none";

  $('.flickity-button-icon').show();
  $('.navbar').show();

})

  bigPic12.onclick = function() {
  model12.style.display = "none";

  $('.flickity-button-icon').show();
  $('.navbar').show();

}

//flickity modal 13

var model13 = document.getElementById('mymodel13');

var img13 = document.getElementById('myImg13');
var model13Img = document.getElementById("img13");
var caption13Text = document.getElementById("caption13");
img13.onclick = function(){

  model13.style.display = "block";
  model13Img.src = this.src;
  caption12Text.innerHTML = this.alt;

  $('.flickity-button-icon').hide();
  $('.navbar').hide();

}

var span13 = document.getElementsByClassName("closeThis13")[0];
var bigPic13 = document.getElementsByClassName("bigClose13")[0];

$('.closeThis10').on('click', function() {
  $('.model13').hide();
})

$('.bigClose13').on('click', function() {
  $('.model13').hide();
})

$('.closeThis10').on('click', function() {

model13.style.display = "none";

  $('.flickity-button-icon').show();
  $('.navbar').show();

})

  bigPic13.onclick = function() {
  model13.style.display = "none";

  $('.flickity-button-icon').show();
  $('.navbar').show();

}

//flickity modal 14

var model14 = document.getElementById('mymodel14');

var img14 = document.getElementById('myImg14');
var model14Img = document.getElementById("img14");
var caption14Text = document.getElementById("caption14");
img14.onclick = function(){

  model14.style.display = "block";
  model14Img.src = this.src;
  caption14Text.innerHTML = this.alt;

  $('.flickity-button-icon').hide();
  $('.navbar').hide();

}

var span14 = document.getElementsByClassName("closeThis14")[0];
var bigPic14 = document.getElementsByClassName("bigClose14")[0];

$('.closeThis10').on('click', function() {
  $('.model14').hide();
})

$('.bigClose14').on('click', function() {
  $('.model14').hide();
})

$('.closeThis10').on('click', function() {

model14.style.display = "none";

  $('.flickity-button-icon').show();
  $('.navbar').show();

})

  bigPic14.onclick = function() {
  model14.style.display = "none";

  $('.flickity-button-icon').show();
  $('.navbar').show();

}




});
