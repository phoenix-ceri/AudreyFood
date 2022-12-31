// Team Motto: We Have Fun But We Still Get Shit Done
// Local Time
var currentDate = moment().format('LLLL');
$('#date').text(currentDate);

const apiKey = "51c9b31a24364a49b55fcecffd8cb687"

var restLonLatArray = [];

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
  console.log(places + "This is the GetThings Function");
  return places;
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


  // //click function for submit button with user's criteria
  // var searchButton = document.getElementById("search-btn");
  // searchButton.addEventListener("click", function(){

  // });

  //function to plot user location marker on map

  
  //GeoApify Places API fetch 
  fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=Mosco&apiKey=${apiKey}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    
    // Logic for Map tool from Geoapify
    
    //variable for static map, before user input, centered on Central Florida
    var staticMapUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-liberty&width=571&height=473&center=lonlat:-81.421539,28.641699&zoom=9.5577&marker=lonlat:-122.307060209015,47.526340765976215;color:%23ff0000;size:medium&apiKey=${apiKey}`;
    
    //variable for markers 
    var barMarkerUrl = `https://maps.geoapify.com/v1/staticmap?apiKey=${apiKey}&style=osm-liberty&marker=lonlat:${lonLat};type:awesome;color:%23a82ecc;size:large;icon:glass-martini`;
    
    var restaurantMarkerUrl = `https://maps.geoapify.com/v1/staticmap?apiKey=${apiKey}&style=osm-liberty&marker=lonlat:${lonLat};type:awesome;color:%23da291c;size:large;icon:utensils`;
   
    var coffeeMarkerUrl = `https://maps.geoapify.com/v1/staticmap?apiKey=${apiKey}&style=osm-liberty&marker=lonlat:${lonLat};type:awesome;color:%2300704a;size:large;icon:coffee`;   
   
    var userMarker = `https://maps.geoapify.com/v1/staticmap?apiKey=${apiKey}&style=osm-liberty&marker=lonlat:${lonLat};type:awesome;color:%2317f4f9;icon:hippo`

    queryParamsLink = `https://maps.geoapify.com/v1/staticmap?apiKey=${apiKey}&style=osm-liberty&marker=lonlat:${lonLat};type:awesome;color:%2317f4f9;icon:${iconVar}`
    var iconVar = 

  function createLink() {
    link = `https://maps.geoapify.com/v1/staticmap?apiKey=${apiKey}&style=osm-liberty&marker=lonlat:${lonLat};type:awesome;color:%2317f4f9;icon:${iconVar}`;

    array.foreach(link += "marker=lonlat:" + array.lonlat + ";type:awesome;color:%2317f4f9;icon:" + iconVar)
    //for loop probably
  }
  placesURLEndpoint= `https://api.geoapify.com/v2/places?categories=catering&filter=rect:11.573106549898483,48.13898913611139,11.57704581350751,48.13666585409989&limit=20&apiKey=51c9b31a24364a49b55fcecffd8cb687`;
// https://api.geoapify.com/v2/places?categories=catering&conditions=vegan&filter=rect:-81.421539,28.641699&limit=20&apiKey=${apiKey}
  fetch(placesURLEndpoint, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
 .catch(error => console.log('error', error));

renderMapQueryResults();
showPosition(position.coords.longitude,position.coords.latitude);
renderFilteredResults();

function renderMapQueryResults(resultObj){
    console.log ("function is running")
  var data = async() => {
    var data2 = await getThings();
    for (var i = 0; i < data2.restaurants.length; i++) {
      console.log (JSON.stringify(data2.restaurants[i].lon) + "," + JSON.stringify(data2.restaurants[i].lat) +" this is restaurant" + i);
      restLonLatArray.push(JSON.stringify(data2.restaurants[i].lon) + "," + JSON.stringify(data2.restaurants[i].lat))
    }
    console.log(restLonLatArray + " this is the long lat array")
    return data2;
  // var maybethiswillwork = data();
  // console.log(maybethiswillwork + "hopes and dreams")
  // var queryRestruarantsLonLat = ""
  // var queryRestruarantsLonLat += data.restaurants.lon + ',' + data.restaurants.lat
  // console.log (data() + "this is text")
  }
  data()
  mapString=""

  document.getElementById('map-container').innerHTML = mapString+= `<img id="map" width="571" height="473" 
    src="https://maps.geoapify.com/v1/staticmap?style=osm-liberty&width=571&height=473&center=lonlat:-81.421539,28.641699&zoom=9.5577&marker=lonlat:${queryRestruarantsLonLat};color:%23ff0000;size:medium&apiKey=${apiKey}"
    alt="${features[i].properties.name}">`
}

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

