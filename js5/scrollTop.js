

  if ($(document).innerWidth() >= 992) {


    console.log("1")
    $(window).on('scroll', function() {
    var screenTop = $(window).scrollTop();
    var screenBottom = $(window).scrollTop() + window.innerHeight;

    $('section').each(function() {
        var elementTop = $(this).offset().top;
        var elementBottom = $(this).offset().top + $(this).outerHeight();

        if ((screenBottom > elementTop + ($(this).find('.heros').height() / 5)) && (screenTop < elementBottom)) {
            $('section').removeClass('active2')
            $(this).addClass('active2')
        } else {
            $(this).removeClass('active2')
        }
    })



if ($('.blocks02').hasClass('active2')) {

  setTimeout(function() {
    $('.addShadow').addClass('topShadow');
  }, 1800);

  setTimeout(function() {
  $('.blocks02 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      var $tlt500 = $('.tlt500').textillate({
        autoStart: true,
        selector: '.tlt500',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 300,
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


  }, 200)

  setTimeout(function() {
    $('.blocks02 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt6 = $('.tlt6').textillate({
      autoStart: true,
      selector: '.tlt6',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 500)

  setTimeout(function() {
    $('.blocks02 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt7 = $('.tlt7').textillate({
      autoStart: true,
      selector: '.tlt7',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)


  setTimeout(function() {
    $('.blocks02 .content-last').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt8 = $('.tlt8').textillate({
      autoStart: true,
      selector: '.tlt8',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1100)


  setTimeout(function() {
    $('.blocks02 .content-secondLast').removeClass('transparent').addClass('animated fadeInUp');

  }, 1300)

  setTimeout(function() {
    $('.blocks02 .content-thirdLast').removeClass('transparent').addClass('animated fadeInUp');

  }, 1500)

  setTimeout(function() {
    $('.blocks02 .content-fourthLast').removeClass('transparent').addClass('animated fadeInUp');

  }, 1800)

  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1300);


}


})

}



if ($(document).innerWidth() <= 991) {

console.log("2")


$( window ).on("load", function() {

  setTimeout(function() {
    $('.addShadow').addClass('topShadow');
  }, 1800);

  setTimeout(function() {
  $('.blocks02 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      var $tlt500 = $('.tlt500').textillate({
        autoStart: true,
        selector: '.tlt500',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 300,
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


  }, 200)

  setTimeout(function() {
    $('.blocks02 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt6 = $('.tlt6').textillate({
      autoStart: true,
      selector: '.tlt6',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 500)

  setTimeout(function() {
    $('.blocks02 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt7 = $('.tlt7').textillate({
      autoStart: true,
      selector: '.tlt7',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)


  setTimeout(function() {
    $('.blocks02 .content-last').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt8 = $('.tlt8').textillate({
      autoStart: true,
      selector: '.tlt8',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1100)

  setTimeout(function() {
    $('.blocks02 .content-secondLast').removeClass('transparent').addClass('animated fadeInUp');

  }, 1300)

  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1300);


})


  }



$(window).on('scroll', function() {
var screenTop = $(window).scrollTop();
var screenBottom = $(window).scrollTop() + window.innerHeight;

$('section').each(function() {
    var elementTop = $(this).offset().top;
    var elementBottom = $(this).offset().top + $(this).outerHeight();

    if ((screenBottom > elementTop + ($(this).find('.heros').height() / 5)) && (screenTop < elementBottom)) {
        $('section').removeClass('active2')
        $(this).addClass('active2')
    } else {
        $(this).removeClass('active2')
    }
})

if ($('.blocks500').hasClass('active2')) {

  setTimeout(function() {
  $('.blocks500 .content-top').removeClass('transparent').addClass('animated fadeInUp')

}, 100)

}


if ($('.blocks12').hasClass('active2')) {


  setTimeout(function() {
  $('.blocks12 .content-top').removeClass('transparent').addClass('animated fadeInUp')

}, 300)

  setTimeout(function() {
    $('.blocks12 .content-middle').removeClass('transparent').addClass('animated fadeInUp')


  }, 500)

  setTimeout(function() {
    $('.blocks12 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')


  }, 700)


  setTimeout(function() {
    $('.blocks12 .content-last').removeClass('transparent').addClass('animated fadeInUp')


  }, 1200)

  setTimeout(function() {
    $('.blocks12 .content-secondLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 1700)

  setTimeout(function() {
    $('.blocks12 .content-thirdLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 2200)

  setTimeout(function() {
    $('.blocks12 .content-fourthLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 2700)

  setTimeout(function() {
    $('.blocks12 .content-fifthLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 3500)


}

if ($('.blocks22').hasClass('active2')) {


  setTimeout(function() {
  $('.blocks22 .content-top').removeClass('transparent').addClass('animated fadeInUp')

}, 200)

  setTimeout(function() {
    $('.blocks22 .content-middle').removeClass('transparent').addClass('animated fadeInUp')


  }, 500)

  setTimeout(function() {
    $('.blocks22 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')


  }, 700)


  setTimeout(function() {
    $('.blocks22 .content-last').removeClass('transparent').addClass('animated fadeInUp')


  }, 1200)

  setTimeout(function() {
    $('.blocks22 .content-secondLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 1700)

  setTimeout(function() {
    $('.blocks22 .content-thirdLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 2200)

  setTimeout(function() {
    $('.blocks22 .content-fourthLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 2700)

  setTimeout(function() {
    $('.blocks22 .content-fifthLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 3200)

  setTimeout(function() {
    $('.blocks22 .content-sixthLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 3200)


}


if ($('.modalBlock').hasClass('active2')) {

   // $('.modal').animate({ opacity: .97 }, 1600);


  setTimeout(function() {
  $('.modalBlock .content-top').removeClass('transparent').addClass('animated fadeInUp')

  }, 100)

  setTimeout(function() {
    $('.modalBlock .content-middle').removeClass('transparent').addClass('animated fadeInUp')

  }, 200)

  setTimeout(function() {
    $('.modalBlock .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

  }, 500)


  setTimeout(function() {
    $('.modalBlock .content-last').removeClass('transparent').addClass('animated fadeInUp')


  }, 800)

  setTimeout(function() {
    $('.modalBlock .content-secondLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 1200)

  // $('.closeThis').on('click', function() {
  //      $('.modal').animate({ opacity: .1 }, 1600);
  // })


}

});


if ($(".modal").css("display") !== "block") {
console.log('what the flying fuck')

$('.modalBlock').addClass('active2');
// $('.modal').animate({ opacity: .97 }, 1600);


setTimeout(function() {
$('.modalBlock .content-top').removeClass('transparent').addClass('animated fadeInUp')

}, 100)

setTimeout(function() {
 $('.modalBlock .content-middle').removeClass('transparent').addClass('animated fadeInUp')

}, 200)

setTimeout(function() {
 $('.modalBlock .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

}, 500)


setTimeout(function() {
 $('.modalBlock .content-last').removeClass('transparent').addClass('animated fadeInUp')

}, 800)

setTimeout(function() {
  $('.modalBlock .content-secondLast').removeClass('transparent').addClass('animated fadeInUp')

}, 1200)


} else {

$('.modalBlock').removeClass('active2');
// $('.modal').animate({ opacity: .97 }, 100);

}




//scroll over divs to make them fade up

$(window).on('scroll', function() {
var screenTop = $(window).scrollTop();
var screenBottom = $(window).scrollTop() + window.innerHeight;

$('section').each(function() {
    var elementTop = $(this).offset().top;
    var elementBottom = $(this).offset().top + $(this).outerHeight();

    if ((screenBottom > elementTop + ($(this).find('.heros').height() / 2)) && (screenTop < elementBottom)) {
        $('section').removeClass('active2')
        $(this).addClass('active2')
    } else {
        $(this).removeClass('active2')
    }
})



if ($('.blocks').hasClass('active2')) {

  setTimeout(function() {
    $('.centerBlocks').addClass('bottomBoxShadow');
  }, 2000);

  setTimeout(function() {
  $('.blocks .content-top').removeClass('transparent').addClass('animated fadeInUp')

      $('.blocks .content-top').removeClass('transparent');
      var $tlt1 = $('.tlt1').textillate({
        autoStart: true,
        selector: '.tlt1',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 200,
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


  }, 100)

  setTimeout(function() {
    $('.blocks .content-middle').removeClass('transparent').addClass('animated fadeInUp')


    var $tlt2 = $('.tlt2').textillate({
      autoStart: true,
      selector: '.tlt2',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 200)

  setTimeout(function() {
    $('.blocks .content-bottom').removeClass('transparent').addClass('animated fadeInUp')


    var $tlt2 = $('.tlt3').textillate({
      autoStart: true,
      selector: '.tlt3',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)

  setTimeout(function() {
    $('.blocks .content-last').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt2 = $('.tlt4').textillate({
      autoStart: true,
      selector: '.tlt4',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1000)

  setTimeout(function() {
    $('.blocks .content-secondLast').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt2 = $('.tlt5').textillate({
      autoStart: true,
      selector: '.tlt5',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1300)

  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1300);


}

if ($('.blocks1').hasClass('active2')) {

  setTimeout(function() {
    $('#addShadow').addClass('topShadow');
    }, 1300);

  setTimeout(function() {
  $('.blocks1 .content-top').removeClass('transparent').addClass('animated fadeInUp')


  }, 100)

  setTimeout(function() {
    $('.blocks1 .content-middle').removeClass('transparent').addClass('animated fadeInUp')

  }, 200)

  setTimeout(function() {
    $('.blocks1 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')


  }, 700)


  setTimeout(function() {
    $('.blocks1 .content-last').removeClass('transparent').addClass('animated fadeInUp')


  }, 1100)

  setTimeout(function() {
    $('.blocks1 .content-secondLast').removeClass('transparent').addClass('animated fadeInUp')


  }, 1500)


}

if ($('.blocks2').hasClass('active2')) {

  setTimeout(function() {
    $('.addShadow').addClass('topShadow');
  }, 1800);

  setTimeout(function() {
  $('.blocks2 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      var $tlt500 = $('.tlt500').textillate({
        autoStart: true,
        selector: '.tlt500',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 300,
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


  }, 200)

  setTimeout(function() {
    $('.blocks2 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt6 = $('.tlt6').textillate({
      autoStart: true,
      selector: '.tlt6',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 500)

  setTimeout(function() {
    $('.blocks2 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt7 = $('.tlt7').textillate({
      autoStart: true,
      selector: '.tlt7',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)


  setTimeout(function() {
    $('.blocks2 .content-last').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt8 = $('.tlt8').textillate({
      autoStart: true,
      selector: '.tlt8',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1100)

  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1300);

}

if ($('.block4').hasClass('active2')) {

  setTimeout(function() {
  $('.block4 .content-top').removeClass('transparent').addClass('animated fadeInUp')
}, 100)
}

if ($('.block5').hasClass('active2')) {

  setTimeout(function() {
  $('.block5 .content-top').removeClass('transparent').addClass('animated fadeInUp')
}, 100)
}

if ($('.block6').hasClass('active2')) {

  setTimeout(function() {
  $('.block6 .content-top').removeClass('transparent').addClass('animated fadeInUp')
}, 100)
}

if ($('.block7').hasClass('active2')) {

  setTimeout(function() {
  $('.block7 .content-top').removeClass('transparent').addClass('animated fadeInUp')
}, 100)
}

if ($('.blocks3').hasClass('active2')) {

  setTimeout(function() {
    $('.center').addClass('bottomBoxShadow');
  }, 2000);


  setTimeout(function() {
  $('.blocks3 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      var $tlt31 = $('.tlt31').textillate({
        autoStart: true,
        selector: '.tlt31',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 200,
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

  }, 100)

  setTimeout(function() {
    $('.blocks3 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt32 = $('.tlt32').textillate({
      autoStart: true,
      selector: '.tlt32',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 200)

  setTimeout(function() {
    $('.blocks3 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt33 = $('.tlt33').textillate({
      autoStart: true,
      selector: '.tlt33',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)


  setTimeout(function() {
    $('.blocks3 .content-last').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt34 = $('.tlt34').textillate({
      autoStart: true,
      selector: '.tlt34',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1100)

}




if ($('.blocks33').hasClass('active2')) {

  setTimeout(function() {
    $('.center').addClass('bottomBoxShadow');
  }, 2000);


  setTimeout(function() {
  $('.blocks33 .content-top').removeClass('transparent').addClass('animated slit-in-vertical')
      var $tlt31 = $('.tlt31').textillate({
        autoStart: true,
        selector: '.tlt31',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 300,
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

  })

  setTimeout(function() {
    $('.blocks33 .content-middle').removeClass('transparent').addClass('animated slit-in-vertical')
    var $tlt32 = $('.tlt32').textillate({
      autoStart: true,
      selector: '.tlt32',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 300,
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



  }, 200)

  setTimeout(function() {
    $('.blocks33 .content-bottom').removeClass('transparent').addClass('animated slit-in-vertical')

    var $tlt33 = $('.tlt33').textillate({
      autoStart: true,
      selector: '.tlt33',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 300,
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

  }, 300)


  setTimeout(function() {
    $('.blocks33 .content-last').removeClass('transparent').addClass('animated slit-in-vertical')

    var $tlt34 = $('.tlt34').textillate({
      autoStart: true,
      selector: '.tlt34',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 300,
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

  }, 500)

}


if ($('.blocks4').hasClass('active2')) {

  setTimeout(function() {
    $('.centerBlocks').addClass('bottomBoxShadow');
  }, 1800);



  setTimeout(function() {
  $('.blocks4 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      var $tlt41 = $('.tlt41').textillate({
        autoStart: true,
        selector: '.tlt41',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 200,
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


  }, 100)

  setTimeout(function() {
    $('.blocks4 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt42 = $('.tlt42').textillate({
      autoStart: true,
      selector: '.tlt42',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 200)

  setTimeout(function() {
    $('.blocks4 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt41 = $('.tlt41').textillate({
      autoStart: true,
      selector: '.tlt41',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)


  setTimeout(function() {
    $('.blocks4 .content-last').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt43 = $('.tlt43').textillate({
      autoStart: true,
      selector: '.tlt43',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1000)

  setTimeout(function() {
    $('.blocks4 .content-secondLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 1500)

  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1800);

}



if ($('.blocks5').hasClass('active2')) {

  setTimeout(function() {
  $('.blocks5 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      var $tlt5 = $('.tlt9').textillate({
        autoStart: true,
        selector: '.tlt9',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 300,
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


  }, 200)

  setTimeout(function() {
    $('.blocks5 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt6 = $('.tlt10').textillate({
      autoStart: true,
      selector: '.tlt10',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 200)

  setTimeout(function() {
    $('.blocks5 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt7 = $('.tlt11').textillate({
      autoStart: true,
      selector: '.tlt11',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)


  setTimeout(function() {
    $('.blocks5 .content-last').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt8 = $('.tlt12').textillate({
      autoStart: true,
      selector: '.tlt12',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1100)

  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1300);

}

if ($('.blocks6').hasClass('active2')) {

  setTimeout(function() {
  $('.blocks6 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      var $tlt5 = $('.tlt13').textillate({
        autoStart: true,
        selector: '.tlt13',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 300,
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


  }, 200)

  setTimeout(function() {
    $('.blocks6 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt6 = $('.tlt14').textillate({
      autoStart: true,
      selector: '.tlt14',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 200)

  setTimeout(function() {
    $('.blocks6 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt7 = $('.tlt15').textillate({
      autoStart: true,
      selector: '.tlt15',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)


  setTimeout(function() {
    $('.blocks6 .content-last').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt8 = $('.tlt16').textillate({
      autoStart: true,
      selector: '.tlt16',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1100)

  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1300);

}

if ($('.blocks7').hasClass('active2')) {

  setTimeout(function() {
    $('#addShadow2').addClass('bottomBoxShadow');
  }, 1800);

  setTimeout(function() {
  $('.blocks7 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      var $tlt5 = $('.tlt17').textillate({
        autoStart: true,
        selector: '.tlt17',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 300,
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


  }, 200)

  setTimeout(function() {
    $('.blocks7 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt6 = $('.tlt18').textillate({
      autoStart: true,
      selector: '.tlt18',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 200)

  setTimeout(function() {
    $('.blocks7 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt7 = $('.tlt19').textillate({
      autoStart: true,
      selector: '.tlt19',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)


  setTimeout(function() {
    $('.blocks7 .content-last').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt8 = $('.tlt20').textillate({
      autoStart: true,
      selector: '.tlt20',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1100)

  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1300);

}


if ($('.blocks8').hasClass('active2')) {

  setTimeout(function() {
    $('#addShadow4').addClass('topShadow')

    $('#addAnotherShadow').addClass('topShadow')

    $('#blocks8').addClass('topShadow');

  }, 1500);

  setTimeout(function() {
    $('.padding-0').addClass('bottomBoxShadow')
  }, 1500);



  setTimeout(function() {
  $('.blocks8 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      var $tlt00 = $('.tlt00').textillate({
        autoStart: true,
        selector: '.tlt00',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 200,
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


  }, 100)

  setTimeout(function() {
    $('.blocks8 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt01 = $('.tlt01').textillate({
      autoStart: true,
      selector: '.tlt01',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 200)

  setTimeout(function() {
    $('.blocks8 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt02 = $('.tlt02').textillate({
      autoStart: true,
      selector: '.tlt02',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)


  setTimeout(function() {
    $('.blocks8 .content-last').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt02 = $('.tlt03').textillate({
      autoStart: true,
      selector: '.tlt03',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1200)



  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1300);

}


if ($('.blocks19').hasClass('active2')) {

  setTimeout(function() {
    $('#addShadowTop').addClass('topShadow');
    $('#addShadow3').addClass('bottomBoxShadow');
    $('.centerBlocks').addClass('bottomBoxShadow');
    }, 1300);


  setTimeout(function() {
  $('.blocks19 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      var $tlt41 = $('.tlt41').textillate({
        autoStart: true,
        selector: '.tlt41',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 200,
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


  }, 100)

  setTimeout(function() {
    $('.blocks19 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt42 = $('.tlt42').textillate({
      autoStart: true,
      selector: '.tlt42',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 200)

  setTimeout(function() {
    $('.blocks19 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt43 = $('.tlt43').textillate({
      autoStart: true,
      selector: '.tlt43',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)



  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1300);

}




if ($('.blocks9').hasClass('active2')) {

  setTimeout(function() {
    $('#addShadowTop').addClass('topShadow');
    $('#addShadow3').addClass('bottomBoxShadow');
    $('.centerBlocks').addClass('bottomBoxShadow');
    }, 1300);


  setTimeout(function() {
  $('.blocks9 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      var $tlt41 = $('.tlt41').textillate({
        autoStart: true,
        selector: '.tlt41',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 200,
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


  }, 100)

  setTimeout(function() {
    $('.blocks9 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt42 = $('.tlt42').textillate({
      autoStart: true,
      selector: '.tlt42',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 200)

  setTimeout(function() {
    $('.blocks9 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt43 = $('.tlt43').textillate({
      autoStart: true,
      selector: '.tlt43',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)



  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1300);

}



if ($('.blocks99').hasClass('active2')) {

  setTimeout(function() {
    $('#addShadowTop').addClass('topShadow');
    $('#addShadow3').addClass('bottomBoxShadow');
    $('.centerBlocks').addClass('bottomBoxShadow');
    }, 1300);


  setTimeout(function() {
  $('.blocks99 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      var $tlt41 = $('.tlt41').textillate({
        autoStart: true,
        selector: '.tlt41',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 200,
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


  }, 100)

  setTimeout(function() {
    $('.blocks99 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt42 = $('.tlt42').textillate({
      autoStart: true,
      selector: '.tlt42',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 200)

  setTimeout(function() {
    $('.blocks99 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt43 = $('.tlt43').textillate({
      autoStart: true,
      selector: '.tlt43',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)



  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1300);

}

if ($('.blocks10').hasClass('active2')) {

  setTimeout(function() {
    $('.centerBlocks').addClass('bottomBoxShadow');
  }, 1800, "easeIn")



  setTimeout(function() {
    $('#addTheShadow').addClass('bottomBoxShadow');
  }, 1800, "easeIn")

  setTimeout(function() {
  $('.blocks10 .content-top').removeClass('transparent').addClass('animated fadeInUp')

      $('.blocks10 .content-top').removeClass('transparent');
      var $tlt100 = $('.tlt100').textillate({
        autoStart: true,
        selector: '.tlt100',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 200,
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


  }, 100)

  setTimeout(function() {
    $('.blocks10 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt101 = $('.tlt101').textillate({
      autoStart: true,
      selector: '.tlt101',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 200)

  setTimeout(function() {
    $('.blocks10 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt102 = $('.tlt102').textillate({
      autoStart: true,
      selector: '.tlt102',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)

  setTimeout(function() {
    $('.blocks10 .content-last').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt103 = $('.tlt103').textillate({
      autoStart: true,
      selector: '.tlt103',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1000)

  setTimeout(function() {
    $('.blocks10 .content-secondLast').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt104 = $('.tlt104').textillate({
      autoStart: true,
      selector: '.tlt104',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1300)

  setTimeout(function() {
    $('.blocks10 .content-thirdLast').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt105 = $('.tlt105').textillate({
      autoStart: true,
      selector: '.tlt105',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1600)

  setTimeout(function() {
    $('.blocks10 .content-fourthLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 1800)

  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1900);


}

if ($('.blocks14').hasClass('active2')) {

  setTimeout(function() {
    $('.center').addClass('bottomBoxShadow');
  }, 2000);


  setTimeout(function() {
  $('.blocks14 .content-top').removeClass('transparent').addClass('animated fadeInUp')



  }, 100)

  setTimeout(function() {
    $('.blocks14 .content-middle').removeClass('transparent').addClass('animated fadeInUp')



  }, 200)

  setTimeout(function() {
    $('.blocks14 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')


  }, 700)


  setTimeout(function() {
    $('.blocks14 .content-last').removeClass('transparent').addClass('animated fadeInUp')

  }, 1200)

  setTimeout(function() {
    $('.blocks14 .content-secondLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 1900)
  setTimeout(function() {
    $('.blocks14 .content-thirdLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 2600)

  setTimeout(function() {
    $('.blocks14 .content-fourthLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 3100)


}


if ($('.blocks88').hasClass('active2')) {

  setTimeout(function() {
    $('#addShadow4').addClass('topShadow')

    $('#addAnotherShadow').addClass('topShadow')

    $('#blocks88').addClass('topShadow');

    $('.centerBlocks').addClass('bottomBoxShadow');
  }, 1500);



  setTimeout(function() {
  $('.blocks88 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      var $tlt00 = $('.tlt00').textillate({
        autoStart: true,
        selector: '.tlt00',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 200,
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


  }, 100)

  setTimeout(function() {
    $('.blocks88 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt01 = $('.tlt01').textillate({
      autoStart: true,
      selector: '.tlt01',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 200)

  setTimeout(function() {
    $('.blocks88 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt02 = $('.tlt02').textillate({
      autoStart: true,
      selector: '.tlt02',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)



  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1300);

}


if ($('.blocks100').hasClass('active2')) {

  setTimeout(function() {
    $('#addTop').addClass('topBoxShadow');
  }, 2000);

  setTimeout(function() {
    $('#addTheShadow').addClass('bottomBoxShadow');
  }, 3600);

  setTimeout(function() {
  $('.blocks100 .content-top').removeClass('transparent').addClass('animated fadeInUp')

      $('.blocks100 .content-top').removeClass('transparent');
      var $tlt100 = $('.tlt100').textillate({
        autoStart: true,
        selector: '.tlt100',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 200,
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


  }, 100)

  setTimeout(function() {
    $('.blocks100 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt101 = $('.tlt101').textillate({
      autoStart: true,
      selector: '.tlt101',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 200)

  setTimeout(function() {
    $('.blocks100 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

    var $tlt102 = $('.tlt102').textillate({
      autoStart: true,
      selector: '.tlt102',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 700)

  setTimeout(function() {
    $('.blocks100 .content-last').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt103 = $('.tlt103').textillate({
      autoStart: true,
      selector: '.tlt103',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1000)

  setTimeout(function() {
    $('.blocks100 .content-secondLast').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt104 = $('.tlt104').textillate({
      autoStart: true,
      selector: '.tlt104',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1300)

  setTimeout(function() {
    $('.blocks100 .content-thirdLast').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt105 = $('.tlt105').textillate({
      autoStart: true,
      selector: '.tlt105',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1600)

  setTimeout(function() {
    $('.blocks100 .content-fourthLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 1800)

  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1900);


}

if ($('.blocks200').hasClass('active2')) {


  setTimeout(function() {
  $('.blocks200 .content-top').removeClass('transparent').addClass('animated flip-in-hor-bottom')

}, 100)

  setTimeout(function() {
    $('.blocks200 .content-middle').removeClass('transparent').addClass('animated fadeInUp')


  }, 500)

  setTimeout(function() {
    $('.blocks200 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')


  }, 700)


  setTimeout(function() {
    $('.blocks200 .content-last').removeClass('transparent').addClass('animated fadeInUp')


  }, 1200)

  setTimeout(function() {
    $('.blocks200 .content-secondLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 1700)

  setTimeout(function() {
    $('.blocks200 .content-thirdLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 2200)

  setTimeout(function() {
    $('.blocks200 .content-fourthLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 2700)

  setTimeout(function() {
    $('.blocks200 .content-fifthLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 3500)


}

if ($('.blocks300').hasClass('active2')) {

  setTimeout(function() {
  $('.blocks300 .content-top').removeClass('transparent').addClass('animated flip-in-hor-bottom')

}, 100)

}

if ($('.blocks400').hasClass('active2')) {

  setTimeout(function() {
  $('.blocks400 .content-top').removeClass('transparent').addClass('animated flip-in-hor-bottom')

}, 100)

}

if ($('.blocks800').hasClass('active2')) {

  setTimeout(function() {
  $('.blocks800 .content-top').removeClass('transparent').addClass('animated flip-in-hor-bottom')

}, 100)

}



})

$( window ).on("load", function() {



  setTimeout(function() {
    $('.blocksTop2').addClass('bottomBoxShadow');
  }, 1000);

  setTimeout(function() {
    $('.blocksTop').addClass('bottomBoxShadow');
  }, 1000);

  setTimeout(function() {
    $('.blocksTop3').addClass('bottomBoxShadow');
  }, 1000);

  setTimeout(function() {
  $('.blocksTop .content-top').removeClass('transparent').addClass('animated fadeInUp')

      $('.blocksTop .content-top').removeClass('transparent');
      var $tlt1 = $('.tlt1').textillate({
        autoStart: true,
        selector: '.tlt1',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 200,
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


  })

  setTimeout(function() {
    $('.blocksTop .content-middle').removeClass('transparent').addClass('animated fadeInUp')


    var $tlt2 = $('.tlt2').textillate({
      autoStart: true,
      selector: '.tlt2',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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



  }, 100)

  setTimeout(function() {
    $('.blocksTop .content-bottom').removeClass('transparent').addClass('animated fadeInUp')


    var $tlt2 = $('.tlt3').textillate({
      autoStart: true,
      selector: '.tlt3',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 200)

  setTimeout(function() {
    $('.blocksTop .content-last').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt2 = $('.tlt4').textillate({
      autoStart: true,
      selector: '.tlt4',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 600)

  setTimeout(function() {
    $('.blocksTop .content-secondLast').removeClass('transparent').addClass('animated fadeInUp')
    var $tlt2 = $('.tlt5').textillate({
      autoStart: true,
      selector: '.tlt5',
      loop: false,
      minDisplayTime: 1000,
      initialDelay: 200,
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

  }, 1200)

  setTimeout(function() {
    $('.blocksTop .content-thirdLast').removeClass('transparent').addClass('animated fadeInUp')

  }, 1500)


  setTimeout(function() {
    $('.trans--grow.hr1').addClass('grow');
  }, 1300);




    setTimeout(function() {
    $('.blocksTop2 .content-top').removeClass('transparent').addClass('animated slit-in-vertical')
        var $tlt31 = $('.tlt31').textillate({
          autoStart: true,
          selector: '.tlt31',
          loop: false,
          minDisplayTime: 1000,
          initialDelay: 300,
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

    })

    setTimeout(function() {
      $('.blocksTop2 .content-middle').removeClass('transparent').addClass('animated slit-in-vertical')
      var $tlt32 = $('.tlt32').textillate({
        autoStart: true,
        selector: '.tlt32',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 300,
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



    }, 50)

    setTimeout(function() {
      $('.blocksTop2 .content-bottom').removeClass('transparent').addClass('animated slit-in-vertical')

      var $tlt33 = $('.tlt33').textillate({
        autoStart: true,
        selector: '.tlt33',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 300,
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

    }, 100)


    setTimeout(function() {
      $('.blocksTop2 .content-last').removeClass('transparent').addClass('animated slit-in-vertical')

      var $tlt34 = $('.tlt34').textillate({
        autoStart: true,
        selector: '.tlt34',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 300,
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

    }, 200)

    setTimeout(function() {
    $('.blocksTop3 .content-top').removeClass('transparent').addClass('animated fadeInUp')
        var $tlt41 = $('.tlt41').textillate({
          autoStart: true,
          selector: '.tlt41',
          loop: false,
          minDisplayTime: 1000,
          initialDelay: 200,
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


    })

    setTimeout(function() {
      $('.blocksTop3 .content-middle').removeClass('transparent').addClass('animated fadeInUp')
      var $tlt42 = $('.tlt42').textillate({
        autoStart: true,
        selector: '.tlt42',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 200,
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



    }, 300)

    setTimeout(function() {
      $('.blocksTop3 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

      var $tlt41 = $('.tlt41').textillate({
        autoStart: true,
        selector: '.tlt41',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 200,
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

    }, 500)


    setTimeout(function() {
      $('.blocksTop3 .content-last').removeClass('transparent').addClass('animated fadeInUp')

      var $tlt43 = $('.tlt43').textillate({
        autoStart: true,
        selector: '.tlt43',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 200,
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

    }, 800)

    setTimeout(function() {
    $('.blocksTop4 .content-top').removeClass('transparent').addClass('animated fadeInUp')

    }, 0)

    setTimeout(function() {
    $('.blocksTop4 .content-middle').removeClass('transparent').addClass('animated fadeInUp')

  }, 300)

  setTimeout(function() {
  $('.blocksTop4 .content-bottom').removeClass('transparent').addClass('animated fadeInUp')

}, 1000)

setTimeout(function() {
$('.blocksTop4 .content-last').removeClass('transparent').addClass('animated fadeInUp')

}, 1000)
setTimeout(function() {
$('.blocksTop4 .content-secondLast').removeClass('transparent').addClass('animated fadeInUp')

}, 1000)

});
