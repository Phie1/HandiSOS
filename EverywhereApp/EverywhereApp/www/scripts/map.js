var map;

var get = [];
location.search.replace('?', '').split('&').forEach(function (val) {
    split = val.split("=", 2);
    get[split[0]] = split[1];
});

function getUserCoordinates(position) {
    lat_pos = position.coords.latitude;
    long_pos = position.coords.longitude;
    var myLatLng = { lat: lat_pos, lng: long_pos };
    map = new google.maps.Map(document.getElementById('map'), {
        
    zoom: 10,
    center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
    }

function initMap() {
    navigator.geolocation.getCurrentPosition(getUserCoordinates);
}
