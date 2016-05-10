map = {}

initMap = ->
  map = new google.maps.Map document.getElementById('map'),
    center: 
      lat: 25.657719
      lng: -100.366763
    zoom: 15

  marker = new google.maps.Marker 
    position: map.getCenter()
    map: map
    title: 'Hola'