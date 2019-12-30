mapboxgl.accessToken =
  'pk.eyJ1IjoiY2VkcmljZGVibGFuY2siLCJhIjoiY2szdTQ3djV1MDB4bjNwcWVybG9rOWV2NyJ9.ChG1B3Za5k4u_HBjGSegfw';

var map = new mapboxgl.Map({
  container: 'map',
  center: [3.7174, 51.0543], // starting position
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 9,
});

map.on('load', function () {
  map.loadImage('../static/images/mapbox_marker.png', function (error, image) {
    if (error) throw error;
    map.addImage('icon', image);
    // add markers to map
    geojson.features.forEach(function (marker) {

      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });
  });
});
map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();
var geojson = {
  type: 'FeatureCollection',
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [3.167713, 50.976685]
      },
      properties: {
        title: 'Mapbox',
        description: 'Washington, D.C.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [4.387111, 51.206158]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
  ]
};