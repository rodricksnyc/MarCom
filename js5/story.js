
$('#openTimeline').on('click', function() {
  $('.firstSlider').hide();
  $( ".hiddenTime" ).slideToggle('slow');

});


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


$('#1996').on('click', function() {
  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);

  setTimeout(function(){
    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);


  setTimeout(function(){
    $( ".year").html( "1996" );
    $( ".new").html( "MarCom Group founded" );
    $( ".clientList").html( "" );
    $( ".awards").html( "" );
    $( ".awardsList").html( "" );
  },100);

});


$('#1997').on('click', function() {
  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);

  setTimeout(function(){
    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);


  setTimeout(function(){
    $( ".year").html( "1997" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "GRC (Later acquired by AT&T Government)<br>Star Access<br>Star Mountain<br>Xerox World Headquarters" );
    $( ".awards").html( "<h2></h2>" );
    $( ".awardsList").html( "<p></p>" );
  },100);

});

$('#1998').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);



  setTimeout(function(){
    $( ".year").html( "1998" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "Bell Atlantic<br>Concert (BT & ATT venture)<br>NET2000" );
    $( ".awards").html( "" );
    $( ".awardsList").html( "" );
  },100);
})

$('#1999').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "1999" );
    $( ".new").html( "<h2></h2>" );
    $( ".clientList").html( "<p></p>" );
    $( ".awards").html( "" );
    $( ".awardsList").html( "" );

  },100);
})

$('#2000').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2000" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "Army Audit Agency<br>Defense Finance and Accounting Service<br>Human Resources Technology Council<br>Internal Revenue Service<br>Office of Personal Management" );
    $( ".awards").html( "" );
    $( ".awardsList").html( "" );
  },100);
})

$('#2001').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2001" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "Air Force Space and Missile Systems Center<br>Defense Contract Audit Agency<br>Department of Education<br>DOE, Office of Inspector General<br>EPA, Office of Inspector General<br>Federal Communications Commission<br>National Institutes of Health<br>Torch Concepts<br>United States Postal Service<br>Veterans Benefits Administration" );
    $( ".awards").html( "" );
    $( ".awardsList").html( "" );
  },100);
})


$('#2002').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2002" );
    $( ".new").html( "NEW CLIENTS"  );
    $( ".clientList").html( "Department of Defense<br>General Services Administration<br>National Academy of Public Administration");
    $( ".awards").html( "AWARDS" );
    $( ".awardsList").html( "MarCom Group is ranked #39 in the Washington Business Journal's list of largest advertising agencies in the Washington DC Metro area.<br>MarCom Group receives 2nd place from NAGC Blue Pencil Competition for the EPA Recruitment Brochure.<br>MarCom Group is assigned two U.S. General Services Administration (GSA) contracting vehicles for Marketing, Media, and Public Information Services.");

  },100);
})


$('#2003').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2003" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "Commodity Futures Trading Commission<br>Defense Advanced Research Projects Agency<br>Department of Health and Human Services<br>Department of Defense, Civilian Personnel Management Service<br>National Security Personnel System<br>ransportation Security Administration<br>Veterans Affairs Office of Acquisition and Material Management<br>Voice of America" );
    $( ".awards").html( "AWARDS" );
    $( ".awardsList").html( "MarCom Group is ranked #22 in the Washington Business Journal's list of largest advertising agencies in the Washington DC Metro area.<br>MarCom Group recognized with Telly Award by Dir. Hugh Drescher for GSA Recruitment Commercial, 'You Can Do that Here!'<br>MarCom Group recognized with Telly Award by US OPM and GSA for GSA Recruitment Commercial, 'You Can Do that Here!'<br>MarCom Group receives 2003 TSA Partnership Award for Partnership in Protecting the Nation's Transportations Systems." );
  },100);
})


$('#2004').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2004" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "Bureau of Alcohol, Tobacco, Firearms & Explosives<br>Defense Leadership and Management Program<br>Department of Defense, Civilian Personnel Management Service<br>Federal Aviation Administration<br>National Credit Union Administration<br>National Labor Relations Board<br>Network Solutions<br>PMJ-AIT<br>US Airways" );
    $( ".awards").html( "AWARDS" );
    $( ".awardsList").html( "MarCom Group recognized as Second Place in Creative Excellence Award for Communications Employee Retention Program by NCUA.<br>MarCom Group recognized as Second Place in Creative Excellence Award for College Career Booth by NCUA." );
  },100);
})

