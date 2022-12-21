//global variables
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

  //click function for submit button with user's criteria


  //function to render user's selection from local storage
// function renderUserSelection () {
//   var storedUserData = localStorage.getItem("name of key");

//   if (!storedUserData) {
//       return;
//   } else if (storedUserData !== null) {
//     document.querySelector(".class of what I need")
//     I need more stuff
//   }
// }
// }
  
  //GeoApify Places API fetch 
  fetch("https://api.geoapify.com/v1/geocode/autocomplete?text=Mosco&apiKey=51c9b31a24364a49b55fcecffd8cb687", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    
    // Logic for Map tool from Geoapify
    
    //variable for lat/lon of user's location input 
    var latLon;
    //variable for static map, before user input, centered on Orlando
    var staticMapUrl = "https://maps.geoapify.com/v1/staticmap?apiKey=51c9b31a24364a49b55fcecffd8cb687&style=osm-liberty&center=lonlat:28.5384,81.3789";
    
    var barMarkerUrl = "https://maps.geoapify.com/v1/staticmap?apiKey=51c9b31a24364a49b55fcecffd8cb687&style=osm-liberty&marker=" + latLon + "type:awesome;color:%23a82ecc;size:large;icon:glass-martini";
    //string value for bar marker just in case: type:awesome;color:%23a82ecc;size:large;icon:glass-martini
    var restaurantMarkerUrl = "https://maps.geoapify.com/v1/staticmap?apiKey=51c9b31a24364a49b55fcecffd8cb687&style=osm-liberty&marker=" + latLon + "type:awesome;color:%23da291c;size:large;icon:utensils";
    //string value for restaurant marker just in case: type:awesome;color:%23da291c;size:large;icon:utensils

    var coffeeMarkerUrl = "https://maps.geoapify.com/v1/staticmap?apiKey=51c9b31a24364a49b55fcecffd8cb687&style=osm-liberty&marker=" + latLon + "type:awesome;color:%2300704a;size:large;icon:coffee";   
    //string value for coffee shop marker just in case: type:awesome;color:%2300704a;size:large;icon:coffee

    //fetch(staticMapApiURL)


    //Logic for grabbing user's current location from Leaflet


    //Function to show results location on map


    //Function to 

    //Click function for user's suggestion button 
var suggestionButton = document.getElementById("email-support");
var userSuggestionInput = 
suggestionButton.addEventListener("click", function(){
//tailwind form stuff
});

// geolocation information 

let locationbtn = document.getElementById("locateme");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.log("Location Error")
  }
}

function showPosition(position) {
console.log("Latitude: " + position.coords.latitude + 
  "    Longitude: " + position.coords.longitude);
}