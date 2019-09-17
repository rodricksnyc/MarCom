
$(document).ready(function(){


  //parallax movement

  $(".thing").mousemove(function(e) {
    parallaxIt(e, ".home", -25);
    parallaxIt(e, ".blueBall", 20);
    parallaxIt(e, ".stripe", 5);
  });

  function parallaxIt(e, target, movement) {
    var $this = $(".thing");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }


  // Checks if in viewport
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

  if ($('.advertising').hasClass('active2')) {


    $('.advertising .content-top').removeClass('transparent').addClass('animated fadeInUp')

    setTimeout(function() {
        $('.advertising .content-middle').removeClass('transparent');
        var $tlt = $('.tlt').textillate({
          autoStart: true,
          selector: '.tlt',
          loop: false,
          minDisplayTime: 100,
          initialDelay: -10000,
          in: {
            effect: 'fadeInDown',
            delayScale: 7,
            delay: 3,
            sync: false,
            shuffle: true,
            reverse: false,
            callback: function () {}
          },
          type: 'char'
        });


    }, 100)

    setTimeout(function() {
      $('.advertising .content-bottom').removeClass('transparent').addClass('animated fadeInUp')
    }, 100)


    //
    // setTimeout(function() {
    //     $('.sheep img').removeClass('transparent').addClass('animated lightSpeedIn')
    // }, 2000)
  }

  if ($('.fun1').hasClass('active2')) {
      $('.fun1 .content-top').removeClass('transparent').addClass('animated fadeInUp')
  }


    if ($('.marketing').hasClass('active2')) {


      $('.marketing .content-top').removeClass('transparent').addClass('animated fadeInUp')

      setTimeout(function() {
          $('.marketing .content-middle').removeClass('transparent');
          var $tlt = $('.tlt2').textillate({
            autoStart: true,
            selector: '.tlt2',
            loop: false,
            minDisplayTime: 100,
            initialDelay: -10000,
            in: {
              effect: 'fadeInDown',
              delayScale: 7,
              delay: 3,
              sync: false,
              shuffle: true,
              reverse: false,
              callback: function () {}
            },
            type: 'char'
          });


      }, 100)

      setTimeout(function() {
        $('.marketing .content-bottom').removeClass('transparent').addClass('animated fadeInUp')
      }, 100)

    }

    if ($('.fun2').hasClass('active2')) {
        $('.fun2 .content-top').removeClass('transparent').addClass('animated fadeInUp')
    }

    if ($('.branding').hasClass('active2')) {


      $('.branding .content-top').removeClass('transparent').addClass('animated fadeInUp')

      setTimeout(function() {
          $('.branding .content-middle').removeClass('transparent');
          var $tlt = $('.tlt3').textillate({
            autoStart: true,
            selector: '.tlt3',
            loop: false,
            minDisplayTime: 100,
            initialDelay: -10000,
            in: {
              effect: 'fadeInDown',
              delayScale: 7,
              delay: 3,
              sync: false,
              shuffle: true,
              reverse: false,
              callback: function () {}
            },
            type: 'char'
          });


      }, 100)

      setTimeout(function() {
        $('.branding .content-bottom').removeClass('transparent').addClass('animated fadeInUp')
      }, 100)

    }


      if ($('.fun3').hasClass('active2')) {
          $('.fun3 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      }

      if ($('.research').hasClass('active2')) {


        $('.research .content-top').removeClass('transparent').addClass('animated fadeInUp')

        setTimeout(function() {
            $('.research .content-middle').removeClass('transparent');
            var $tlt = $('.tlt4').textillate({
              autoStart: true,
              selector: '.tlt4',
              loop: false,
              minDisplayTime: 100,
              initialDelay: -10000,
              in: {
                effect: 'fadeInDown',
                delayScale: 7,
                delay: 3,
                sync: false,
                shuffle: true,
                reverse: false,
                callback: function () {}
              },
              type: 'char'
            });


        }, 100)

        setTimeout(function() {
          $('.research .content-bottom').removeClass('transparent').addClass('animated fadeInUp')
        }, 100)

      }

      if ($('.media').hasClass('active2')) {


        $('.media .content-top').removeClass('transparent').addClass('animated fadeInUp')

        setTimeout(function() {
            $('.media .content-middle').removeClass('transparent');
            var $tlt = $('.tlt5').textillate({
              autoStart: true,
              selector: '.tlt5',
              loop: false,
              minDisplayTime: 100,
              initialDelay: -10000,
              in: {
                effect: 'fadeInDown',
                delayScale: 7,
                delay: 3,
                sync: false,
                shuffle: true,
                reverse: false,
                callback: function () {}
              },
              type: 'char'
            });


        }, 100)

        setTimeout(function() {
          $('.media .content-bottom').removeClass('transparent').addClass('animated fadeInUp')
        }, 100)

      }

      if ($('.social').hasClass('active2')) {


        $('.social .content-top').removeClass('transparent').addClass('animated fadeInUp')

        setTimeout(function() {
            $('.social .content-middle').removeClass('transparent');
            var $tlt = $('.tlt6').textillate({
              autoStart: true,
              selector: '.tlt6',
              loop: false,
              minDisplayTime: 100,
              initialDelay: -10000,
              in: {
                effect: 'fadeInDown',
                delayScale: 7,
                delay: 3,
                sync: false,
                shuffle: true,
                reverse: false,
                callback: function () {}
              },
              type: 'char'
            });


        }, 100)

        setTimeout(function() {
          $('.social .content-bottom').removeClass('transparent').addClass('animated fadeInUp')
        }, 100)

      }

      if ($('.websites').hasClass('active2')) {


        $('.websites .content-top').removeClass('transparent').addClass('animated fadeInUp')

        setTimeout(function() {
            $('.websites .content-middle').removeClass('transparent');
            var $tlt = $('.tlt30').textillate({
              autoStart: true,
              selector: '.tlt30',
              loop: false,
              minDisplayTime: 100,
              initialDelay: -10000,
              in: {
                effect: 'fadeInDown',
                delayScale: 7,
                delay: 3,
                sync: false,
                shuffle: true,
                reverse: false,
                callback: function () {}
              },
              type: 'char'
            });


        }, 100)

        setTimeout(function() {
          $('.websites .content-bottom').removeClass('transparent').addClass('animated fadeInUp')
        }, 100)

      }


      if ($('.events').hasClass('active2')) {


        $('.events .content-top').removeClass('transparent').addClass('animated fadeInUp')

        setTimeout(function() {
            $('.events .content-middle').removeClass('transparent');
            var $tlt = $('.tlt7').textillate({
              autoStart: true,
              selector: '.tlt7',
              loop: false,
              minDisplayTime: 100,
              initialDelay: -10000,
              in: {
                effect: 'fadeInDown',
                delayScale: 7,
                delay: 3,
                sync: false,
                shuffle: true,
                reverse: false,
                callback: function () {}
              },
              type: 'char'
            });


        }, 100)

        setTimeout(function() {
          $('.events .content-bottom').removeClass('transparent').addClass('animated fadeInUp')
        }, 100)

      }

      if ($('.fun4').hasClass('active2')) {
          $('.fun4 .content-top').removeClass('transparent').addClass('animated fadeInUp')
      }

})






  //make blocks slide up and word textillate

  // $('.firstSlider').mouseover(function(){
  //   $('.bigBox').addClass('bigBoxThing');
  //   $('.bigBox').addClass('bigBoxThing animated fadeInUp');
  //   $('.firstText').addClass('animated fadeInUp delay-.5s');
  // });
  //
  // $('.hoverThis1').mouseover(function(){
  //   $('.bigBox10').addClass('bigBoxThing');
  //   $('.bigBox10').addClass('bigBoxThing animated fadeInUp');
  //   $('.secondText').addClass('animated fadeInUp delay-.5s');
  // });
  // $('.thirdSlider').mouseover(function(){
  //   $('.bigBox11').addClass('bigBoxThing');
  //   $('.bigBox11').addClass('bigBoxThing animated fadeInUp');
  //   $('.thirdText').addClass('animated fadeInUp delay.5s');
  // });
  //
  // $('.hoverThis3').mouseover(function(){
  //   $('.bigBox2').addClass('bigBox2Thing');
  //   $('.bigBox2').addClass('bigBox2Thing animated fadeInUp');
  //   $('.fourthText').addClass('animated fadeInUp delay-.5s');
  // });
  //
  // $('.fifthSlider').mouseover(function(){
  //   $('.bigBox12').addClass('bigBoxThing');
  //   $('.bigBox12').addClass('bigBoxThing animated fadeInUp');
  //   $('.fifthText').addClass('animated fadeInUp delay-.5s');
  // });
  //
  // $('.sixthSlider').mouseover(function(){
  //   $('.bigBox13').addClass('bigBoxThing');
  //   $('.bigBox13').addClass('bigBoxThing animated fadeInUp');
  //   $('.sixthText').addClass('animated fadeInUp delay-.5s');
  // });
  //
  // $('.seventhSlider').mouseover(function(){
  //   $('.bigBox3.two').addClass('bigBox3Thing');
  //   $('.bigBox3.two').addClass('bigBox3Thing animated fadeInUp');
  //   $('.seventhText').addClass('animated fadeInUp delay-.5s');
  // });
  // $('.eigthSlider').mouseover(function(){
  //   $('.horizontal31').addClass('horizontal3Thing');
  //   $('.horizontal31').addClass('horizontal3Thing animated fadeInUp');
  //
  // });
  //
  // $('.hoverThis2').mouseover(function(){
  //   $('.horizontal33').addClass('horizontal3Thing');
  //   $('.horizontal33').addClass('horizontal3Thing animated fadeInUp');
  //
  // });
  // $('.tenthSlider').mouseover(function(){
  //   $('.horizontal34').addClass('horizontal3Thing');
  //   $('.horizontal34').addClass('horizontal3Thing animated fadeInUp');
  //
  // });
  // $('.eleventhSlider').mouseover(function(){
  //   $('.horizontal35').addClass('horizontal3Thing');
  //   $('.horizontal35').addClass('horizontal3Thing animated fadeInUp');
  //
  // });
  //
  // $('.twelfthSlider').mouseover(function(){
  //   $('.bigBoxDigital').addClass('bigBoxThing');
  //   $('.thirtyText').addClass('animated fadeInUp delay-.5s');
  //
  // });



  // var startIt = $('.advertising');
  //
  // var $tlt = $('.tlt').textillate({
  //   autoStart: false,
  //   selector: '.tlt',
  //   loop: false,
  //   minDisplayTime: 100,
  //   initialDelay: -10000,
  //   in: {
  //     effect: 'fadeInDown',
  //     delayScale: 7,
  //     delay: 3,
  //     sync: false,
  //     shuffle: true,
  //     reverse: false,
  //     callback: function () {}
  //   },
  //   type: 'char'
  // });
  //
  // startIt.one('mouseenter', function () { $tlt.textillate('start'); });
  // startIt.one('mouseout', function () { $tlt.textillate('stop'); });
  // $('.tlt').textillate({
  //   selector: '.tlt',
  //   loop: false,
  //   minDisplayTime: 5000,
  //   initialDelay: 20,
  //   inEffects: [],
  //   in: {
  //   	effect: 'fadeInDownBig',
  //     delayScale: 7,
  //     delay: 3,
  //     sync: false,
  //     shuffle: true,
  //     reverse: false,
  //     callback: function () {}
  //   },
  //
  //   type: 'char'
  // });


  // var startIt2 = $('.hoverThis1');
  //
  // var $tlt2 = $('.tlt2').textillate({
  //   autoStart: false,
  //   selector: '.tlt2',
  //   loop: false,
  //   minDisplayTime: 100,
  //   initialDelay: -5000,
  //   in: {
  //     effect: 'fadeInDown',
  //     delayScale: 7,
  //     delay: 3,
  //     sync: false,
  //     shuffle: true,
  //     reverse: false,
  //     callback: function () {}
  //   },
  //   type: 'char'
  // });
  //
  // startIt2.one('mouseenter', function () { $tlt2.textillate('start'); });
  // startIt2.one('mouseout', function () { $tlt2.textillate('stop'); });


  // $('.tlt2').2textillate({
  //   selector: '.tlt2',
  //   loop: false,
  //   minDisplayTime: 5000,
  //   initialDelay: 30,
  //   autoStart: true,
  //   inEffects: [],
  //   in: {
  //   	effect: 'fadeInDownBig',
  //     delayScale: 7,
  //     delay: 3,
  //     sync: false,
  //     shuffle: true,
  //     reverse: false,
  //     callback: function () {}
  //   },
  //
  //   type: 'char'
  // });

  // var startIt3 = $('.thirdSlider');
  //
  // var $tlt3 = $('.tlt3').textillate({
  //   autoStart: false,
  //   selector: '.tlt3',
  //   loop: false,
  //   loop: false,
  //   minDisplayTime: 100,
  //   initialDelay: -5000,
  //   in: {
  //     effect: 'fadeInDown',
  //     delayScale: 7,
  //     delay: 3,
  //     sync: false,
  //     shuffle: true,
  //     reverse: false,
  //     callback: function () {}
  //   },
  //   type: 'char'
  // });
  //
  // startIt3.one('mouseenter', function () { $tlt3.textillate('start'); });
  // startIt3.one('mouseout', function () { $tlt3.textillate('stop'); });



  // $('.tlt3').textillate({
  //   selector: '.tlt3',
  //   loop: false,
  //   minDisplayTime: 5000,
  //   initialDelay: 80,
  //   autoStart: true,
  //   inEffects: [],
  //   in: {
  //   	effect: 'fadeInDownBig',
  //     delayScale: 7,
  //     delay: 3,
  //     sync: false,
  //     shuffle: true,
  //     reverse: false,
  //     callback: function () {}
  //   },
  //
  //   type: 'char'
  // });

  // var startIt4 = $('.hoverThis3');
  //
  // var $tlt4 = $('.tlt4').textillate({
  //   autoStart: false,
  //   selector: '.tlt4',
  //   loop: false,
  //   minDisplayTime: 100,
  //   initialDelay: -5000,
  //   in: {
  //     effect: 'fadeInDown',
  //     delayScale: 7,
  //     delay: 3,
  //     sync: false,
  //     shuffle: true,
  //     reverse: false,
  //     callback: function () {}
  //   },
  //   type: 'char'
  // });
  //
  // startIt4.one('mouseenter', function () { $tlt4.textillate('start'); });
  // startIt4.one('mouseout', function () { $tlt4.textillate('stop'); });


  // $('.tlt4').textillate({
  //   selector: '.tlt4',
  //   loop: false,
  //   minDisplayTime: 5000,
  //   initialDelay: 100,
  //   autoStart: true,
  //   inEffects: [],
  //   in: {
  //   	effect: 'fadeInDownBig',
  //     delayScale: 7,
  //     delay: 3,
  //     sync: false,
  //     shuffle: true,
  //     reverse: false,
  //     callback: function () {}
  //   },
  //
  //   type: 'char'
  // });

  // var startIt5 = $('.fifthSlider');
  //
  // var $tlt5 = $('.tlt5').textillate({
  //   autoStart: false,
  //   selector: '.tlt5',
  //   loop: false,
  //   minDisplayTime: 100,
  //   initialDelay: -5000,
  //   in: {
  //     effect: 'fadeInDown',
  //     delayScale: 7,
  //     delay: 3,
  //     sync: false,
  //     shuffle: true,
  //     reverse: false,
  //     callback: function () {}
  //   },
  //   type: 'char'
  // });
  //
  // startIt5.one('mouseenter', function () { $tlt5.textillate('start'); });
  // startIt5.one('mouseout', function () { $tlt5.textillate('stop'); });

  // $('.tlt5').textillate({
  //   selector: '.tlt5',
  //   loop: false,
  //   minDisplayTime: 5000,
  //   initialDelay: 120,
  //   autoStart: true,
  //   inEffects: [],
  //   in: {
  //   	effect: 'fadeInDownBig',
  //     delayScale: 20,
  //     delay: 18,
  //     sync: false,
  //     shuffle: true,
  //     reverse: false,
  //     callback: function () {}
  //   },
  //
  //   type: 'char'
  // });
  // var startIt6 = $('.sixthSlider');
  //
  // var $tlt6 = $('.tlt6').textillate({
  //   autoStart: false,
  //   selector: '.tlt6',
  //   loop: false,
  //   minDisplayTime: 100,
  //   initialDelay: -5000,
  //   in: {
  //     effect: 'fadeInDown',
  //     delayScale: 7,
  //     delay: 3,
  //     sync: false,
  //     shuffle: true,
  //     reverse: false,
  //     callback: function () {}
  //   },
  //   type: 'char'
  // });
  //
  // startIt6.one('mouseenter', function () { $tlt6.textillate('start'); });
  // startIt6.one('mouseout', function () { $tlt6.textillate('stop'); });


  //
  // var startIt30 = $('.twelfthSlider');
  //
  // var $tlt30 = $('.tlt30').textillate({
  //   autoStart: false,
  //   selector: '.tlt30',
  //   loop: false,
  //   minDisplayTime: 100,
  //   initialDelay: -5000,
  //   in: {
  //     effect: 'fadeInDown',
  //     delayScale: 7,
  //     delay: 3,
  //     sync: false,
  //     shuffle: true,
  //     reverse: false,
  //     callback: function () {}
  //   },
  //   type: 'char'
  // });
  //
  // startIt30.one('mouseenter', function () { $tlt30.textillate('start'); });
  // startIt30.one('mouseout', function () { $tlt30.textillate('stop'); });


  // var startIt7 = $('.seventhSlider');
  //
  // var $tlt7 = $('.tlt7').textillate({
  //   autoStart: false,
  //   selector: '.tlt7',
  //   loop: false,
  //   minDisplayTime: 100,
  //   initialDelay: -5000,
  //   in: {
  //     effect: 'fadeInDown',
  //     delayScale: 7,
  //     delay: 3,
  //     sync: false,
  //     shuffle: true,
  //     reverse: false,
  //     callback: function () {}
  //   },
  //   type: 'char'
  // });
  //
  // startIt7.one('mouseenter', function () { $tlt7.textillate('start'); });
  // startIt7.one('mouseout', function () { $tlt7.textillate('stop'); });



});
