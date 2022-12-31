// Team Motto: We Have Fun But We Still Get Shit Done

// --------------------------------------------------------------------------------------------------------------------------------
// Consts
// --------------------------------------------------------------------------------------------------------------------------------


const API_KEY = "51c9b31a24364a49b55fcecffd8cb687" ;

const DEFAULT_LATITUDE  =  "28.641699" ; // Coordinates for
const DEFAULT_LONGITUDE = "-81.421539" ; // South Florida

const API_REQUEST_OPTIONS = 
{
  method: 'GET'
} ;

const JSON_REQUEST_OPTIONS =
{
  method: 'GET',
  headers:
  {
    'Content-Type':'application/JSON',
    'Accept':'application/JSON'
  }
} ;

const MAP_BASE   = 'https://maps.geoapify.com/v1/staticmap' ;
const MAP_STYLE  = 'style=osm-liberty'                      ;
const MAP_WIDTH  = 'width=571'                              ;
const MAP_HEIGHT = 'height=473'                             ;
const MAP_ZOOM   = 'zoom=9.5577'                            ;
const MAP_KEY    = `&apiKey=${API_KEY}`                     ;

const DEFAULT_MARKER = 'type:awesome;color:%235c5c5c;size:medium;icon:hand-spock'    ;
const BAR_MARKER     = 'type:awesome;color:%23a82ecc;size:medium;icon:glass-martini' ;
const FOOD_MARKER    = 'type:awesome;color:%23da291c;size:medium;icon:utensils'      ;
const COFFEE_MARKER  = 'type:awesome;color:%2300704a;size:medium;icon:coffee'        ;
const ICE_MARKER     = 'type:awesome;color:%2300704a;size:medium;icon:ice-cream'     ;
const USER_MARKER    = 'type:awesome;color:%2317f4f9;size:medium;icon:hippo'         ;

// --------------------------------------------------------------------------------------------------------------------------------
// Global variables
// --------------------------------------------------------------------------------------------------------------------------------


var longitude = DEFAULT_LONGITUDE ;
var latitude  = DEFAULT_LATITUDE  ;
var shitList  = [] ;

var locateButton       =            document.getElementById        ('locate-btn'       )  ;
var searchInput        =            document.getElementById        ('default-search'   )  ;
var searchButton       =            document.getElementById        ('search-btn'       )  ;
var suggestionButton   =            document.getElementById        ('send-btn'         )  ;
var categoryCheckboxes = Array.from(document.getElementsByClassName('category-checkbox')) ;
var mapContainer       =            document.getElementById        ('map-container'    )  ;
var mapImage           =            document.getElementById        ('map'              )  ;
var choicesList        =            document.getElementById        ('choices-list'     )  ;


locateButton    .addEventListener('click', locateButton_Click    ) ;
searchButton    .addEventListener('click', searchButton_Click    ) ;
suggestionButton.addEventListener('click', suggestionButton_Click) ;

// --------------------------------------------------------------------------------------------------------------------------------
// Local time
// --------------------------------------------------------------------------------------------------------------------------------

const CURRENT_DATE = moment().format('LLLL') ;
$('#date').text(CURRENT_DATE) ;

// Initial events

loadShitList() ;

renderMap() ;

// --------------------------------------------------------------------------------------------------------------------------------
// Loads the list of non-local features to filter out of the results
// --------------------------------------------------------------------------------------------------------------------------------

async function loadShitList()
{
  console.log('Fired: loadShitList()') ;

  shitList = await (await fetch('./assets/JSON/shitlist.json', JSON_REQUEST_OPTIONS)).json() ;
  
  console.log(shitList) ;
} ;

// --------------------------------------------------------------------------------------------------------------------------------
//  RenderPlaces
// --------------------------------------------------------------------------------------------------------------------------------

function renderPlaces(places)
{
  console.log('Fired: renderPlaces()') ;

  let goodList = [] ;

  places.features.forEach((feature, index) =>
  { 
    if (shitList.includes(feature.properties.name.trim()) === false)
    {
      goodList.push(feature) ;
    }
  }) ;
  
  renderMap (goodList) ;
  renderList(goodList) ;
}

// --------------------------------------------------------------------------------------------------------------------------------
//  Render map
// --------------------------------------------------------------------------------------------------------------------------------

