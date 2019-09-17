//this is to filter the type of portfolio Piece

// isotop filter init


(function ($) {
    "use strict";

    // window load functions init
    $(window).on('load', function () {

        projectFilter();
    });


function projectFilter() {
		var $gridt = $('.projects');
		$gridt.isotope();
		$('.filter-buttons').on('click', 'div', function () {
				var filterValue = $(this).attr('data-filter');
				$gridt.isotope({
						filter: filterValue
				});
				$(this).addClass('active').siblings().removeClass('active');
		});
};

})(jQuery);




//this is for wholeBox

var $body1 = $('.firstBox'),
	$panel = $('.wholeBox'),
	$txt = $('.blue');
  $imgPhone1 = $('.topper');
  $imgPhone2 = $('.topper20');


function initTilt() {
	TweenMax.set([$txt, $imgPhone1, $imgPhone2], { transformStyle: "preserve-3d" });

	$body1.mousemove(function(e) {
		var sxPos = e.pageX / $body1.width() * 100 - 100;
		var syPos = e.pageY / $body1.height() * 100 - 100;

    TweenMax.to($txt, 2, {
      rotationY: -0.02 * sxPos,
      rotationX: -0.02 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -30",
      ease: Elastic.easeOut
    });
    TweenMax.to($imgPhone1, 2, {
      rotationY: 0.05 * sxPos,
      rotationX: 0.02 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -50",
      ease: Elastic.easeOut
    });

    TweenMax.to($imgPhone2, 2, {
      rotationY: 0.05 * sxPos,
      rotationX: 0.02 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -50",
      ease: Elastic.easeOut
    });

	});
};

initTilt();


//this is for wholeBox2

var $body2 = $('.secondBox'),
	$panel2 = $('.wholeBox2'),
	$txt2 = $('.blue2');
  $img2 = $('.book');
  $img3 = $('.book2');


function initTilt2() {
	TweenMax.set([$txt2, $img2, $img3], { transformStyle: "preserve-3d" });

	$body2.mousemove(function(e) {
		var sxPos = e.pageX / $body2.width() * 100 - 100;
		var syPos = e.pageY / $body2.height() * 100 - 100;

    TweenMax.to($txt2, 2, {
			rotationY: -0.02 * sxPos,
			rotationX: -0.02 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -90",
			ease: Expo.easeOut
		});
    TweenMax.to($img2, 2, {
      rotationY: 0.04 * sxPos,
      rotationX: 0.04 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -100",
      ease: Expo.easeOut
    });
    TweenMax.to($img3, 2, {
      rotationY: 0.04 * sxPos,
      rotationX: 0.04 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -100",
      ease: Expo.easeOut
    });

	});
};

initTilt2();



//this is for wholeBox3


var $body3 = $('.thirdBox'),
	$panel3 = $('.wholeBox3'),
	$txt3 = $('.blue3');
  $img4 = $('.bookNGA');
  $img5 = $('.bookNGA2');
  $imgShadow1 = $('.NGAShadow');


function initTilt3() {
	TweenMax.set([$txt3, $img4, $img5, $imgShadow1], { transformStyle: "preserve-3d" });

	$body3.mousemove(function(e) {
		var sxPos = e.pageX / $body3.width() * 100 - 100;
		var syPos = e.pageY / $body3.height() * 100 - 100;

    TweenMax.to($txt3, 2, {
			rotationY: -0.02 * sxPos,
			rotationX: -0.02 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -90",
			ease: Expo.easeOut
		});
    TweenMax.to($img4, 2, {
      rotationY: 0.03 * sxPos,
      rotationX: 0.03 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -100",
      ease: Expo.easeOut
    });
    TweenMax.to($img5, 2, {
      rotationY: 0.04 * sxPos,
      rotationX: 0.04 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -100",
      ease: Expo.easeOut
    });
    TweenMax.to($imgShadow1, 2, {
      rotationY: 0.08 * sxPos,
      rotationX: -0.08 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -100",
      ease: Expo.easeOut
    });

	});
};

initTilt3();


//this is for wholeBox4

var $body4 = $('.fourthBox'),
	$panel4 = $('.wholeBox4'),
	$txt4 = $('.blue4');
  $img6 = $('.pamphlet7');
  $img7 = $('.pamphlet8');
  $img77 = $('.pamphlet77');