$('#2005').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2005" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "AT&T Government Systems<br>CoStar Group, Inc.<br>Department of Defense Base Realignment and Closure<br>Department of Justice, Office of Inspector General<br>Salute to Heroes<br>United States Navy" );
    $( ".awards").html( "" );
    $( ".awardsList").html( "" );
  },100);
})


$('#2006').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2006" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "Defense Intelligence Agency, Equal Opportunity Office<br>Golden Key<br>L-3 Communications<br>Royal Enterntainment" );
    $( ".awards").html( "AWARDS" );
    $( ".awardsList").html( "MarCom Group recognized in Top 25 Advertising Agencies Ranked by Capitalized Ad Billings - Washington Business Journal." );
  },100);
})

$('#2007').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2007" );
    $( ".new").html( "<h2></h2>" );
    $( ".clientList").html( "<p></p>");
    $( ".awards").html( "AWARDS" );
    $( ".awardsList").html( "MarCom Group recognized in Top 25 Advertising Agencies in the Washington D.C. Market by the Washington Business Journal." );
  },100);
})


$('#2008').on('click', function() {
  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2008" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "2010 Census<br>Defense Contract Management Agency (return engagement)<br>Department of Defense - Recruitment Assistance Division<br>Department of Energy<br>Interton<br>Transportation Security Administration (return engagement)" );

    $( ".awards").html( "AWARDS & ACCOMPLISHMENTS" );
    $( ".awardsList").html( "MarCom Group selected to manage recruitment marketing for the 2010 Census with the goal of hiring over 1.8 million census takers... \"the largest peacetime assemblage of American workers in history.\"<br>MarCom Group is named by the U.S. Office of Personnel Management (OPM) as a Center for Talent Services (CTS) contractor to deliver products and services to Federal agencies in support of their recruitment efforts.<br>MarCom Group's Houston office relocates to Maine.<br>In only six weeks, MarCom Group researches, writes, edits, designs, and publishes the Department of Energy coffee table book, A Decade of Discovery, celebrating the work of the agency's 17 national research laboratories." );
  },100);


})

$('#2009').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2009" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "Air Force Personnel Center<br>Army Contracting Command<br>Department of Defense - Senior Executive Services<br>Federal Aviation Administration (return engagement)<br>National Intelligence University<br>Nuclear Regulatory Commission" );
    $( ".awards").html( "AWARDS" );
    $( ".awardsList").html( "2009 MarCom Group is ranked number 15 in the Washington Business Journal’s list of  20 Largest Ad Agencies in the Washington D.C. Metro area.<br>MarCom group is ranked among the Top U.S. Ad Agencies from All Disciplines by AdAge.com." );
  },100);


})
$('#2010').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2010" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "Army Corps of Engineers<br>Defense Intelligence Agency, Human Capital Office<br>Diabetes Scholar Foundation (DSF)<br>National Institute of Standards and Technology, Office of Law Enforcement Standards<br>OPM JoinUs" );
    $( ".awards").html( "AWARDS" );
    $( ".awardsList").html( "2010 MarCom Group launches www.AFCivilianCareers.com, the official website of the 180,000-strong civilian component of the U.S. Air Force.<br>MarCom Group moves to spacious new offices in the 50 West building in Fairfax.<br>MarCom Group is ranked number 11 in the Washington Business Journal’s list of 20 Largest Ad Agencies in the Washington D.C. Metro area." );
  },100);


})

