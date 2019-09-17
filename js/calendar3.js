



        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            // defaultDate: 'today_date',
            navLinks: true, // can click day/week names to navigate views
            selectable: true,
            selectHelper: true,
            select: function(start, end) {
                // Display the modal.
                // You could fill in the start and end fields based on the parameters
                $('.modal').modal('show');

            },
            eventClick: function(event, element) {
                // Display the modal and set the values to the event values.
                $('.modal').modal('show');
                $('.modal').find('#title').val(event.title);
                $('.modal').find('#starts-at').val(event.start);
                $('.modal').find('#ends-at').val(event.end);

            },
            editable: true,
            eventLimit: true // allow "more" link when too many events

        });

        // Bind the dates to datetimepicker.
        // You should pass the options you need
        $("#starts-at, #ends-at").datetimepicker();

        // Whenever the user clicks on the "save" button om the dialog
        $('#save-event').on('click', function() {
            var title = $('#title').val();
            if (title) {
                var eventData = {
                    title: title,
                    start: $('#starts-at').val(),
                    end: $('#ends-at').val()
                };
                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#calendar').fullCalendar('unselect');

            // Clear modal inputs
            $('.modal').find('input').val('');

            // hide modal
            $('.modal').modal('hide');
        });


        $('#calendar2').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            // defaultDate: 'today_date',
            navLinks: true, // can click day/week names to navigate views
            selectable: true,
            selectHelper: true,
            select: function(start, end) {
                // Display the modal.
                // You could fill in the start and end fields based on the parameters
                $('.modal').modal('show');

            },
            eventClick: function(event, element) {
                // Display the modal and set the values to the event values.
                $('.modal').modal('show');
                $('.modal').find('#title').val(event.title);
                $('.modal').find('#starts-at').val(event.start);
                $('.modal').find('#ends-at').val(event.end);

            },
            editable: true,
            eventLimit: true // allow "more" link when too many events

        });

        // Bind the dates to datetimepicker.
        // You should pass the options you need
        $("#starts-at, #ends-at").datetimepicker();

        // Whenever the user clicks on the "save" button om the dialog
        $('#save-event').on('click', function() {
            var title = $('#title').val();
            if (title) {
                var eventData = {
                    title: title,
                    start: $('#starts-at').val(),
                    end: $('#ends-at').val()
                };
                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#calendar').fullCalendar('unselect');

            // Clear modal inputs
            $('.modal').find('input').val('');

            // hide modal
            $('.modal').modal('hide');
        });


var myCalendar = $('#calendar');
myCalendar.fullCalendar();
var myEvent1 = {
  title:"Hiring Heros Career Fair",
  allDay: true,
  start: '2019-06-14',
  end: '2019-06-14'
  // start: new Date(),
  // end: new Date()
};
myCalendar.fullCalendar( 'renderEvent', myEvent1 );


var myEvent2 = {
  title:"Black Engineer of the Year Awards (BEYA)",
  allDay: true,
  year: 2019,
  start: '2019-06-10',
  end: '2019-06-11'
};
myCalendar.fullCalendar( 'renderEvent', myEvent2 );

var myEvent3 = {
  title:"National Society of Black Engineers Conference Career Fair",
  allDay: true,
  year: 2019,
  start: '2019-06-05',
  end: '2019-06-06'
};
myCalendar.fullCalendar( 'renderEvent', myEvent3 );


var myEvent4 = {
  title:"Women in Aviation International Conference 2019",
  allDay: true,
  year: 2019,
  start: '2019-06-27',
  end: '2019-06-27'
};
myCalendar.fullCalendar( 'renderEvent', myEvent4 );



$('#calendar').fullCalendar({
        events: [
       {
           title  : 'event1',
           start  : '2019-06-10'
       },
       {
           title  : 'event2',
           start  : '2019-06-27',
       },
       {
           title  : 'event3',
           start  : '2019-06-05'
       }
   ],
   eventRender: function (event, element, view) {
       // like that
       var dateString = $.fullCalendar.formatDate(event.start, 'yyyy-MM-dd');
       view.element.find('.fc-day[data-date="' + dateString + '"]').css('color', 'red !important');
    }

});



$('[class*="fc-day"]').filter(function() {
  return $(this).data('date') == "2019-06-27";
}).css("background-color","white");

$('[class*="fc-day"]').filter(function() {
  return $(this).data('date') == "2019-06-05";
}).css("background-color","white");


$('[class*="fc-day"]').filter(function() {
  return $(this).data('date') == "2019-06-10";
}).css("background-color","white");


$('[class*="fc-day"]').filter(function() {
  return $(this).data('date') == "2019-06-14";
}).css("background-color","white");

$('[class*="fc-day-number"]').filter(function() {
  return $(this).data('date') == "2019-06-05";
}).css("color","black !important");



$('[class*="fc-day-top"]').filter(function() {
  return $(this).data('date') == "2019-06-05";
}).css("background-color","#61aceb");


$('[class*="fc-day-top"]').filter(function() {
  return $(this).data('date') == "2019-06-27";
}).css("background-color","#61aceb");

$('[class*="fc-day-top"]').filter(function() {
  return $(this).data('date') == "2019-06-14";
}).css("background-color","#61aceb");

$('[class*="fc-day-top"]').filter(function() {
  return $(this).data('date') == "2019-06-10";
}).css("background-color","#61aceb");
