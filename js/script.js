/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example adds a map with markers, using web components.
//async function initMap() {
//  console.log("Maps JavaScript API loaded.");
//}

//window.initMap = initMap;


<script>
  function initMap() {
    // Create a map centered at a specific location
    const location = { lat: 40.7128, lng: -74.0060 }; // Example: New York City
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: location,
    });

    // Feature 1: Add a Marker
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Hello NYC!",
    });

    // Feature 2: Add an Info Window
    const infoWindow = new google.maps.InfoWindow({
      content: "<p>This is New York City!</p>",
    });
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    // Feature 3: Add a Circle
    const circle = new google.maps.Circle({
      map: map,
      radius: 1000, // meters
      center: location,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
    });
  }
</script>