function initTilt4() {
	TweenMax.set([$txt4, $img6, $img7, $img77], { transformStyle: "preserve-3d" });

	$body4.mousemove(function(e) {
		var sxPos = e.pageX / $body4.width() * 100 - 100;
		var syPos = e.pageY / $body4.height() * 100 - 100;

    TweenMax.to($txt4, 2, {
			rotationY: -0.02 * sxPos,
			rotationX: -0.02 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -30",
			ease: Expo.easeOut
		});
    TweenMax.to($img6, 2, {
      rotationY: 0.05 * sxPos,
      rotationX: 0.05 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -60",
      ease: Expo.easeOut
    });
    TweenMax.to($img7, 2, {
      rotationY: 0.06 * sxPos,
      rotationX: 0.06 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -60",
      ease: Expo.easeOut
    });
    TweenMax.to($img77, 2, {
      rotationY: -0.08 * sxPos,
      rotationX: 0.04 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -60",
      ease: Expo.easeOut
    });

	});
};

initTilt4();



//this is for wholeBox5

var $body5 = $('.fifthBox'),
	$panel5 = $('.wholeBox5'),
	$txt5 = $('.blue5');
  $img8 = $('.topper5');


function initTilt5() {
	TweenMax.set([$txt5, $img8], { transformStyle: "preserve-3d" });

	$body5.mousemove(function(e) {
		var sxPos = e.pageX / $body5.width() * 100 - 100;
		var syPos = e.pageY / $body5.height() * 100 - 100;

    TweenMax.to($txt5, 2, {
      rotationY: -0.02 * sxPos,
      rotationX: -0.02 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -90",
      ease: Expo.easeOut
    });
    TweenMax.to($img8, 2, {
      rotationY: 0.08 * sxPos,
      rotationX: 0.08 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -100",
      ease: Expo.easeOut
    });

	});
};

initTilt5();



//this is for wholeBox6

var $body6 = $('.sixthBox'),
	$panel6 = $('.wholeBox6'),
	$txt6 = $('.blue6');
  $img9 = $('.book3');
  $img10 = $('.book4');

function initTilt6() {
	TweenMax.set([$txt6, $img9, $img10], { transformStyle: "preserve-3d" });

	$body6.mousemove(function(e) {
		var sxPos = e.pageX / $body6.width() * 100 - 100;
		var syPos = e.pageY / $body6.height() * 100 - 100;

		TweenMax.to($txt6, 2, {
			rotationY: -0.02 * sxPos,
			rotationX: -0.02 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -90",
			ease: Expo.easeOut
		});
    TweenMax.to($img9, 2, {
      rotationY: 0.08 * sxPos,
      rotationX: 0.08 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -100",
      ease: Expo.easeOut
    });
    TweenMax.to($img10, 2, {
      rotationY: 0.08 * sxPos,
      rotationX: 0.08 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -100",
      ease: Expo.easeOut
    });

	});
};

initTilt6();



//this is for wholeBox7

var $body7 = $('.seventhBox'),
	$panel7 = $('.wholeBox7'),
	$txt7 = $('.blue7');
  $img11 = $('.bookDOE3');
  $img12 = $('.bookDOE4');
  $imgDOE = $('.bookDOE');

function initTilt7() {
	TweenMax.set([$txt7, $img11, $img12], { transformStyle: "preserve-3d" });


	$body7.mousemove(function(e) {
		var sxPos = e.pageX / $body7.width() * 100 - 100;
		var syPos = e.pageY / $body7.height() * 100 - 100;

    TweenMax.to($txt7, 2, {
			rotationY: -0.02 * sxPos,
			rotationX: -0.02 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -30",
ease: CustomEase.create("custom", "M0,0,C0.128,0.572,0.257,1.016,0.512,1.09,0.672,1.136,0.838,-0.024,1,-0.024"), y: -500 });
  
    TweenMax.to($img11, 2, {
      rotationY:0.03 * sxPos,
      rotationX: 0.03 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -20",
ease: CustomEase.create("custom", "M0,0,C0.128,0.572,0.257,1.016,0.512,1.09,0.672,1.136,0.838,-0.024,1,-0.024"), y: -500 });

    TweenMax.to($img12, 2, {
      rotationY: 0.03 * sxPos,
      rotationX: 0.03 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -50",

    });

    TweenMax.to($imgDOE, 2, {
      rotationY: 0.03 * sxPos,
      rotationX: 0.03 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -60",

  });



	});
};

