function initMap() {
    // Define the first location (Bus Stop near Navy Pier)
    const busnp = { lat: 41.891149, lng: -87.617119 };

    // Define the second location (Fireworks near Navy Pier)
    const fireworknp = { lat: 41.893145, lng: -87.609877 };

    // Define the third location (Jewel near Navy Pier)
    const jewelnp = { lat: 41.891253, lng: -87.611100 };

    // Define the fourth location (Movie near Navy Pier)
    const movienp = { lat: 41.891411213598616, lng: -87.60678167070738 };

    // Define the fifth location (Walk near Navy Pier)
    const walknp = { lat: 41.893920, lng: -87.610628 };

    // Define the sixth location (Sunset near Navy Pier)
    const sunsetnp = { lat: 41.891196, lng: -87.608021 };

    // Initialize the map centered on the first location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: busnp,
    });

    // Add marker and info window for Bus Stop
    const busnpMarker = new google.maps.Marker({
        position: busnp,
        map: map,
        title: "Bus Stop near Navy Pier",
    });
    const busnpInfoWindow = new google.maps.InfoWindow({
        content: "<p>Bus was stuck for 20 minutes!</p>",
    });
    busnpMarker.addListener("click", () => {
        busnpInfoWindow.open(map, busnpMarker);
    });
    const busnpCircle = new google.maps.Circle({
        map: map,
        radius: 50,
        center: busnp,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
    });

    // Add marker and info window for Fireworks
    const fireworknpMarker = new google.maps.Marker({
        position: fireworknp,
        map: map,
        title: "Fireworks near Navy Pier",
    });
    const fireworknpInfoWindow = new google.maps.InfoWindow({
        content: "<p>Fireworks from afar pic!</p>",
    });
    fireworknpMarker.addListener("click", () => {
        fireworknpInfoWindow.open(map, fireworknpMarker);
    });
    const fireworknpCircle = new google.maps.Circle({
        map: map,
        radius: 50,
        center: fireworknp,
        fillColor: "#00FF00",
        fillOpacity: 0.35,
        strokeColor: "#00FF00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
    });

    // Add marker and info window for Jewel
    const jewelnpMarker = new google.maps.Marker({
        position: jewelnp,
        map: map,
        title: "Jewel near Navy Pier",
    });
    const jewelnpInfoWindow = new google.maps.InfoWindow({
        content: "<p>Jewel Drone Photo!</p>",
    });
    jewelnpMarker.addListener("click", () => {
        jewelnpInfoWindow.open(map, jewelnpMarker);
    });
    const jewelnpCircle = new google.maps.Circle({
        map: map,
        radius: 50,
        center: jewelnp,
        fillColor: "#0000FF",
        fillOpacity: 0.35,
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
    });

    // Add marker and info window for Movie
    const movienpMarker = new google.maps.Marker({
        position: movienp,
        map: map,
        title: "Movie near Navy Pier",
    });
    const movienpInfoWindow = new google.maps.InfoWindow({
        content: "<p>Close up fireworks!</p>",
    });
    movienpMarker.addListener("click", () => {
        movienpInfoWindow.open(map, movienpMarker);
    });
    const movienpCircle = new google.maps.Circle({
        map: map,
        radius: 50,
        center: movienp,
        fillColor: "#FFFF00",
        fillOpacity: 0.35,
        strokeColor: "#FFFF00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
    });

    // Add marker and info window for Walk
    const walknpMarker = new google.maps.Marker({
        position: walknp,
        map: map,
        title: "Walk near Navy Pier",
    });
    const walknpInfoWindow = new google.maps.InfoWindow({
        content: "<p>Daytime walking trip near Navy Pier!</p>",
    });
    walknpMarker.addListener("click", () => {
        walknpInfoWindow.open(map, walknpMarker);
    });
    const walknpCircle = new google.maps.Circle({
        map: map,
        radius: 50,
        center: walknp,
        fillColor: "#FF00FF",
        fillOpacity: 0.35,
        strokeColor: "#FF00FF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
    });

    // Add marker and info window for Sunset
    const sunsetnpMarker = new google.maps.Marker({
        position: sunsetnp,
        map: map,
        title: "Sunset near Navy Pier",
    });
    const sunsetnpInfoWindow = new google.maps.InfoWindow({
        content: "<p>Pretty sunset pic near Navy Pier!</p>",
    });
    sunsetnpMarker.addListener("click", () => {
        sunsetnpInfoWindow.open(map, sunsetnpMarker);
    });
    const sunsetnpCircle = new google.maps.Circle({
        map: map,
        radius: 50,
        center: sunsetnp,
        fillColor: "#FFA500",
        fillOpacity: 0.35,
        strokeColor: "#FFA500",
        strokeOpacity: 0.8,
        strokeWeight: 2,
    });
}












document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const images = slider.querySelectorAll("img");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  let currentIndex = 0;

  function updateSlider() {
    const offset = -currentIndex * slider.clientWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });

  // Adjust slider size dynamically
  window.addEventListener("resize", updateSlider);
});
