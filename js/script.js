function initMap() {
    // Define map location
    const location = { lat: 41.89247723681111, lng:  -87.61004561387278 }; // Navy Pier
	
    // Initialize map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
    });
    // Add marker
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Navy Pier!",
    });
    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: "<p>This is Navy Pier!</p>",
    });
    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
    // Add circle
    const circle = new google.maps.Circle({
        map: map,
        radius: 1000,
        center: location,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
    });
}