initTilt7();


//this is for wholeBox8

var $body8 = $('.eighthBox'),
	$panel8 = $('.wholeBox8'),
	$txt8 = $('.blue8');
  $img13 = $('.topper8');
  $img88 = $('.topper88');

function initTilt8() {
	TweenMax.set([$txt8, $img13, $img88], { transformStyle: "preserve-3d" });

	$body8.mousemove(function(e) {
		var sxPos = e.pageX / $body8.width() * 100 - 100;
		var syPos = e.pageY / $body8.height() * 100 - 100;

    TweenMax.to($txt8, 2, {
      rotationY: -0.02 * sxPos,
      rotationX: -0.02 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -30",
      ease: Expo.easeOut
    });
    TweenMax.to($img13, 2, {
      rotationY: 0.08 * sxPos,
      rotationX: 0.03 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -50",
      ease: Expo.easeOut
    });

    TweenMax.to($img88, 2, {
      rotationY: -0.08 * sxPos,
      rotationX: -0.01 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -120",
      ease: Expo.easeOut
    });



	});
};

initTilt8();


//this is for wholeBox9

var $body9 = $('.ninthBox'),
	$panel9 = $('.wholeBox9'),
	$txt9 = $('.blue9');
  $img14 = $('.topper9');
  $img99 = $('.topper99');


function initTilt9() {
	TweenMax.set([$txt9, $img14, $img99], { transformStyle: "preserve-3d" });

	$body9.mousemove(function(e) {
		var sxPos = e.pageX / $body9.width() * 100 - 100;
		var syPos = e.pageY / $body9.height() * 100 - 100;

    TweenMax.to($txt9, 2, {
      rotationY: -0.02 * sxPos,
      rotationX: -0.02 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -20",
      ease: Expo.easeOut
    });
    TweenMax.to($img14, 2, {
      rotationY: 0.08 * sxPos,
      rotationX: 0.03 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -50",
      ease: Expo.easeOut
    });
    TweenMax.to($img99, 2, {
      rotationY: -0.08 * sxPos,
      rotationX: 0.02 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -50",
      ease: Expo.easeOut
    });


	});
};

initTilt9();


//this is for wholeBox10

var $body10 = $('.tenthBox'),
	$panel10 = $('.wholeBox10'),
	$txt10 = $('.blue10');
  $img15 = $('.book7');
  $img16 = $('.book8');

function initTilt10() {
	TweenMax.set([$txt10, $img15, $img16], { transformStyle: "preserve-3d" });

	$body10.mousemove(function(e) {
		var sxPos = e.pageX / $body10.width() * 100 - 100;
		var syPos = e.pageY / $body10.height() * 100 - 100;

    TweenMax.to($txt10, 2, {
			rotationY: -0.02 * sxPos,
			rotationX: -0.02 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -30",
			ease: Expo.easeOut
		});
    TweenMax.to($img15, 2, {
      rotationY: -0.05 * sxPos,
      rotationX: -0.01 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -120",
      ease: Expo.easeOut
    });
    TweenMax.to($img16, 2, {
      rotationY: 0.03 * sxPos,
      rotationX: 0.03 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -40",
      ease: Expo.easeOut
    });

	});
};

initTilt10();



//this is for wholeBox11

var $body11 = $('.eleventhBox'),
	$panel11 = $('.wholeBox11'),
	$txt11 = $('.blue11');
  $img17 = $('.book9');
  $img99 = $('.book99');
  $img18 = $('.book10');

