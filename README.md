# Foodie Central
## Description
Have You Ever Been Traveling And Wanted To Find Some Unique Food?
<br /> 
Using This Page We Can See Where You Are, Find Food Based On What You Would Like [EX: Chinese, Pizza, Coffee ETC.] 
<br /> 
Giving You The Name Of Said Place And Helping You Find Locally Owned Places With Amazing Food To Enjoy!
## User Story
AS A foodie who loves to travel
I am excited to visit culturally diverse restaurants in new places
I WANT to discover well rated, locally owned restaurants in the cities I explore
AND view the location of the selected restaurant on a map
SO that I can experience the best these locations have to offer outside of a corporate chain

## Installation
This is a Web-Based Application, Thus No Install is Required
<br /> 
The Page Is Acccesable By This link:
<br /> 
![WebDeployment Link](https://phoenix-ceri.github.io/FoodieCentral/)
(https://phoenix-ceri.github.io/FoodieCentral/)
<br /> 

## Acceptance Criteria
When the Page is Loaded,
<br />
Then I am Able to Click a Symbol To Give My Location or Choose a City of Interest, 
<br />
When I Click the Symbol to Give My Location, 
<br />
Then a Modal Pops Open Asking for Permission to Get User Location
<br />
When I Choose A City of Interest or Accept My Location
<br />
Then It Takes Me to The City On the Map
<br />
When I Open The Filters to Get Results
<br />
Then I Can Decide What Type of Establishment and What Kind Of Food I Would Like, 
<br /> 
When I Click Submit on the Filters
<br />
Then The Map Will Show What Food Matches The Specified Criteria Within My Location or City of Interest Radius

## Screenshots
![Foodie Central Logo](./assets/screenshots/FoodieCentralLogo.gif)
![Screenshot 1](./assets/screenshots/screenshot1.png)
![Screenshot 2](./assets/screenshots/screenshot2.png)
![Screenshot 3](./assets/screenshots/screenshot3.png)
![Screenshot 4](./assets/screenshots/screenshot4.png)

## Future Features  
User Ability To Add Restaurant Reviews
<br /> 
Selected Restaurant's Marker Is Highlighted On The Map With an Icon Indicating it's Establishment's Nature
<br /> 
Expand To Add More Businesses In More Cities
<br /> 
Ability to Interact With Map
<br />
Usage of A Specific Restaurant API in Conjunction with our Blacklist
<br />
Sticky Footer
<br />
Integration of API Customization Local to Central Florida Region
<br />
Mobile App Responsive Layout


## Credits
Brandon Tai - Assistant CSS And HTML Engineer And Design Assistant
<br /> 
Eva Perez - Lead API-JS Logic Engineer, Co-Lead Project Manager, API Developer
<br /> 
Jeff Zulma- Lead CSS And HTML Engineer, Design Lead
<br /> 
Kelley Flinn - Lead Back End Logic Engineer
<br /> 
Phoenix Powell- Co-Lead Project Manager, Logic Engineer Assistant, Lead API Architect
<br /> 
<br /> 

APIs Used 
<br /> 
-HTML5 Reverse Geolocation API
 <br /> 
-Geoapify Places API
<br />
-Blacklist API
<br />
-Local Restaurant API (will be used in further future development)
<br />
<br /> 
<br /> 
 
Additonal Resources 
<br /> 
-Google
<br /> 
-StackOverflow
<br /> 
-Cody (TA): A Great Resource For Knowledge And Help 
<br /> 
-Lauren Mastin - Advised on Java Script

## Hurdles & Learning Points
Our custom list of Restaurants was not usable during this iteration because it was returning as an object rather than the parsed JSON information. Because we were not able to use our custom list, we did not impliment the 4th API to create a Central Florida Border on the map. This was actually something that turned out better because we were able to make this national and not only tailored to Central FL but also able to expland in future iterations
## License
The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
