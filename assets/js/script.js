var requestOptions = {
    method: 'GET',
  };
  
  var restaurantNames= [
  "TakoCheena","Hollerbach's Willow Tree","King Bao","Judy's Diner","Kres Chophouse ","Kobe Japanese Stakehouse","Little Haiti Paté Kode","Bon Appetit Grill","Pho Hoa Noodle Soup (Orlando)","Mark's Jamaican Bar and Grill","Noodles and Rice Cafe","Kelly's Ice Cream","The Glass Knife","Greenery Creamery","Wondermade","1-Up","Mathers Social Gathering","Stardust Cafe","Foxtail Coffee","Hanson's Shoe Repair","se7en Bites","À La Cart","Better Than Sex - A Dessert Bar","Red Eye's Git-n-Messy Smokehouse","Taglish Filipino Handhelds","Gringos Locos","Hangry Dobo","Mahogany Coffee","CREDO","KungFu Tea","Lazy Moon","Krungthep","Bento","Yugiri Ramen Project","The Basin","Oak Flame Pizza","Fuji yama Sushi","Tuffy's Bottle Shop and Lounge","Izziban","Celery City Craft Beer Garden","Sabor del Carribe","Cocktails & Screams","SufferingBastard","Yabi Sushi","Tomasino's Pizza","PomPoms","The Daily Dose","4 Rivers Smokehouse","4 Rivers SweetShop","PhatAsh Bakes","Winter Park Biscuit Company","The Neighbors","Dochi","The Donut Patch","Domu","Gideon's Bakehouse","Farm & Haus","Hinckley's Fancy Meats","General Public House","La Femme du Fromage","Lineage Coffee","Wafu","Skyebird","Strand","Island Fin Poke Company","Hunger Street Tacos","The Ravenous Pig","Fiddler's Green","Purple Ocean Superfood Bar","Beefy King","TORI TORI","Plantees","Black Bean Deli","Mamak Asian Street Food","Pour Choice Taphouse","RockPit Brewing","Ivanhoe Park Brewing Company","Persimmon Hollow Brewing Co","The Coop","Drunken Monkey","Kabooki"];
  // var restaurantStreetAddresses = ["948 N Mills Ave,","201-205 E 1st St","710 N Mills Ave","5220 Old Winter Garden Rd","17 W Church St","11609 E Colonial Dr","5555 W Colonial Dr suite 501","4534 S Orange Blossom Trl","649 Primrose Dr,","10173 University Blvd","813 N Mills Ave,","3114 Corrine Dr","276 S Orlando Ave","420 E Church St Unit 112","214 E 1st St","25 W Church St","3 Phoenix Building, 30 S Magnolia Ave 3","1842 Winter Park Rd,",""," 27 E Pine St","617 Primrose Dr,","609 Irvington Ave,","1905 N Orange Ave","855 E State Rd 434","212 W 1st St Unit 1070","2406 E Robinson St,","12140 Collegiate Way Suite 105","212 W 1st St","885 N Orange Ave","12098 Collegiate Way","1011 E Colonial Dr,","1051 W Fairbanks Ave","151 S Orange Ave","8 N Summerlin Ave","212 W 1st St Suite A","212 W 1st St","10153 University Blvd"," 200 Myrtle Ave","1700 W Sand Lake Rd D124","114 S Palmetto Ave","3020 Lamberton Blvd #110","39 W Pine St","200 south Myrtle Ave","3755 S Orlando Dr","920 International Pkwy #1016"," 67 N Bumby Ave,","1196 Tree Swallow Dr Unit 1318","11764 University Blvd","1869 W State Rd 434","912 N Mills Ave,","3201 Corrine Dr,","3201 Corrine Dr STE 201,","3201 Corrine Dr,","1333 W Broadway St, Oviedo, FL 32765","3201 Corrine Dr Suite 100,","3201 Corrine Dr,","3201 Corrine Dr Suite 8,","3201 Corrine Dr,","156 Tuskawilla Rd","3201 Corrine Dr #106","1011 E Colonial Dr","3201 Corrine Dr STE 203,","3201 Corrine Dr,"," 807 N Mills Ave,","1450 Tuskawilla Rd #108","426 W Plant St","565 W Fairbanks Ave","544 W Fairbanks Ave","1110 N Mills Ave,","424 N Bumby Ave,","720 N Mills Ave,","1030 N Mills Ave,","1835 E Colonial Dr","1231 E Colonial Dr","1225 N Mills Ave","10 W Illiana St 32806","1300 Alden Rd","227 N Eola Dr","610 W Morse Blvd","444 N Bumby Ave","3122 E Colonial Dr"];
  // not done yet. need to do some research as to what is the necessary format for this

  //GeoApify Places API fetch 
  fetch("https://api.geoapify.com/v1/geocode/autocomplete?text=Mosco&apiKey=51c9b31a24364a49b55fcecffd8cb687", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    // Logic for Map tool from Geoapify

    
    //Logic for grabbing user's current location from Leaflet


    //Function to display results based on user's choices


    //Function to show results location on map