function initTilt11() {
	TweenMax.set([$txt11, $img17, $img18, $img99], { transformStyle: "preserve-3d" });

	$body11.mousemove(function(e) {
		var sxPos = e.pageX / $body11.width() * 100 - 100;
		var syPos = e.pageY / $body11.height() * 100 - 100;

    TweenMax.to($txt11, 2, {
			rotationY: -0.02 * sxPos,
			rotationX: -0.02 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -40",
			ease: Expo.easeOut
		});
    TweenMax.to($img17, 2, {
      rotationY: 0.04 * sxPos,
      rotationX: 0.04 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -60",
      ease: Expo.easeOut
    });
    TweenMax.to($img18, 2, {
      rotationY: 0.03 * sxPos,
      rotationX: 0.03 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -60",
      ease: Expo.easeOut
    });
    TweenMax.to($img99, 2, {
      rotationY: -0.09 * sxPos,
      rotationX: 0.01 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -60",
      ease: Expo.easeOut
    });


	});
};

initTilt11();


//this is for wholeBox12

var $body12 = $('.twelfthBox'),
	$panel12 = $('.wholeBox12'),
	$txt12 = $('.blue12');
  $img19 = $('.bookDOE5');
  $img20 = $('.bookDOE6');

function initTilt12() {
	TweenMax.set([$txt12, $img19, $img20], { transformStyle: "preserve-3d" });

	$body12.mousemove(function(e) {
		var sxPos = e.pageX / $body12.width() * 100 - 100;
		var syPos = e.pageY / $body12.height() * 100 - 100;

    TweenMax.to($txt12, 2, {
			rotationY: -0.02 * sxPos,
			rotationX: -0.02 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -90",
			ease: Expo.easeOut
		});
    TweenMax.to($img19, 2, {
      rotationY: 0.02 * sxPos,
      rotationX: 0.02 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -50",
      ease: Expo.easeOut
    });
    TweenMax.to($img20, 2, {
      rotationY: 0.03 * sxPos,
      rotationX: 0.03 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -50",
      ease: Expo.easeOut
    });

	});
};

initTilt12();


//this is for wholeBox13

var $body13 = $('.thirteenthBox'),
	$panel13 = $('.wholeBox13'),
	$txt13 = $('.blue13');
  $img21 = $('.bookDOE7');
  $img22 = $('.bookDOE8');

function initTilt13() {
	TweenMax.set([$txt13, $img21, $img22], { transformStyle: "preserve-3d" });

	$body13.mousemove(function(e) {
		var sxPos = e.pageX / $body13.width() * 100 - 100;
		var syPos = e.pageY / $body13.height() * 100 - 100;

    TweenMax.to($txt13, 2, {
			rotationY: -0.02 * sxPos,
			rotationX: -0.02 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -90",
			ease: Expo.easeOut
		});
    TweenMax.to($img21, 2, {
      rotationY: 0.02 * sxPos,
      rotationX: 0.02 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -50",
      ease: Expo.easeOut
    });
    TweenMax.to($img22, 2, {
      rotationY: 0.03 * sxPos,
      rotationX: 0.03 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -50",
      ease: Expo.easeOut
    });

	});
};

initTilt13();


//this is for wholeBox14


var $body14 = $('.fourteenthBox'),
	$panel14 = $('.wholeBox14'),
	$txt14 = $('.blue14');
  $img23 = $('.bookNGA3');
  $img24 = $('.bookNGA4');


function initTilt14() {
	TweenMax.set([$txt14, $img23, $img24], { transformStyle: "preserve-3d" });

	$body14.mousemove(function(e) {
		var sxPos = e.pageX / $body14.width() * 100 - 100;
		var syPos = e.pageY / $body14.height() * 100 - 100;

    TweenMax.to($txt14, 2, {
			rotationY: -0.02 * sxPos,
			rotationX: -0.02 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -90",
			ease: Expo.easeOut
		});
    TweenMax.to($img23, 2, {
      rotationY: 0.03 * sxPos,
      rotationX: 0.03 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -100",
      ease: Expo.easeOut
    });
    TweenMax.to($img24, 2, {
      rotationY: 0.03 * sxPos,
      rotationX: 0.03 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -100",
      ease: Expo.easeOut
    });
	});
};

initTilt14();



//this is for firstBrochure

	var $body15 = $('.firstBrochure'),
	$panel15 = $('.brochure1'),
	$txt15 = $('.blueBrochure1');
  $img25 = $('.pamphlet1');
  $img26 = $('.pamphlet2');



