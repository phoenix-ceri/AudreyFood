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
    
    //variable for static map, before user input, centered on Central Florida
    var staticMapUrl = "https://maps.geoapify.com/v1/staticmap?style=osm-liberty&width=571&height=473&center=lonlat:-81.421539,28.641699&zoom=9.5577&marker=lonlat:-122.307060209015,47.526340765976215;color:%23ff0000;size:medium&apiKey=51c9b31a24364a49b55fcecffd8cb687";
    
    //variable for markers 
    var barMarkerUrl = "https://maps.geoapify.com/v1/staticmap?apiKey=51c9b31a24364a49b55fcecffd8cb687&style=osm-liberty&marker=lonlat:" + lonLat + ";type:awesome;color:%23a82ecc;size:large;icon:glass-martini";
    
    var restaurantMarkerUrl = "https://maps.geoapify.com/v1/staticmap?apiKey=51c9b31a24364a49b55fcecffd8cb687&style=osm-liberty&marker=lonlat:" + lonLat + ";type:awesome;color:%23da291c;size:large;icon:utensils";
   
    var coffeeMarkerUrl = "https://maps.geoapify.com/v1/staticmap?apiKey=51c9b31a24364a49b55fcecffd8cb687&style=osm-liberty&marker=lonlat:" + lonLat + ";type:awesome;color:%2300704a;size:large;icon:coffee";   
   
    var userMarker = "https://maps.geoapify.com/v1/staticmap?apiKey=51c9b31a24364a49b55fcecffd8cb687&style=osm-liberty&marker=lonlat:" + lonLat + ";type:awesome;color:%2317f4f9;icon:hippo"

  function createLink() {
    link = "https://maps.geoapify.com/v1/staticmap?apiKey=51c9b31a24364a49b55fcecffd8cb687&style=osm-liberty&marker=lonlat:-82.4427663,29.3777872;type:awesome;color:%2317f4f9;icon:hippo";

    array.foreach(link += "marker=lonlat:" + array.lonlat + ";type:awesome;color:%2317f4f9;icon:hippo")

    //for loop probably
  }
//as a last resort, add all restaurants, coffee shops, bars to their respective links...:(

    //Function to show results location on map
  //fetch(staticMapUrl)
    fetch(link)
      .then(function(response){
        console.log(response);
        return response.json()
      })
      .then(function(data){
        console.log(data);
      })

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
  lonLat = position.coords.longitude + "," + position.coords.latitude;
}
