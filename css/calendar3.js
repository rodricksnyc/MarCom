$(document).ready(function() {

  var today_date = moment().format('YYYY-MM-DD');
    console.log(today_date);

    // Get the modal
    var cool = document.getElementById('myCool');

    var calendar = document.getElementById('calendar');
    // Get the button that opens the modal
    var open = document.getElementById("openIt");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    open.onclick = function() {
      // cool.style.display = "block";
      calendar.style.display = "block";
      // cool.classList.add('flexing');
    }





    $(document).ready(function(){
        $("#openIt").click(function(){

        $('.center').slideUp(1500);
          // $('.center').animate({"height" : "0%"}, 2000).delay('000').fadeIn();
        $('.trans--grow').fadeOut(1000).addClass('zero');

        $('#myCool').animate({"height" : "1050px"}, 3000).delay('3000').fadeIn();
        $("#myCool").addClass('flexing');
        $("#myCool").slideDown(2500);


      });


      $(".close").click(function(){




          $("#myCool").slideUp(3000);
            $('#myCool').animate({"height" : "0px"}, 3000).delay('1000').fadeOut();

              setTimeout(function(){
               $("#myCool").removeClass('flexing');;
             },800);


             $('.center').slideDown(3000);
            $('.trans--grow').delay('1000').fadeIn(3000).removeClass('zero');



    });



    });



    // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //   cool.style.display = "none";
    // }

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == cool) {
    //     cool.style.display = "none";
    //   }
    // }


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
    });
