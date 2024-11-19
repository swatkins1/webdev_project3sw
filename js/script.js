function initMap() {
    // Define map location
    const location = { lat: 40.7128, lng: -74.0060 }; // Example: NYC
    // Initialize map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
    });
    // Add marker
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Hello NYC!",
    });
    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: "<p>This is New York City!</p>",
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
