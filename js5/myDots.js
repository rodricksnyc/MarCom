$('.homeSlider').on('afterChange', function (event, slick, currentSlide, nextSlide) {



          if

          ($('div#slick-slide02').is('.slick-current')) {

             console.log('it is 3 bitch')

                      $('.slideButton.one').css({'color':'white'})
                      $('.slideButton.two').css({'color':'white'})
                      $('.slideButton.three').css({'color':'#61aceb'})

                    }
      });

$('.homeSlider').on('afterChange', function (event, slick, currentSlide, nextSlide) {

      if    ($('div#slick-slide01').is('.slick-current')) {

             console.log('it is 2 bitch')

                      $('.slideButton.one').css({'color':'white'})
                      $('.slideButton.two').css({'color':'#61aceb'})
                      $('.slideButton.three').css({'color':'white'})

                    }
});



$('.homeSlider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      if    ($('div#slick-slide00').is('.slick-current')) {

        console.log('it is 1 bitch')


       $('.slideButton.one').css({'color':'#61aceb'})
       $('.slideButton.two').css({'color':'white'})
       $('.slideButton.three').css({'color':'white'})

     }

});


if    ($('div#slick-slide00').is('.slick-current')) {

  console.log('it is starting bitch')


 $('.slideButton.one').css({'color':'#61aceb'})
 $('.slideButton.two').css({'color':'white'})
 $('.slideButton.three').css({'color':'white'})

}