function initTilt15() {
	TweenMax.set([$txt15, $img25, $img26], { transformStyle: "preserve-3d" });

	$body15.mousemove(function(e) {
		var sxPos = e.pageX / $body15.width() * 100 - 100;
		var syPos = e.pageY / $body15.height() * 100 - 100;

    TweenMax.to($txt15, 2, {
			rotationY: -0.02 * sxPos,
			rotationX: -0.02 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -90",
			ease: Expo.easeOut
		});
    TweenMax.to($img25, 2, {
      rotationY: 0.08 * sxPos,
      rotationX: 0.08 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -100",
      ease: Expo.easeOut
    });
    TweenMax.to($img26, 2, {
      rotationY: 0.08 * sxPos,
      rotationX: 0.08 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -100",
      ease: Expo.easeOut
    });



	});
};

initTilt15();



//this is for brochure2

var $body16 = $('.secondBrochure'),
	$panel16 = $('.brochure2'),
	$txt16 = $('.blueBrochure2');
	$img27 = $('.pamphlet3');
	$img28 = $('.pamphlet4');
  $imgPamphletShadow1 = $('.pamphlet0');


function initTilt16() {
	TweenMax.set([$txt16, $img27, $img28, $imgPamphletShadow1], { transformStyle: "preserve-3d" });

	$body16.mousemove(function(e) {
		var sxPos = e.pageX / $body1.width() * 100 - 100;
		var syPos = e.pageY / $body1.height() * 100 - 100;

    TweenMax.to($txt16, 2, {
      rotationY: -0.02 * sxPos,
      rotationX: -0.02 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -90",
      ease: Expo.easeOut
    });
    TweenMax.to($img27, 2, {
      rotationY: 0.08 * sxPos,
      rotationX: 0.08 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -100",
      ease: Expo.easeOut
    });
		TweenMax.to($img28, 2, {
			rotationY: 0.08 * sxPos,
			rotationX: 0.08 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -100",
			ease: Expo.easeOut
		});
    TweenMax.to($imgPamphletShadow1, 2, {
      rotationY: -0.08 * sxPos,
      rotationX: 0.08 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -100",
      ease: Expo.easeOut
    });

	});
};

initTilt16();



//this is for brochure3

var $body17 = $('.thirdBrochure'),
	$panel17 = $('.brochure3'),
	$txt17 = $('.blueBrochure3');
  $img29 = $('.pamphlet5');
  $img55 = $('.pamphlet55');

function initTilt17() {
	TweenMax.set([$txt17, $img29, $img55], { transformStyle: "preserve-3d" });

	$body17.mousemove(function(e) {
		var sxPos = e.pageX / $body17.width() * 100 - 100;
		var syPos = e.pageY / $body17.height() * 100 - 100;

    TweenMax.to($txt17, 2, {
      rotationY: -0.02 * sxPos,
      rotationX: -0.02 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -40",
      ease: Expo.easeOut
    });
    TweenMax.to($img29, 2, {
      rotationY: 0.08 * sxPos,
      rotationX: 0.04 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -60",
      ease: Expo.easeOut
    });
    TweenMax.to($img55, 2, {
      rotationY: -0.08 * sxPos,
      rotationX: 0.04 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -60",
      ease: Expo.easeOut
    });





	});
};

initTilt17();


//this is for brochure4

var $body18 = $('.fourthBrochure'),
	$panel18 = $('.brochure4'),
	$txt18 = $('.blueBrochure4');
  $img30 = $('.pamphlet6');
  $img66 = $('.pamphlet66');

function initTilt18() {
	TweenMax.set([$txt18, $img30, $img66], { transformStyle: "preserve-3d" });

	$body18.mousemove(function(e) {
		var sxPos = e.pageX / $body18.width() * 100 - 100;
		var syPos = e.pageY / $body18.height() * 100 - 100;

    TweenMax.to($txt18, 2, {
      rotationY: -0.02 * sxPos,
      rotationX: -0.02 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -40",
      ease: Expo.easeOut
    });
    TweenMax.to($img30, 2, {
      rotationY: 0.08 * sxPos,
      rotationX: 0.04 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -60",
      ease: Expo.easeOut
    });
    TweenMax.to($img66, 2, {
      rotationY: -0.08 * sxPos,
      rotationX: 0.04 * syPos,
      transformPerspective: 500,
      transformOrigin: "center center -60",
      ease: Expo.easeOut
    });


	});
};

