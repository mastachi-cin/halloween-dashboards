//Create Map Object
var map = L.map("map-id", {
  center: [40.333000, -99.027822],
  zoom: 5.19,
});

// Create the tile layer that will be the background of our map
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
}).addTo(map);

// Initialize all of the LayerGroups we'll be using
//var layers = {
//  COMING_SOON: new L.LayerGroup(),
//  EMPTY: new L.LayerGroup(),
//  LOW: new L.LayerGroup(),
//  NORMAL: new L.LayerGroup(),
//  OUT_OF_ORDER: new L.LayerGroup()
//};

// Create the map with our layers


// Add our 'lightmap' tile layer to the map


// Create an overlays object to add to the layer control
//var overlays = {
//  "Coming Soon": layers.COMING_SOON,
//  "Empty Stations": layers.EMPTY,
//  "Low Stations": layers.LOW,
//  "Healthy Stations": layers.NORMAL,
//  "Out of Order": layers.OUT_OF_ORDER
//};

// Create a control for our layers, add our overlay layers to it
//L.control.layers(null, overlays).addTo(map);

// Create a legend to display information about our map
//var info = L.control({
//  position: "bottomright"
//});

// When the layer control is added, insert a div with the class of "legend"
//info.onAdd = function() {
//  var div = L.DomUtil.create("div", "legend");
//  return div;
//};
// Add the info legend to the map
//info.addTo(map);

// Perform an API call to Database
//d3.csv("/data/haunted_places.csv", function(spooky) {

//});
