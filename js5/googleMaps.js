
function initMap() {

  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 37.850033, lng: -99.6500523},
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
    ]
  });




  var marker = new google.maps.Marker({
    position: {lat: 38.8239, lng: -104.7001},
    icon: {

      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

    },
    map: map,
    title: 'Hello World!'
  });

  var marker2 = new google.maps.Marker({
    position: {lat: 33.9183, lng: -118.3828},
    icon: {

      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

    },
    map: map,
    title: 'Hello World!'
  });

  var marker3 = new google.maps.Marker({
    position: {lat: 35.0488, lng: -106.5506},
    icon: {

      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

    },
    map: map,
    title: 'Hello World!'
  });

  var marker4 = new google.maps.Marker({
    position: {lat: 30.461399, lng: -86.552010},
    icon: {

      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

    },
    map: map,
    title: 'Hello World!'
  });
  var marker5 = new google.maps.Marker({
    position: {lat: 32.6400, lng: -83.5917},
    icon: {

      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

    },
    map: map,
    title: 'Hello World!'
  });
  var marker6 = new google.maps.Marker({
    position: {lat: 32.3791, lng: -86.3626},
    icon: {

      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

    },
    map: map,
    title: 'Hello World!'
  });
  var marker7 = new google.maps.Marker({
    position: {lat: 42.361145, lng: -71.057083},
    icon: {

      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

    },
    map: map,
    title: 'Hello World!'
  });

  var marker8 = new google.maps.Marker({
    position: {lat: 39.8137, lng: -84.0537},
    icon: {

      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

    },
    map: map,
    title: 'Hello World!'
  });

  var marker9 = new google.maps.Marker({
    position: {lat: 41.1243, lng: -95.9146},
    icon: {

      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

    },
    map: map,
    title: 'Hello World!'
  });
  var marker10 = new google.maps.Marker({
    position: {lat: 35.4175, lng: -97.3874},
    icon: {

      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

    },
    map: map,
    title: 'Hello World!'
  });
  var marker11 = new google.maps.Marker({
    position: {lat: 29.4513, lng: -98.4524},
    icon: {

      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

    },
    map: map,
    title: 'Hello World!'
  });
  var marker12 = new google.maps.Marker({
    position: {lat: 41.1210, lng: -111.9703},
    icon: {

      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

    },
    map: map,
    title: 'Hello World!'
  });

}
