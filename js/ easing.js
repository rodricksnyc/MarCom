
//
// $('.ml13').each(function(){
//   $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
// });
//
// anime.timeline({loop: false})
//   .add({
//     targets: '.ml13 .letter',
//     translateY: [100,0],
//     translateX: 0,
//     opacity: [0,10],
//     easing: "easeOutExpo",
//     duration: 2000,
//     delay: function(el, i) {
//       return 200 + 0 * i;
//     }
//   })




  $('.ml14').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime.timeline({loop: false})
    .add({
      targets: '.ml14 .letter',
      translateY: [100,0],
      translateX: 0,
      opacity: [0,10],
      easing: "easeOutExpo",
      duration: 2000,
      delay: function(el, i) {
        return 400 + 0 * i;
      }
    })

    $('.ml15').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({loop: false})
      .add({
        targets: '.ml15 .letter',
        translateY: [100,0],
        translateX: 0,
        opacity: [0,10],
        easing: "easeOutExpo",
        duration: 2000,
        delay: function(el, i) {
          return 600 + 0 * i;
        }
      });
