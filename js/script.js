function initMap() {
    // Define the first location (Navy Pier)
    const navyPierLocation = { lat: 41.89247723681111, lng: -87.61004561387278 };

    // Define the second location (Millennium Park as an example)
    const millenniumParkLocation = { lat: 41.882702, lng: -87.622551 };

    // Initialize the map centered on Navy Pier
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: navyPierLocation,
    });

    // Add marker and info window for Navy Pier
    const navyPierMarker = new google.maps.Marker({
        position: navyPierLocation,
        map: map,
        title: "Navy Pier!",
    });
    const navyPierInfoWindow = new google.maps.InfoWindow({
        content: "<p>This is Navy Pier!</p>",
    });
    navyPierMarker.addListener("click", () => {
        navyPierInfoWindow.open(map, navyPierMarker);
    });

    // Add circle around Navy Pier
    const navyPierCircle = new google.maps.Circle({
        map: map,
        radius: 1000,
        center: navyPierLocation,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
    });

    // Add marker and info window for Millennium Park
    const millenniumParkMarker = new google.maps.Marker({
        position: millenniumParkLocation,
        map: map,
        title: "Millennium Park!",
    });
    const millenniumParkInfoWindow = new google.maps.InfoWindow({
        content: "<p>This is Millennium Park!</p>",
    });
    millenniumParkMarker.addListener("click", () => {
        millenniumParkInfoWindow.open(map, millenniumParkMarker);
    });

    // Add circle around Millennium Park
    const millenniumParkCircle = new google.maps.Circle({
        map: map,
        radius: 800,
        center: millenniumParkLocation,
        fillColor: "#0000FF",
        fillOpacity: 0.35,
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
    });
}
