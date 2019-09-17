$(document).ready(function () {

  $(".preloader-wrap").fadeOut(0);


//search bar

$('#clickSearch').on('click', function() {
  $('.tipModal2').show();
})

    $('#tipue_search_input').tipuesearch();

     $('input[type="text"]').val('');


     $('#delete').on('click', function(){

      console.log("efbewirbiwbeib")

      $('#tipModal').hide();

    })


    $('#tipModal').on('click', "#delete", function(){

      $('#tipModal').hide();

    })


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

  $('a[href^="#newTop"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }

  });

  //flickity carousel
  var elem = document.querySelector('.m-carousel')
  if(elem) {
    var flkty = new Flickity( elem, {
      wrapAround: true,
      pageDots: false,
      imagesLoaded: true,
      adaptiveHeight: false,
      lazyLoad: 3,


      arrowShape:'M27.1,46.45a5.07,5.07,0,0,0,0,7.12L55.74,82.21a5.08,5.08,0,0,0,7.14,0h0a5,5,0,0,0,0-7.14l-25-25,25-25a5.07,5.07,0,0,0,0-7.14h0a5,5,0,0,0-7.14,0Z'
    });
  }

//slick

  $('#hero-slider2').on('init', function(e, slick) {
    var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);
    $('.hero-content.acq').show();
  });
  $('#hero-slider2').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    var $animatingElements = $('div.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    doAnimations($animatingElements);
    $('.hero-content.acq').show();
  });
  $('#hero-slider2').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    fade: true
  });
  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
        $this.removeClass($animationType);
      });
    });
  }



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


  // adds sliding underline HTML
  jQuery('#menu2').append('<li class="slide-line"></li>');

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
        width: $active.outerWidth() -30 +'px',
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



  //footer


