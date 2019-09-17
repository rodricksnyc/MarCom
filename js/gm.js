function init_map(state){
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
          center: new google.maps.LatLng(39.095963, -96.591797),
          zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	       animation: google.maps.Animation.DROP,
        map: map,
        Title: locations[i][0]
      });

	google.maps.event.addListener(map, 'zoom_changed', function() {
                 if ( map.getZoom() < 3 ) { map.setZoom(3); }
        });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        $('#about-base-location').html(locations[i][6]);
        $('#about-base-name').html(locations[i][0]);
        var baseweb="";
        baseweb=baseweb.concat("<a href='",locations[i][4],"' target='new'>Website</a>");
        /*$('#about-base-website').html(baseweb);*/
        $('#about-base-occupants').html("Occupants: "+locations[i][5]);
        $('#about-base-description').html(locations[i][7]);
	var element_to_scroll_to = document.getElementById('about-base-description');
	element_to_scroll_to.scrollIntoView();
        }
      })(marker, i));
    }
/*
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infowindow.setPosition(pos);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infowindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infowindow, map.getCenter());
        }
*/
}

function sus_init_sparse_map(state){
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
          center: new google.maps.LatLng(35.1495, -90.0490),
          zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

        var infoWindowContent = "<div><h3>test data</h3></div>";

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        //animation: google.maps.Animation.DROP,
        map: map,
        Title: locations[i][0]
      });

        var infoWindowContent = "<div class='info_content'><b>"+locations[i][0]+"</b><h3></h3></div>";
        infowindow = new google.maps.InfoWindow({
                content:infoWindowContent
        });
        infowindow.open(map,marker);//Maybe SRB?

        google.maps.event.addListener(map, 'zoom_changed', function() {
                 if ( map.getZoom() < 3 ) { map.setZoom(3); }
        });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        $('#about-base-location').html(locations[i][6]);
        //$('#about-base-name').html(locations[i][0]);
        var baseweb="";
        baseweb=baseweb.concat("<a href='",locations[i][4],"' target='new'>Website</a>");
        //$('#about-base-website').html(baseweb);
        //$('#about-base-occupants').html("Occupants: "+locations[i][5]);
        $('#about-base-description').html(locations[i][7]);
        var element_to_scroll_to = document.getElementById('about-base-website');
        element_to_scroll_to.scrollIntoView();
        }
      })(marker, i));
    }
}
function init_sparse_map(state){
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
          center: new google.maps.LatLng(39.095963, -96.591797),
          zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

	var infoWindowContent = "<div><h3>test data</h3></div>";

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        //animation: google.maps.Animation.DROP,
        map: map,
        Title: locations[i][0]
      });

	var infoWindowContent = "<div class='info_content'><b>"+locations[i][0]+"</b><h3></h3></div>";
	infowindow = new google.maps.InfoWindow({
		content:infoWindowContent
	});
	infowindow.open(map,marker);//Maybe SRB?

        google.maps.event.addListener(map, 'zoom_changed', function() {
                 if ( map.getZoom() < 3 ) { map.setZoom(3); }
        });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        $('#about-base-location').html(locations[i][6]);
        $('#about-base-name').html(locations[i][0]);
        var baseweb="";
        baseweb=baseweb.concat("<a href='",locations[i][4],"' target='new'>Website</a>");
        $('#about-base-website').html(baseweb);
        $('#about-base-occupants').html("Occupants: "+locations[i][5]);
        $('#about-base-description').html(locations[i][7]);
	var element_to_scroll_to = document.getElementById('about-base-website');
	element_to_scroll_to.scrollIntoView();
        }
      })(marker, i));
    }
}

function update_map(state){

    // $('#about-base-location').html("<i>City/Location</i>");
    // $('#about-base-name').html("<i>Base Name</i>");
    // $('#about-base-website').html("<i>Website</i>");
    // $('#about-base-occupants').html("Occupants:");
    // $('#about-base-description').html("<i>Description</i>");
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: state_location[state]["zoom"],
      center: new google.maps.LatLng(state_location[state]["lat"], state_location[state]["long"]),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        Title: locations[i][0]
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          /*infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);*/
        // $('#about-base-location').html(locations[i][6]);
        // $('#about-base-name').html(locations[i][0]);
        // var baseweb="";
        // baseweb=baseweb.concat("<a href='",locations[i][4],"' target='new'>Website</a>");
        // $('#about-base-website').html(baseweb);
        // $('#about-base-occupants').html("Occupants: "+locations[i][5]);
        // $('#about-base-description').html(locations[i][7]);
        }
      })(marker, i));
    }
        // Try HTML5 geolocation.
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
}
