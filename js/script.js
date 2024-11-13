let map;

function initMap() {
    // Initialize the map with a starting location (example: Navy Pier in Chicago)
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 41.892143, lng: -87.619133 }, // Coordinates for Navy Pier
        zoom: 12
    });

    // Feature 1: Add a marker at the specified location (Navy Pier)
    const marker = new google.maps.Marker({
        position: { lat: 41.892143, lng: -87.619133 },
        map: map,
        title: "Navy Pier",
    });

    // Feature 2: Add a custom styled map
    const styledMapType = new google.maps.StyledMapType([
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        }
    ], { name: "Styled Map" });

    // Apply the custom styled map
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    // Feature 3: Add a polygon
    const polygon = new google.maps.Polygon({
        paths: [
            { lat: 41.892143, lng: -87.619133 },
            { lat: 41.890000, lng: -87.619133 },
            { lat: 41.890000, lng: -87.615000 },
            { lat: 41.892143, lng: -87.615000 }
        ],
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
    polygon.setMap(map);
}