function renderMap(features)
{
  console.log('Fired: renderMap()') ;

  // Per https://apidocs.geoapify.com/docs/maps/static/#about:
  // 
  // You can add multiple markers to static maps.
  // All marker definition parameters are joined with ";" character.
  // Definitions of multiple markers are separated with "|" character.

  // This will hold our collection of markers
  // The first thing we always do is add the the user marker

  let markers = `&marker=lonlat:${longitude},${latitude};${USER_MARKER}` ;

  // If a markers parameter was provided to this function, then we
  // need to add each individual marker item it contains to our growing string

  if (features !== null && features !== undefined)
  {
    features.forEach((feature, index) =>
    {   
      console.log(feature) ;

      let featureLongitude = feature.geometry.coordinates[0] ;
      let featureLatitude  = feature.geometry.coordinates[1] ;
      let featureMarker    = DEFAULT_MARKER ;

      console.log(featureLongitude) ;
      console.log(featureLatitude ) ;

      //
      
      feature.properties.categories.every((category) =>
      {
        if (category === 'catering.cafe')
        {
          featureMarker = COFFEE_MARKER ; return false ;
        }

        else if (category === 'catering.fast_food'
             ||  category === 'catering.restaurant')
        {
          featureMarker = FOOD_MARKER ; return false ;
        }

        else if (category === 'catering.bar'	
             ||  category === 'catering.pub'
             ||  category === 'catering.taproom')
        {
          featureMarker = BAR_MARKER ; return false ;
        }

        else if (category === 'catering.ice_cream')
        {
          featureMarker = ICE_MARKER ; return false ;
        }

        return true ;
      }) ;

      markers += `|lonlat:${featureLongitude},${featureLatitude};${featureMarker}` ;
    }) ;
  }

  const MAP_CENTER = `center=lonlat:${longitude},${latitude}` ;

  const MAP_URL = `${MAP_BASE}?${MAP_STYLE}&${MAP_WIDTH}&${MAP_HEIGHT}&${MAP_ZOOM}&${MAP_KEY}&${MAP_CENTER}${markers}` ;

  console.log(`API_URL: ${MAP_URL}`) ;

  mapImage.src = MAP_URL ;
}

// --------------------------------------------------------------------------------------------------------------------------------
//  Render list of choices
// --------------------------------------------------------------------------------------------------------------------------------

function renderList(features)
{
  console.log('Fired: renderList()') ;

  choicesList.innerHTML = '' ;

  features.forEach((feature) =>
  {
        choicesList.innerHTML += 
        
        `<li>
         <h3> ${feature.properties.name                                                                                          }      </h3>
         <p>  ${feature.properties.address_line2                                                                                 }      </p>
         </li>` ;
  }) ;
}

// --------------------------------------------------------------------------------------------------------------------------------
//  Locate button click event handler
// --------------------------------------------------------------------------------------------------------------------------------

function locateButton_Click()
{
   console.log('Fired: locateButton_Click()') ;

  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(getCurrentPosition_Callback) ;
  }
  
  else
  { 
    alert("We can't see you!") ;
  }
  
  return;
}

// --------------------------------------------------------------------------------------------------------------------------------
// Get current position callback
// --------------------------------------------------------------------------------------------------------------------------------

function getCurrentPosition_Callback(position)
{
  console.log('Fired: getCurrentPosition_Callback()') ;

  latitude  = position.coords.latitude  ;
  longitude = position.coords.longitude ;

  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`) ;

// Reload the map
  renderMap() ;
}


// --------------------------------------------------------------------------------------------------------------------------------
//  Search button click event handler
// --------------------------------------------------------------------------------------------------------------------------------

//function to plot user location marker on map

function searchButton_Click()
{
  console.log('Fired: searchButton_Click()') ;
  
  const PLACES_BASE       = `https://api.geoapify.com/v2/places` ;
  const PLACES_FILTER     = `filter=circle:${longitude},${latitude},50000` ;
  const PLACES_CATEGORIES = 'categories=' ;

  var categories = PLACES_CATEGORIES ;

  categoryCheckboxes.forEach((categoryCheckbox, index) =>
  {
    if (categoryCheckbox.checked === true)
    {
        categories += `${categoryCheckbox.value},` ;
    }
  }) ;

  // Remove last comma
  categories = categories.substring(0, categories.length - 1) ;

  const PLACES_URL = `${PLACES_BASE}?${PLACES_FILTER}&${categories}${MAP_KEY}` ;

  https://api.geoapify.com/v2/places?filter=circle:-81.421539,28.641699&apiKey=51c9b31a24364a49b55fcecffd8cb687

  //GeoApify Places API fetch 
  fetch(PLACES_URL, API_REQUEST_OPTIONS)
   .then (response => response.json())
   .then (result   => renderPlaces(result))
   .catch(error    => console.log('error', error)) ;
}

// --------------------------------------------------------------------------------------------------------------------------------
//  Suggestion button click event handler
// --------------------------------------------------------------------------------------------------------------------------------

function suggestionButton_Click()
{
  console.log('Fired: suggestionButton_Click()') ;

  const PLACES_BASE   = `https://api.geoapify.com/v1/geocode/autocomplete` ;
  const PLACES_FILTER = `filter=circle:${longitude},${latitude}}` ;
  const PLACES_NAME   = `name=${searchInput.value}` ;

  const PLACES_URL = `${PLACES_BASE}?${PLACES_FILTER}&${API_KEY}` ;

  

  //GeoApify Places API fetch 
  fetch(PLACES_URL, API_REQUEST_OPTIONS)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


  var userSuggestionInput =
  {
    name: exampleInput7.value,
    email: exampleInput8.value,
    message: exampleFormControlTextarea13.value
  }

  localStorage.setItem("form input", JSON.stringify(userSuggestionInput));
}

// Did Phoenix stay up till like 6 am after starting at noon the day prior, yes is it working HELL YES