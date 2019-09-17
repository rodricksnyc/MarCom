
// Use object literal notification pattern. To arrange code.
let pageModule = {
  config: {
    classes: {
      container: '.container',
      wrapper: '.wrapper',
      flex: '.flexing',
      flexrelatve: '.flex-relative',
      close: '.close',
      nav: '.navbar'
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
  init: function() {
    // This is where we carry out our project
    let self = this;
    // Start the stuff. This could be your init file.
    console.log('this is started');

    //Initialize Aos animations. I think
    AOS.init();

    // initialize the carousel
    self.carousel();
  },
  carousel: function(){
    // Handle the carousel stuff
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
  },
}

$(document).ready(function() {
  // If using Object literals, which is like a class, you start init here
  pageModule.init();
  // Handle the calendar clicking
  $("#openIt").click(function(){
    // Get the position of the nav and set it to the hiddenVideos // IDEA:
    $("#hiddenVideos").css({"top": pageModule.getNavFixedHeight()})
    console.log('I am clickarooooooo');
    // hide the hiddenVideos
    // Improve on this.
    //sliding the calendar div down
    $(".moveThis").hide();
    // $('nav').addClass('fixed');
    $('.center').slideUp(pageModule.config.timeout.normal);
    $('.trans--grow').fadeOut(pageModule.config.timeout.normal).addClass('zero');
    $("html, body").animate({scrollTop: pageModule.getNavFixedHeight()}, 950);

    $('#myCool').addClass('flexing flexing-scroll')
                .animate(
                  {
                    "height" : "auto",
                    "top": pageModule.getNavFixedHeight(),
                  }, 1000)
                .delay('1000').fadeIn();
    $("#myCool").slideDown(pageModule.config.timeout.normal);
  });

  //Closing the calendar div
  $("#myCool .close").click(function(){
    $('nav').removeClass('fixed');
    $('#bigThing').slideDown(pageModule.config.timeout.normal);

    $("#myCool").slideUp(pageModule.config.timeout.normal);
    // $('#myCool').css({'display': 'none'});

    setTimeout(function(){
      $("#myCool").removeClass('flexing');
    },pageModule.config.timeout.basic);

    $("#myCool").delay(pageModule.config.timeout.normal).removeClass('pt10');

    $('.center').slideDown(pageModule.config.timeout.normal);
    $('.trans--grow').delay('1000').fadeIn(pageModule.config.timeout.normal).removeClass('zero');

    setTimeout(function(){
      $("#bigThing").fadeIn(1000).removeClass('zero');
    });
  });

  $(".close3").click(function(){
    $('nav').removeClass('fixed');
    $('#bigThing').slideDown(2000);
    $("#myCool").slideUp(pageModule.config.timeout.normal);
    $("#myCool").removeClass('flexing flexing-scroll');
    $("#myCool").css({'left': 0});
    // $("#myCool").delay(pageModule.config.timeout.normal).removeClass('pt10');
    $("#hiddenVideos").slideUp(2000);
    // $('#hiddenVideos').animate({"height" : "0px"}, 500).fadeOut();

    setTimeout(function(){
       $("#hiddenVideos").removeClass('flexing');
     },800);

    $("#hiddenVideos").delay(2000).removeClass('pt10');

    $('.center').slideDown(2000);
    $('.trans--grow').delay('1000').fadeIn(3000).removeClass('zero');

    setTimeout(function(){
      $("#bigThing").fadeIn(1000).removeClass('zero');
    });
  });

  $("#openIt2").click(function(){
    $(".moveThis").hide();
    //
    // $('nav').addClass('fixed');

    $('.center').slideUp(2000);

    $('.trans--grow').fadeOut(1000).addClass('zero');


    $('#hiddenVideos').addClass('flexing').animate({"height" : "1150px"}, 2500).delay('3000').fadeIn();


    $("#hiddenVideos").slideDown(2000);
  });


  // sliding the news div down

  $("#openIt3").click(function(){

    $(".moveThis").hide();

    // $('nav').addClass('fixed');

    $('.center').slideUp(2000);

    $('.trans--grow').fadeOut(1000).addClass('zero');


    $('#news').addClass('flexing').animate({"height" : "1150px"}, 2500).delay('3000').fadeIn();


    $("#news").slideDown(2000);
  });

  //close the news div

  $(".close4").on('click', function(){
    // $('nav').removeClass('fixed');
    $('#bigThing').slideDown(2000);

    $("#news").slideUp(2000);
    $('#news').animate({"height" : "0px"}, 500).fadeOut();

    setTimeout(function(){
      $("#news").removeClass('flexing');
    },800);

    $("#news").delay(2000).removeClass('pt10');

    $('.center').slideDown(2000);
    $('.trans--grow').delay('1000').fadeIn(3000).removeClass('zero');

    setTimeout(function(){
      $("#bigThing").fadeIn(1000).removeClass('zero');

    });
  });

  //sliding the video and calendar divs

  $('#videos').click(function(){
    // animate the #myCoolDiv to the left and then display the new div, since
    $("#hiddenVideos").show();
    console.log('This is innerWidth ', $("#myCool").width());
    $(".flexing-scroll").animate(
      {
        "left": -$("#myCool").width()
      }
    , 990);
    $("#hiddenVideos").animate(
      {
        "top": pageModule.getNavFixedHeight(),
        "left": 0
      }
    , 1000);
  });

  $("#events").click(function(){
    // animate the #myCoolDiv to the left and then display the new div, since
    console.log('This is innerWidth ', $("#myCool").width());
    $("#hiddenVideos").animate(
      {
        "top": pageModule.getNavFixedHeight(),
        "left": "100%"
      }
    , 990);
    $(".flexing-scroll").animate(
      {
        "left": 0
      }
    , 1000);
  });

  //slick slider





});
