// Exibir mapa
function initialize() {

  // Exibir mapa
  var myLatlng = new google.maps.LatLng(-8.036125, -34.915751);
  var mapOptions = {
    zoom: 19,
    scrollwheel: false,
    center: myLatlng,
    panControl: false   
  }

  // ParÃ¢metros do texto que serÃ¡ exibido no clique
  var contentString = '<h2>Coggite Sala de Estudos</h2>' +
  '<p>Rua César Loureiro, 174 - Casa Forte, Recife - PE</p>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 700
  });

  // Exibir o mapa na div #mapa
  var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);

  // Marcador personalizado;
  var image = 'images/misc/pin.png';
  var marcadorPersonalizado = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: image,
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
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCMUzSj2NGqKwQm58gAM7sMxXQzWquSmbA&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;