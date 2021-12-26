let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 50.40184915, lng: 30.53992534 },
        zoom: 8,
    });
}
