$(document).ready(function(){

  $('.chapter').on('click', function(e) {
    if (!$(this).hasClass('active')) {
      $('.chapter.active').removeClass('active');
      $(this).addClass('active');
    }
    $(this).removeClass('past');
    $(this).prevAll().addClass('past');
    $(this).nextAll().each(function() {
      $(this).removeClass('active').removeClass('past');
      $(this).find('.active, .past').removeClass('active').removeClass('past');
    });
  });

  $('.part').on('click', function(e) {
    if (!$(this).hasClass('active')) {
      $('.part.active').removeClass('active');
      $(this).addClass('active');
      $(this).parent().trigger('click');

      $(this).removeClass('past');
      $(this).prevAll().addClass('past');
      $(this).nextAll().removeClass('past');
    }
  });


  $('#openTimeline').on('click', function() {
    $('.firstSlider').hide();
    $( ".hiddenTimeline" ).slideToggle('slow');
  });


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
    $( ".inner3").addClass('innerThree').fadeIn().html( "<h5 style='font-size:1em;'>1997 NEW CLIENTS</h5>" );

    $( ".inner4").addClass('innerFour').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>GRC (Later acquired by AT&T Government)</h5>" );
    $( ".inner4.little1").addClass('innerFour').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Star Access</h5>" );
    $( ".inner4.little2").addClass('innerFour').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Star Mountain</h5>" );
    $( ".inner4.little3").addClass('innerFour').fadeIn().html( "<h5 style='font-size:.5em;padding-bottom:.2em;'class='mt5'>Xerox World Headquarters</h5>" );
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
    $( ".inner5").addClass('innerFive').fadeIn().html( "<h5 style='font-size:1em;'>1998 NEW CLIENTS</h5>" );
    $( ".inner6").addClass('innerSix').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Bell Atlantic</h5>" );
    $( ".inner6.little1").addClass('innerSix').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Concert (BT & ATT venture)</h5>" );
    $( ".inner6.little2").addClass('innerSix').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>NET2000</h5>" );
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
    $( ".inner7").addClass('innerSeven').fadeIn().html( "<h5 style='font-size:1em;'>2000 NEW CLIENTS</h5>" );
    $( ".inner8").addClass('innerEight').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Army Audit Agency</h5>" );
    $( ".inner8.little1").addClass('innerEight').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Defense Finance and Accounting Service</h5>" );
    $( ".inner8.little2").addClass('innerEight').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Human Resources Technology Council</h5>" );
    $( ".inner8.little3").addClass('innerEight').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Internal Revenue Service</h5>" );
    $( ".inner8.little4").addClass('innerEight').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Office of Personal Management</h5>" );

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
    $( ".inner9").addClass('innerNine').fadeIn().html( "<h5 style='font-size:1em;'>2001 NEW CLIENTS</h5>" );
    $( ".inner10").addClass('innerTen').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Air Force Space and Missile Systems Center</h5>" );
    $( ".inner10.little1").addClass('innerTen').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Defense Contract Audit Agency</h5>" );
    $( ".inner10.little2").addClass('innerTen').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Department of Education</h5>" );
    $( ".inner10.little3").addClass('innerTen').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>DOE, Office of Inspector General</h5>" );
    $( ".inner10.little4").addClass('innerTen').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>EPA, Office of Inspector General</h5>" );
    $( ".inner10.little5").addClass('innerTen').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Federal Communications Commission</h5>" );
    $( ".inner10.little6").addClass('innerTen').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>National Institutes of Health</h5>" );
    $( ".inner10.little7").addClass('innerTen').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Torch Concepts</h5>" );
    $( ".inner10.little8").addClass('innerTen').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>United States Postal Service</h5>" );
    $( ".inner10.little9").addClass('innerTen').fadeIn().html( "<h5 style='font-size:.5em;' class='mt5'>Veterans Benefits Administration</h5>" );
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
    $( ".inner11").addClass('innerEleven').fadeIn().html( "<h5 style='font-size:1em;'>2002 NEW CLIENTS</h5>" );
    $( ".inner12").addClass('innerTwelve').fadeIn().html( "<h5 style='font-size:.5em;'>Department of Defense</h5>" );
    $( ".inner12.little1").addClass('innerTwelve').fadeIn().html( "<h5 style='font-size:.5em !important'>General Services Administration</h5>" );
    $( ".inner12.little2").addClass('innerTwelve').fadeIn().html( "<h5 style='font-size:.5em !important'>National Academy of Public Administration</h5>" );
    $( ".inner12.little3").addClass('innerTwelve').fadeIn().html( "<h5 style='font-size:.3em !important'>MarCom Group is ranked #39 in the Washington Business Journal's list of<br>largest advertising agencies in the WAshington DC Metro area.</h5>" );
    $( ".inner12.little4").addClass('innerTwelve').fadeIn().html( "<h5 style='font-size:.3em !important'>MarCom Group receives 2nd place from<br>NAGC Blue Pencil Competition for the EPA Recruitment Brochure</h5>" );
    $( ".inner12.little5").addClass('innerTwelve').fadeIn().html( "<h5 style='font-size:.3em !important'>MarCom Group is assigned two U.S. General Services Administration (GSA)<br>contracting vehicles for Marketing, Media, and Public Information Services</h5>" );
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

    $( ".inner13").addClass('innerThirteen').fadeIn().html( "<h5 style='font-size:1em;'>SEE HOW</h5>" );
    $( ".inner14").addClass('innerFourteen').fadeIn().html( "<h5 style='font-size:1em;'>WE DO IT</h5>" );
    $( ".inner14.little").addClass('innerFourteen').fadeIn().html( "<img style='width:40px;padding-top: 25px;' src='images5/arrow.png'>" );
  }



  first();


  $('#1996').click(function() {
    console.log("1996")

    clearTimeout();

  })

  $('#1997').click(function() {
    setTimeout(second, 800);
    setTimeout(third, 900);
    setTimeout(fourth, 1100);

  })

  $('#1998').click(function() {
    setTimeout(fifth, 0);
    setTimeout(sixth, 50);
    setTimeout(seventh, 800);

  })

  $('#2000').click(function() {
    setTimeout(eighth, 0);
    setTimeout(ninth, 50);
    setTimeout(tenth, 800);

  })

  $('#2001').click(function() {
    setTimeout(eleventh, 0);
    setTimeout(twelfth, 50);
    setTimeout(thirteenth, 800);

  })


  $('#2002').click(function() {
    setTimeout(fourteenth, 0);
    setTimeout(fifteenth, 50);
    setTimeout(sixteenth, 800);

  })

  // setTimeout(second, 5000);
  // setTimeout(third, 5500);
  // setTimeout(fourth, 6000);
  // setTimeout(fifth, 11000);
  // setTimeout(sixth, 11500);
  // setTimeout(seventh, 12000);
  // setTimeout(eighth, 17000);
  // setTimeout(ninth, 17500);
  // setTimeout(tenth, 18000);
  // setTimeout(eleventh, 23000);
  // setTimeout(twelfth, 23500);
  // setTimeout(thirteenth, 24000);
  // setTimeout(fourteenth, 29000);
  // setTimeout(fifteenth, 29500);
  // setTimeout(sixteenth, 30000);
  // setTimeout(seventeenth, 35000);
  // setTimeout(eighteenth, 35500);
  // setTimeout(nineteenth, 35600);
});