$('.whiteLink.videos').on('click' , function() {
  var divPosition = $('#anchorPoint').offset();
  $('html, body').animate({scrollTop: divPosition.top}, 1000);

  $('.blocks8').css('margin-bottom' , '0');

  setTimeout(function(){
    $( "#myCool" ).slideToggle(1000);
    $('#myCool').addClass('bottomShadow');

  },100);

})



  $('#getFile6').on('click', function () {
    $.ajax({
      url: 'http://www.elizabethrodricks.com/images5/about.jpg',
      method: 'GET',
      xhrFields: {
        responseType: 'blob'
      },
      success: function (data) {
        var a = document.createElement('a');
        var url = window.URL.createObjectURL(data);
        a.href = url;
        a.download = 'images5/about.jpg';
        a.click();
        window.URL.revokeObjectURL(url);
      }
    });
  });
  $('#getFile7').on('click', function () {
    $.ajax({
      url: 'http://www.elizabethrodricks.com/images5/about4.jpg',
      method: 'GET',
      xhrFields: {
        responseType: 'blob'
      },
      success: function (data) {
        var a = document.createElement('a');
        var url = window.URL.createObjectURL(data);
        a.href = url;
        a.download = 'images5/about4.jpg';
        a.click();
        window.URL.revokeObjectURL(url);
      }
    });
  });

  $('#getFile8').on('click', function () {
    $.ajax({
      url: 'http://www.elizabethrodricks.com/images5/about1.jpg',
      method: 'GET',
      xhrFields: {
        responseType: 'blob'
      },
      success: function (data) {
        var a = document.createElement('a');
        var url = window.URL.createObjectURL(data);
        a.href = url;
        a.download = 'images5/about1.jpg';
        a.click();
        window.URL.revokeObjectURL(url);
      }
    });
  });
  $('#getFile9').on('click', function () {
    $.ajax({
      url: 'http://www.elizabethrodricks.com/images5/about3.jpg',
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
      url: 'http://www.elizabethrodricks.com/images5/about5.jpg',
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
      url: 'http://www.elizabethrodricks.com/images5/about6.jpg',
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
      url: 'http://www.elizabethrodricks.com/images5/about2.jpg',
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


  }


  var span = document.getElementsByClassName("closeThis")[0];
  var bigPic = document.getElementsByClassName("bigClose")[0];

  span.onclick = function() {
    model.style.display = "none";

    $('.flickity-button-icon').show();


  }

  bigPic.onclick = function() {
    model.style.display = "none";

    $('.flickity-button-icon').show();



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

  }

  var span2 = document.getElementsByClassName("closeThis2")[0];
  var bigPic2 = document.getElementsByClassName("bigClose2")[0];

  span2.onclick = function() {
    model2.style.display = "none";

    $('.flickity-button-icon').show();
    $('.navbar').show();

  }


  bigPic2.onclick = function() {
    model2.style.display = "none";

    $('.flickity-button-icon').show();
    $('.navbar').show();


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

  }

  var span3 = document.getElementsByClassName("closeThis3")[0];
  var bigPic3 = document.getElementsByClassName("bigClose3")[0];

  span3.onclick = function() {
    model3.style.display = "none";

    $('.flickity-button-icon').show();
    $('.navbar').show();

  }

  bigPic3.onclick = function() {
    model3.style.display = "none";

    $('.flickity-button-icon').show();
    $('.navbar').show();

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

  }

  var span4 = document.getElementsByClassName("closeThis4")[0];
  var bigPic4 = document.getElementsByClassName("bigClose4")[0];

  span4.onclick = function() {
    model4.style.display = "none";

    $('.flickity-button-icon').show();
    $('.navbar').show();

  }

  bigPic4.onclick = function() {
    model4.style.display = "none";

    $('.flickity-button-icon').show();
    $('.navbar').show();

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

  }

  var span5 = document.getElementsByClassName("closeThis5")[0];
  var bigPic5 = document.getElementsByClassName("bigClose5")[0];

  span5.onclick = function() {
    model5.style.display = "none";


    $('.flickity-button-icon').show();
    $('.navbar').show();

  }

  bigPic5.onclick = function() {
    model5.style.display = "none";

    $('.flickity-button-icon').show();
    $('.navbar').show();

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

  }

  var span6 = document.getElementsByClassName("closeThis6")[0];
  var bigPic6 = document.getElementsByClassName("bigClose6")[0];

    span6.onclick = function() {
    model6.style.display = "none";

    $('.flickity-button-icon').show();
    $('.navbar').show();

  }

  bigPic6.onclick = function() {
    model6.style.display = "none";

    $('.flickity-button-icon').show();
    $('.navbar').show();

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

  }

  var span7 = document.getElementsByClassName("closeThis7")[0];
  var bigPic7 = document.getElementsByClassName("bigClose7")[0];

  span7.onclick = function() {
    model7.style.display = "none";

    $('.flickity-button-icon').show();
    $('.navbar').show();

  }

  bigPic7.onclick = function() {
    model7.style.display = "none";


    $('.flickity-button-icon').show();
    $('.navbar').show();

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

  }

  var span8 = document.getElementsByClassName("closeThis8")[0];
  var bigPic8 = document.getElementsByClassName("bigClose8")[0];

  span8.onclick = function() {
    model8.style.display = "none";


    $('.flickity-button-icon').show();
    $('.navbar').show();

  }

  bigPic8.onclick = function() {
    model8.style.display = "none";


    $('.flickity-button-icon').show();
    $('.navbar').show();

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


  }

  var span9 = document.getElementsByClassName("closeThis9")[0];
  var bigPic9 = document.getElementsByClassName("bigClose9")[0];

  span9.onclick = function() {
    model9.style.display = "none";


    $('.flickity-button-icon').show();
    $('.navbar').show();

  }

  bigPic9.onclick = function() {
    model9.style.display = "none";


    $('.flickity-button-icon').show();
    $('.navbar').show();

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


  }

  var span10 = document.getElementsByClassName("closeThis10")[0];
  var bigPic10 = document.getElementsByClassName("bigClose10")[0];

  span10.onclick = function() {
    model10.style.display = "none";


    $('.flickity-button-icon').show();
    $('.navbar').show();

  }

  bigPic10.onclick = function() {
    model10.style.display = "none";


    $('.flickity-button-icon').show();
    $('.navbar').show();

  }

  //model for google maps

  var mapModal1 = document.getElementById('mapModal1');

  var img10 = document.getElementById('myImg10');
  var model10Img = document.getElementById("img10");
  var caption10Text = document.getElementById("caption10");
  img10.onclick = function(){


    model10.style.display = "block";
    model10Img.src = this.src;
    caption10Text.innerHTML = this.alt;

    $('.flickity-button-icon').hide();
    $('.navbar').hide();


  }

  var span10 = document.getElementsByClassName("closeThis10")[0];
  var bigPic10 = document.getElementsByClassName("bigClose10")[0];

  span10.onclick = function() {
    model10.style.display = "none";


    $('.flickity-button-icon').show();
    $('.navbar').show();

  }

  bigPic10.onclick = function() {
    model10.style.display = "none";


    $('.flickity-button-icon').show();
    $('.navbar').show();

  }



});
