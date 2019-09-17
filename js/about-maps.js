

var gmarkers1 = [];
var markers1 = [];
var infowindow = new google.maps.InfoWindow({
    content: ''
});

// Our markers
markers1 = [
    ['0', '<div><strong>Maxwell-GunterA AFB</strong><br>Montgomery, Alabama<br><a href="http://www.maxwell.af.mil/" target="_blank">Website</a></div>', 32.4107341, -86.2564933, 'AL'],
    ['1', '<div><strong>Eielson AFB</strong><br>Fairbanks, Alaska<br><a href="http://www.eielson.af.mil/" target="_blank">Website</a></div>', 64.6749262, -147.1978283, 'AK'],
    ['2', '<div><strong>Joint Base Elmendorf-Richardson</strong><br>Anchorage, Alaska<br><a href="https://www.jber.jb.mil/" target="_blank">Website</a></div>', 61.244851,-149.7385459, 'AK'],
    ['3', '<div><strong>Davis-Monthan AFB</strong><br>Tuscon, Arizona<br><a href="http://www.dm.af.mil/" target="_blank">Website</a></div>', 32.181452,-110.8779985, 'AZ'],
    ['4', '<div><strong>Luke AFB</strong><br>Phoenix, Arizona<br><a href="http://www.luke.af.mil/" target="_blank">Website</a></div>', 33.5414929,-112.3776905, 'AZ'],

    ['5', '<div><strong>Little Rock AFB</strong><br>Jacksonville, Arkansas<br><a href="https://www.littlerock.af.mil/" target="_blank">Website</a></div>', 34.9052706,-92.1551215, 'AR'],

    ['6', '<div><strong>March Air Reserve Base</strong><br>Nine miles southeast of Riverside<br><a href="https://www.march.afrc.af.mil/" target="_blank">Website</a></div>', 33.8951832,-117.3019419, 'CA'],

    ['7', '<div><strong>Los Angeles AFB</strong><br>El Segundo, California<br><a href="https://www.losangeles.af.mil/" target="_blank">Website</a></div>', 33.919047,-118.3899018, 'CA'],

    ['8', '<div><strong>Edwards AFB</strong><br>Edwards, California<br><a href="http://www.edwards.af.mil/" target="_blank">Website</a></div>', 34.911643,-117.9516131, 'CA'],

    ['9', '<div><strong>Vandenberg AFB</strong><br>Lompoc, California<br><a href="https://www.vandenberg.af.mil/" target="_blank">Website</a></div>', 34.7420267,-120.5746344, 'CA'],

    ['10', '<div><strong>Travis AFB</strong><br>Fairfield, California<br><a href="https://www.travis.af.mil/" target="_blank">Website</a></div>', 338.2766339,-121.9639182, 'CA'],

    ['11', '<div><strong>Buckley AFB</strong><br>Denver, Colorado<br><a href="http://www.buckley.af.mil/" target="_blank">Website</a></div>', 39.7037867,-104.7774574, 'CO'],

    ['12', '<div><strong>Peterson AFB</strong><br>Colorado Springs, Colorado<br><a href="https://www.peterson.af.mil/" target="_blank">Website</a></div>', 38.8238658,-104.7022442, 'CO'],

    ['13', '<div><strong>Schriever AFB</strong><br>Colorado Springs, Colorado<br><a href="https://www.schriever.af.mil/" target="_blank">Website</a></div>', 38.8239826,-104.7702724, 'CO'],

    ['14', '<div><strong>US Air Force Academy</strong><br>Colorado Springs, Colorado<br><a href="https://www.usafa.af.mil/" target="_blank">Website</a></div>', 38.9909574,-104.8934623, 'CO'],

    ['15', '<div><strong>Dover AFB</strong><br>Dover, Delaware<br><a href="http://public.dover.amc.af.mil/" target="_blank">Website</a></div>', 39.1277341,-75.4706292, 'DE'],

    ['16', '<div><strong>Bolling AFB</strong><br>Washington, DC<br><a href="https://www.cnic.navy.mil/regions/ndw/installations/jbab.html" target="_blank">Website</a></div>', 39.1277341,-75.4706292, 'DC'],

];

/**
 * Function to init map
 */

function initialize() {
  var center = new google.maps.LatLng(37.850033, -99.6500523);
    var mapOptions = {
     zoom: 3,
     center: center,
     styles: [
       {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
       {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
       {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
       {
         featureType: 'administrative.locality',
         elementType: 'labels.text.fill',
         stylers: [{color: '#d59563'}]
       },
       {
         featureType: 'poi',
         elementType: 'labels.text.fill',
         stylers: [{color: '#d59563'}]
       },
       {
         featureType: 'poi.park',
         elementType: 'geometry',
         stylers: [{color: '#263c3f'}]
       },
       {
         featureType: 'poi.park',
         elementType: 'labels.text.fill',
         stylers: [{color: '#6b9a76'}]
       },
       {
         featureType: 'road',
         elementType: 'geometry',
         stylers: [{color: '#38414e'}]
       },
       {
         featureType: 'road',
         elementType: 'geometry.stroke',
         stylers: [{color: '#212a37'}]
       },
       {
         featureType: 'road',
         elementType: 'labels.text.fill',
         stylers: [{color: '#9ca5b3'}]
       },
       {
         featureType: 'road.highway',
         elementType: 'geometry',
         stylers: [{color: '#746855'}]
       },
       {
         featureType: 'road.highway',
         elementType: 'geometry.stroke',
         stylers: [{color: '#1f2835'}]
       },
       {
         featureType: 'road.highway',
         elementType: 'labels.text.fill',
         stylers: [{color: '#f3d19c'}]
       },
       {
         featureType: 'transit',
         elementType: 'geometry',
         stylers: [{color: '#2f3948'}]
       },
       {
         featureType: 'transit.station',
         elementType: 'labels.text.fill',
         stylers: [{color: '#d59563'}]
       },
       {
         featureType: 'water',
         elementType: 'geometry',
         stylers: [{color: '#17263c'}]
       },
       {
         featureType: 'water',
         elementType: 'labels.text.fill',
         stylers: [{color: '#515c6d'}]
       },
       {
         featureType: 'water',
         elementType: 'labels.text.stroke',
         stylers: [{color: '#17263c'}]
       }
     ],
     mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
}

/**
 * Function to add marker to map
 */

function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var website = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];

    marker1 = new google.maps.Marker({
        title: title,
        website: website,
        position: pos,
        category: category,
        map: map
    });

    gmarkers1.push(marker1);

    // Marker click listener
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
            console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            map.panTo(this.getPosition());
            map.setZoom(6);
        }
    })(marker1, content));
}

/**
 * Function to filter markers by category
 */

filterMarkers = function (category) {
    for (i = 0; i < markers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0) {
            marker.setVisible(true);

        }
        // Categories don't match
        else {
            marker.setVisible(false);
        }
    }
}

// Init map
initialize();
