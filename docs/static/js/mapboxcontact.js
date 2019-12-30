mapboxgl.accessToken =
  'pk.eyJ1IjoiY2VkcmljZGVibGFuY2siLCJhIjoiY2szdTQ3djV1MDB4bjNwcWVybG9rOWV2NyJ9.ChG1B3Za5k4u_HBjGSegfw';

var map = new mapboxgl.Map({
  container: 'map',
  center: [3.264666, 51.1283193], // starting position
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 12,
});

map.on('load', function () {
  map.loadImage('../static/assets/images/mapbox_icon.png', function (error, image) {
    if (error) throw error;
    map.addImage('icon', image);
    map.addLayer({
      "id": "points",
      "type": "symbol",
      "source": {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [3.264666, 51.1283193]
            }
          }]
        }
      },
      "layout": {
        "icon-image": "icon",
        "icon-size": 0.15
      }     
    });  
  });
});
map.addControl(new mapboxgl.NavigationControl());

// add markers to map
