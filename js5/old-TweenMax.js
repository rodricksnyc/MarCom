
$(".firstBox").mousemove(function(e) {
  parallaxIt(e, "h1.blue", 1);
  parallaxIt(e, ".topper", .5);

});

function parallaxIt(e, target, movement) {
  var $this = $(".wholeBox");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement,
     ease: Back.easeOut
  });
}


$(".secondBox").mousemove(function(e) {
  parallaxIt(e, "h1.blue2", 1);
  parallaxIt(e, ".book", 1.5);
  parallaxIt(e, ".book2", -1.5);

});

function parallaxIt(e, target, movement) {
  var $this = $(".wholeBox2");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}


$(".thirdBox").mousemove(function(e) {
  parallaxIt(e, "h1.blue3", 1);
  // parallaxIt(e, ".book", 2);
  // parallaxIt(e, ".book2", 1);

});

function parallaxIt(e, target, movement) {
  var $this = $(".wholeBox3");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}


$(".fourthBox").mousemove(function(e) {
  parallaxIt(e, "h1.blue4", 1);
  // parallaxIt(e, ".book", 2);
  // parallaxIt(e, ".book2", 1);

});

function parallaxIt(e, target, movement) {
  var $this = $(".wholeBox4");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}

$(".fifthBox").mousemove(function(e) {
  parallaxIt(e, "h1.blue5", 1);
  parallaxIt(e, ".topper5", .5);

});

function parallaxIt(e, target, movement) {
  var $this = $(".wholeBox5");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}




$(".sixthBox").mousemove(function(e) {
  parallaxIt(e, "h1.blue6", 1);
  parallaxIt(e, ".book3", 1.5);
  parallaxIt(e, ".book4", -1.5);

});

function parallaxIt(e, target, movement) {
  var $this = $(".wholeBox6");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}



$(".seventhBox").mousemove(function(e) {
  parallaxIt(e, "h1.blue7", 1);
  // parallaxIt(e, ".book", 2);
  // parallaxIt(e, ".book2", 1);

});

function parallaxIt(e, target, movement) {
  var $this = $(".wholeBox7");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}

$(".eighthBox").mousemove(function(e) {
  parallaxIt(e, "h1.blue8", 1);
  parallaxIt(e, ".topper8", 1.5);

});

function parallaxIt(e, target, movement) {
  var $this = $(".wholeBox8");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}

$(".ninthBox").mousemove(function(e) {
  parallaxIt(e, "h1.blue9", 1);
  parallaxIt(e, ".topper9", 1.5);

});

function parallaxIt(e, target, movement) {
  var $this = $(".wholeBox9");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}


$(".tenthBox").mousemove(function(e) {
  parallaxIt(e, "h1.blue10", 1);
  parallaxIt(e, ".book7", 1.5);
  parallaxIt(e, ".book8", -1.5);

});

function parallaxIt(e, target, movement) {
  var $this = $(".wholeBox10");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}


$(".eleventhBox").mousemove(function(e) {
  parallaxIt(e, "h1.blue11", 1);
  parallaxIt(e, ".book9", 1.5);
  parallaxIt(e, ".book10", -1.5);

});

function parallaxIt(e, target, movement) {
  var $this = $(".wholeBox11");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}



$(".twelfthBox").mousemove(function(e) {
  parallaxIt(e, "h1.blue12", 1);
  parallaxIt(e, ".books2", 1.5);
  parallaxIt(e, ".logo2", -1.5);

});

function parallaxIt(e, target, movement) {
  var $this = $(".wholeBox12");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}

$(".thirteenthBox").mousemove(function(e) {
  parallaxIt(e, "h1.blue13", 1);
  parallaxIt(e, ".books1", 1.5);
  parallaxIt(e, ".logo1", -1.5);

});

function parallaxIt(e, target, movement) {
  var $this = $(".wholeBox13");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
