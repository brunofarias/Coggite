// Exibir mapa
function initialize() {

  // Exibir mapa
  var myLatlng = new google.maps.LatLng(37.5211132,-122.2781461);
  var mapOptions = {
    zoom: 16,
    scrollwheel: false,
    center: myLatlng,
    panControl: false,
    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.business","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.bus","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#cfe5ef"},{"visibility":"on"}]}]
  }

  // ParÃ¢metros do texto que serÃ¡ exibido no clique
  var contentString = '<h2>Nome do lugar</h2>' +
  '<p>Endereço</p>' +
  '<a href="tel:999999999">999999999</a>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 700
  });

  // Exibir o mapa na div #mapa
  var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);

  // Marcador personalizado;
  
  var marcadorPersonalizado = new google.maps.Marker({
    position: myLatlng,
    map: map,
    animation: google.maps.Animation.DROP
  });

  // Exibir texto ao clicar no Ã­cone
  google.maps.event.addListener(marcadorPersonalizado, 'click', function() {
    infowindow.open(map,marcadorPersonalizado);
  });
}

// FunÃ§Ã£o para carregamento assÃ­ncrono
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyBLlUtgwtGay7ovFhsFiRL1CAmqOHgWewo&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;