initTilt18();



// //Box 1

jQuery(function( $ ){

  var $body=$("body"),
  $heroA=$("#hero-section-a img"),
  $heroB=$("#hero-section-b img"),
  $heroC=$("#hero-section-c img");

  TweenMax.set( $heroA, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroB, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroC, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".firstBox").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroA, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroB, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroC, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });

  //mouseleave

  $(".firstBox").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroA, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroB, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroC, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});

//Box 2

jQuery(function( $ ){

  var $body=$("body"),
  $heroD=$("#hero-section-d img"),
  $heroE=$("#hero-section-e img"),
  $heroF=$("#hero-section-f img");

  TweenMax.set( $heroD, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroE, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroF, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".secondBox").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroD, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroE, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroF, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });
  //mouseleave

  $(".secondBox").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroD, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroE, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroF, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});

//Box 3

jQuery(function( $ ){

  var $body=$("body"),
  $heroG=$("#hero-section-g img"),
  $heroH=$("#hero-section-h img"),
  $heroI=$("#hero-section-i img");

  TweenMax.set( $heroG, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroH, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroI, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".thirdBox").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroG, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroH, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroI, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });

  //mouseleave
  $(".thirdBox").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroG, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroH, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroI, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});

//Box 4

jQuery(function( $ ){

  var $body=$("body"),
  $heroJ=$("#hero-section-j img"),
  $heroK=$("#hero-section-k img"),
  $heroL=$("#hero-section-l img");

  TweenMax.set( $heroJ, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroK, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroL, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".fourthBox").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroJ, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroK, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });

  //mouseleave

  $(".fourthBox").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroJ, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroK, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});




//Box 5

jQuery(function( $ ){

  var $body=$("body"),
  $heroM=$("#hero-section-m img"),
  $heroN=$("#hero-section-n img"),
  $heroO=$("#hero-section-o img");

  TweenMax.set( $heroM, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroN, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroO, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".fifthBox").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroM, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroN, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroO, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });

  //mouseleave

  $(".fifthBox").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroM, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroN, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroO, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});

//Box 6

jQuery(function( $ ){

  var $body=$("body"),
  $heroP=$("#hero-section-p img"),
  $heroQ=$("#hero-section-e img"),
  $heroR=$("#hero-section-f img");

  TweenMax.set( $heroP, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroQ, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroR, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".sixthBox").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroP, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroQ, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroR, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });
  //mouseleave

  $(".sixthBox").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroP, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroQ, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroR, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});

//Box 7

jQuery(function( $ ){

  var $body=$("body"),
  $heroS=$("#hero-section-s img"),
  $heroT=$("#hero-section-t img"),
  $heroU=$("#hero-section-u img");

  TweenMax.set( $heroS, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroT, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroU, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".seventhBox").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroS, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroT, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroU, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });

  //mouseleave

  $(".seventhBox").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroS, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroT, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroU, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});


//Box 8

jQuery(function( $ ){

  var $body=$("body"),
  $heroV=$("#hero-section-v img"),
  $hero1=$("#hero-section-1 img"),
  $hero2=$("#hero-section-2 img");

  TweenMax.set( $heroV, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $hero1, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $hero2, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".eighthBox").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroV, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $hero1, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $hero2, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });

  //mouseleave

  $(".eighthBox").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroV, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $hero1, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $hero2, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});

//Box 9

jQuery(function( $ ){

  var $body=$("body"),
  $heroW=$("#hero-section-w img"),
  $hero3=$("#hero-section-3 img"),
  $hero4=$("#hero-section-4 img");

  TweenMax.set( $heroW, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $hero3, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $hero4, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".ninthBox").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroW, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $hero3, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $hero4, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });

  //mouseleave

  $(".ninthBox").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroW, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $hero3, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $hero4, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});


//Box 10

jQuery(function( $ ){

  var $body=$("body"),
  $heroX=$("#hero-section-x img"),
  $heroE=$("#hero-section-e img"),
  $heroF=$("#hero-section-f img");

  TweenMax.set( $heroX, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroE, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroF, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".tenthBox").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroX, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroE, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroF, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });
  //mouseleave

  $(".tenthBox").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroX, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroE, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroF, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});


//Box 11

