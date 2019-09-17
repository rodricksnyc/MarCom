$('.newCarousel').slick({
slidesToShow: 2,
slidesToScroll:1,
dots:true,
autoplay:false,
autoplaySpeed:1500,
arrows:false,
centerMode: true,
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
  useTransform: false,
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
 useTransform: true,
 speed: 1000,
 dots:false,
 arrows:true,

});