$('#2011').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2011" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "Commodity Futures Trading Commission<br>Defense Advanced Research Projects Agency<br>Defense Intelligence Agency - National Intelligence University<br>Department of Health and Human Services<br>National Security Personnel System<br>Transportation Security Administration<br>Veterans Affairs Office of Acquisition and Materiel Management<br>Voice of America" );
    $( ".awards").html( "AWARDS" );
    $( ".awardsList").html( "MarCom Group CEO and Chief Creative Officer, Bob Rainford,turns the big 5-0!<br>MarCom Group plans and executesOPM’s 2011 Veterans Hiring Symposium.<br>MarCom Group partners with theAmerican Freedom Foundation to add a veterans hiring eventto the 8th annual American Freedom Festival, a concertevent saluting our nation’s veterans.<br>MarCom Group recognized as one of 5000 in 5000 Fastest-Growing Private Companies in America by Inc.com.<br>MarCom Group is ranked number 6 in the Washington Business Journal’s list of 20 Advertising Agencies." );
  },100);

})

$('#2012').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2012" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "AFPC Customer-Centric<br>FederalConference.com<br>Federal Deposit Insurance Corporation, Office of the Inspector General<br>Invisible Fence<br>National Association for Uniformed Services<br>Purple Heart<br>Washington Redskins Alumni" );
    $( ".awards").html( "AWARDS" );
    $( ".awardsList").html( "MarCom Group is recognized with the Communicator Award for Overall Brochure Design by the NGA Recruitment Campaign.<br>MarCom Group is recognized with the Communicator Award for Recruitment by the NGA Recruitment Campaign." );
  },100);

})


$('#2013').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2013" );
    $( ".new").html( "<h2></h2>" );
    $( ".clientList").html( "<p></p>");
    $( ".awards").html( "AWARDS" );
    $( ".awardsList").html( "MarCom Group sponsors the Excellence in Government Conference.<br>MarCom Group is ranked number 5 by 2012 Metro-Area Capitalized Ad Billings - Washington Business Journal." );
  },100);

})

$('#2014').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2014" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "Loudoun Water<br>RGS, Inc." );
    $( ".awards").html( "AWARDS & CONTRACTS" );
    $( ".awardsList").html( "MarCom Group recognized as Spotlight Awards Silver Winner for PR Excellence by US Army PM J-AIT.<br>CONTRACT AWARD- MarCom Group is awarded a five-year OPM Blanket Purchase Agreement (BPA) to provide recruitment and branding services through the Office of Personnel Management to their customers.<br>CONTRACT AWARD- MarCom Group is awarded a five-year OPM contract to provide recruiting program marketing and advertising services for NAVAIR." );
  },100);


})

$('#2015').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2015" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "Center for Medicare and Medicare Records" );
    $( ".awards").html( "AWARDS & CONTRACTS" );
    $( ".awardsList").html('CONTRACT AWARD- MarCom Group is awarded a four-year OPM contract to provide recruitment branding and marketing services for the Air Force Personnel Center.')
  },100);


})
$('#2016').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2016" );
    $( ".new").html( "<h2></h2>" );
    $( ".clientList").html( "<p></p>" );
    $( ".awards").html( "AWARDS & CONTRACTS" );
    $(".awardsList").html("CONTRACT AWARD- MarCom Group is awarded a two-year OPM contract to provide recruitment marketing and advertising for the Secretary of the Air Force/ Directorate of Acquisition Careers.")
  },100);


})

$('#2017').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2017" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "CACI" );
    $( ".awards").html( "AWARDS & CONTRACTS" );
    $(".awardsList").html('MarCom Group is recognized as one of the Top Advertising Agencies in the Washington D.C. Metro area by the Washington Business Journal.<br>CONTRACT AWARD- MarCom Group is awarded a two-year OPM contract to provide branding and marketing services or the Drug Enforcement Agency.');
  },100);


})


$('#2018').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2018" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "STR<br>OPM-DEA<br>USAID​00" );
    $( ".awards").html( "" );
    $( ".awardsList").html( "" );
  },100);


})
$('#2019').on('click', function() {

  setTimeout(function(){
    $('#currentContent').removeClass('flexing-scroll');
    $('#currentContent').removeClass('animated slideInRight');
  },10);


  setTimeout(function(){

    $('#currentContent').addClass('flexing-scroll');
    $('#currentContent').addClass('animated slideInRight').show();
  },100);

  setTimeout(function(){
    $( ".year").html( "2019" );
    $( ".new").html( "NEW CLIENTS" );
    $( ".clientList").html( "TBD" );
    $( ".awards").html( "" );
    $(".awardsList").html('');
  },100);


})