jQuery(function( $ ){

  var $body=$("body"),
  $heroY=$("#hero-section-y img"),
  $heroE=$("#hero-section-e img"),
  $heroF=$("#hero-section-f img");

  TweenMax.set( $heroY, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroE, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroF, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".eleventhBox").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroY, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroE, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroF, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });
  //mouseleave

  $(".eleventhBox").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroY, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroE, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroF, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});


//Box 12

jQuery(function( $ ){

  var $body=$("body"),
  $heroZ=$("#hero-section-z img")
  $heroK=$("#hero-section-k img")
  $heroL=$("#hero-section-l img");

  TweenMax.set( $heroZ, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroK, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroL, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".twelfthBox").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroZ, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroK, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });

  //mouseleave

  $(".twelfthBox").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroZ, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroK, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});

//Box 13

jQuery(function( $ ){

  var $body=$("body"),
  $heroZA=$("#hero-section-za img"),
  $heroK=$("#hero-section-k img"),
  $heroL=$("#hero-section-l img");

  TweenMax.set( $heroZA, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroK, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroL, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".thirteenthBox").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroZA, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroK, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });

  //mouseleave

  $(".thirteenthBox").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroZA, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroK, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});

//box14



jQuery(function( $ ){

  var $body=$("body"),
  $heroZB=$("#hero-section-zb img"),
  $heroK=$("#hero-section-k img"),
  $heroL=$("#hero-section-l img");

  TweenMax.set( $heroZB, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroK, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroL, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".fourteenthBox").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroZB, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroK, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });

  //mouseleave

  $(".fourteenthBox").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroZB, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroK, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});

//brochure1

jQuery(function( $ ){

  var $body=$("body"),
  $heroZZ=$("#hero-section-zz img"),
  $heroK=$("#hero-section-k img"),
  $heroL=$("#hero-section-l img");

  TweenMax.set( $heroZZ, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroK, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroL, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".firstBrochure").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroZZ, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroK, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });

  //mouseleave

  $(".firstBrochure").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroZZ, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroK, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});


//brochure2

jQuery(function( $ ){

  var $body=$("body"),
  $heroZX=$("#hero-section-zx img"),
  $heroK=$("#hero-section-k img"),
  $heroL=$("#hero-section-l img");

  TweenMax.set( $heroZX, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroK, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroL, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".secondBrochure").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroZX, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroK, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });

  //mouseleave

  $(".secondBrochure").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroZX, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroK, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});





//brochure3

jQuery(function( $ ){

  var $body=$("body"),
  $heroAA=$("#hero-section-aa img"),
  $heroK=$("#hero-section-k img"),
  $heroL=$("#hero-section-l img");

  TweenMax.set( $heroAA, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroK, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroL, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".thirdBrochure").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroAA, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroK, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });

  //mouseleave

  $(".thirdBrochure").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroAA, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroK, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});



//brochure4

jQuery(function( $ ){

  var $body=$("body"),
  $heroCC=$("#hero-section-cc img"),
  $heroK=$("#hero-section-k img"),
  $heroL=$("#hero-section-l img");

  TweenMax.set( $heroCC, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroK, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroL, { transformStyle: 'preserve-3d'  });

  // $body.mousemove(function(e) {
  $(".fourthBrochure").on("mouseenter", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 50;
    var syPos =  pointer.pageY / $body.height() * 100 - 50;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroCC, 1, { rotationY: -0.1 * sxPos, rotationX: -0.1 * syPos, rotationZ: '0.02', transformPerspective:500, transformOrigin:'center center -40' });
    TweenMax.to( $heroK, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });

  });

  //mouseleave

  $(".fourthBrochure").on("mouseleave", function(e) {

    var pointer = e;

    if (e.targetTouches && e.targetTouches[0]) {
      e.preventDefault();
      pointer = e.targetTouches[0];
    }

    var sxPos =  pointer.pageX / $body.width()  * 100 - 100;
    var syPos =  pointer.pageY / $body.height() * 100 - 100;

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $heroCC, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: '0.0', transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroK, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroL, 1, { rotationY: 0.0 * sxPos, rotationX: 0.0 * syPos, rotationZ: 0.0, transformPerspective:500, transformOrigin:'center center' });

  });


});
