function loadJSONP(url){

  var script = document.createElement('script');
  script.src = url;
  
  script.onload = function () {
    this.remove();
  };//After scripts is loaded and executed, remoe it from the DOM 
  
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(script);//Insert script into the DOM
}

function processJSONP(data){
  var channel = data.query.results.channel;
  document.querySelector('.weather').innerHTML = 
    'The temperature in ' + 
    channel.location.city + ', ' +
    channel.location.country + ' is ' +
    channel.item.condition.temp + '&deg; ' + 
    channel.units.temperature;
}

var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D12591774&format=json&diagnostics=true&callback=processJSONP';
loadJSONP(url);
