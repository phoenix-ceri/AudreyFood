// Team Motto: We Have Fun But We Still Get Shit Done
// Local Time
var currentDate = moment().format('LLLL');
$('#date').text(currentDate);

const apikey = "51c9b31a24364a49b55fcecffd8cb687"

//global variables
var lonLat = "";
var link = "";

var requestOptions = {
    method: 'GET',
  };
  var restaurantRequestOptions = {
    method: 'GET',
    headers:{
      'Content-Type':'application/JSON',
      'Accept':'application/JSON'
    }
    
  };

  const getThings = async () => {
  const res = await fetch("./assets/JSON/restaurants.JSON", restaurantRequestOptions);
  const places = res.json();
  console.log(places);
  };

  getThings();
  // geolocation information 

let locationbtn = document.getElementById("locateme");

locationbtn.addEventListener("click", function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    document.getElementById("map").style.visibility = "hidden";
  } else { 
    console.log("We Cant See You!!")
  } return;
});

function showPosition(position) {
console.log("Latitude: " + position.coords.latitude + 
  "    Longitude: " + position.coords.longitude);
  lonLat = position.coords.longitude + "," + position.coords.latitude;
}


  //click function for submit button with user's criteria
  var searchButton = document.getElementById("search-btn");
  searchButton.addEventListener("click", function(){

  });

  //function to plot user location marker on map

  
  //GeoApify Places API fetch 
  fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=Mosco&apiKey=${apikey}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    
    // Logic for Map tool from Geoapify
    
    //variable for static map, before user input, centered on Central Florida
    var staticMapUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-liberty&width=571&height=473&center=lonlat:-81.421539,28.641699&zoom=9.5577&marker=lonlat:-122.307060209015,47.526340765976215;color:%23ff0000;size:medium&apiKey=${apikey}`;
    
    //variable for markers 
    var barMarkerUrl = `https://maps.geoapify.com/v1/staticmap?apiKey=${apikey}&style=osm-liberty&marker=lonlat:${lonLat};type:awesome;color:%23a82ecc;size:large;icon:glass-martini`;
    
    var restaurantMarkerUrl = `https://maps.geoapify.com/v1/staticmap?apiKey=${apikey}&style=osm-liberty&marker=lonlat:${lonLat};type:awesome;color:%23da291c;size:large;icon:utensils`;
   
    var coffeeMarkerUrl = `https://maps.geoapify.com/v1/staticmap?apiKey=${apikey}&style=osm-liberty&marker=lonlat:${lonLat};type:awesome;color:%2300704a;size:large;icon:coffee`;   
   
    var userMarker = `https://maps.geoapify.com/v1/staticmap?apiKey=${apikey}&style=osm-liberty&marker=lonlat:${lonLat};type:awesome;color:%2317f4f9;icon:hippo`

    queryParamsLink = `https://maps.geoapify.com/v1/staticmap?apiKey=${apikey}&style=osm-liberty&marker=lonlat:${lonLat};type:awesome;color:%2317f4f9;icon:${iconVar}`
    var iconVar = 

  function createLink() {
    link = `https://maps.geoapify.com/v1/staticmap?apiKey=${apikey}&style=osm-liberty&marker=lonlat:${lonLat};type:awesome;color:%2317f4f9;icon:${iconVar}`;

    array.foreach(link += "marker=lonlat:" + array.lonlat + ";type:awesome;color:%2317f4f9;icon:" + iconVar)
    //for loop probably
  }
  fetch(placesURLEndpoint, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
 .catch(error => console.log('error', error));
 placesURLEndpoint= `https://api.geoapify.com/v2/places?categories=${businesstype}&conditions=${conditions}&filter=rect:-81.421539,28.641699&limit=20&apiKey=${apikey}`;

 fetch(placesURLEndpoint).then(function (response) {
  return response.json() //conversion of raw data
}).then(function (data) {
  renderFiveDayResults(data);
  fetchCurrentWeather(data.city.coord.lat, data.city.coord.lon);
  renderHistory();
})
renderMapQueryResults(data);
showPosition(position.coords.longitude,position.coords.latitude);
renderFilteredResults();

function renderMapQueryResults(resultObj){
  for (let i = 0; i < resultObj.length; i++) {
  
}
}

var apiKey= "51c9b31a24364a49b55fcecffd8cb687"
//as a last resort, add all restaurants, coffee shops, bars to their respective links...:(

    //Function to show results location on map
  //fetch(staticMapUrl)
    // fetch(link)
    //   .then(function(response){
    //     console.log(response);
    //     return response.json()
    //   })
    //   .then(function(data){
    //     console.log(data);
    //   })

    //Function to 

    //Click function for user's suggestion button 
var suggestionButton = document.getElementById("send-btn");
suggestionButton.addEventListener("click", function(){
  var userSuggestionInput = {
    name: exampleInput7.value,
    email: exampleInput8.value,
    message: exampleFormControlTextarea13.value
  }
  localStorage.setItem("form input", JSON.stringify(userSuggestionInput));
});