//Sample dates
var dates = ["1/1/1996", "1/12/1997", "2/1/1998", "2/30/1999", "3/9/2000", "3/28/2001", "4/15/2002", "4/30/2003", "5/10/2004", "5/23/2005", "6/7/2006", "6/21/2007", "7/1/2008", "7/22/2009", "8/2/2010", "8/16/2011", "9/1/2012", "9/13/2013", "10/1/2014", "10/20/2015", "11/1/2016", "11/18/2017", "12/1/2018", "12/28/2019"];


//For the purpose of stringifying MM/DD/YYYY date format
var monthSpan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Format MM/DD/YYYY into string
function dateSpan(date) {
  var month = date.split('/')[0];
  month = monthSpan[month - 1];
  var day = date.split('/')[1];
  if (day.charAt(0) == '0') {
    day = day.charAt(1);
  }
  var year = date.split('/')[2];

  //Spit it out!
  return year;
}

//Main function. Draw your circles.
function makeCircles() {
  //Forget the timeline if there's only one date. Who needs it!?
  if (dates.length < 2) {
    $("#line").hide();
    $("#span").show().text(dateSpan(dates[0]));
    //This is what you really want.
  } else if (dates.length >= 2) {
    //Set day, month and year variables for the math
    var first = dates[0];
    var last = dates[dates.length - 1];

    var firstMonth = parseInt(first.split('/')[0]);
    var firstDay = parseInt(first.split('/')[1]);

    var lastMonth = parseInt(last.split('/')[0]);
    var lastDay = parseInt(last.split('/')[1]);

    //Integer representation of the last day. The first day is represnted as 0
    var lastInt = ((lastMonth - firstMonth) * 30) + (lastDay - firstDay);

    //Draw first date circle
    $("#line").append('<div class="circle" id="circle0" style="left: ' + 0 + '%;"><div class="popupSpan">' + dateSpan(dates[0]) + '</div></div>');

    $("#mainCont").append('<span id="span0" class="center">' + dateSpan(dates[0]) + '</span>');

    //Loop through middle dates
    for (i = 1; i < dates.length - 1; i++) {
      var thisMonth = parseInt(dates[i].split('/')[0]);
      var thisDay = parseInt(dates[i].split('/')[1]);

      //Integer representation of the date
      var thisInt = ((thisMonth - firstMonth) * 30) + (thisDay - firstDay);

      //Integer relative to the first and last dates
      var relativeInt = thisInt / lastInt;

      //Draw the date circle
      $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + relativeInt * 99 + '%;"><div class="popupSpan">' + dateSpan(dates[i]) + '</div></div>');

      $("#mainCont").append('<span id="span' + i + '" class="right">' + dateSpan(dates[i]) + '</span>');
    }

    //Draw the last date circle
    $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + 100 + '%;"><div class="popupSpan">' + dateSpan(dates[dates.length - 1]) + '</div></div>');

    $("#mainCont").append('<span id="span' + i + '" class="right">' + dateSpan(dates[i]) + '</span>');
  }

  $(".circle:first").addClass("active");
}

makeCircles();

$(".circle").mouseenter(function() {
  $(this).addClass("hover");
});

$(".circle").mouseleave(function() {
  $(this).removeClass("hover");
});

$(".circle").click(function() {
  var spanNum = $(this).attr("id");
  selectDate(spanNum);
});

function selectDate(selector) {
  $selector = "#" + selector;
  $spanSelector = $selector.replace("circle", "span");
  var current = $selector.replace("circle", "");

  $(".active").removeClass("active");
  $($selector).addClass("active");

  if ($($spanSelector).hasClass("right")) {
    $(".center").removeClass("center").addClass("left")
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("right")
  } else if ($($spanSelector).hasClass("left")) {
    $(".center").removeClass("center").addClass("right");
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("left");
  };
};
