var requestOptions = {
    method: 'GET',
  };
  
  fetch("https://api.geoapify.com/v1/geocode/autocomplete?text=Mosco&apiKey=51c9b31a24364a49b55fcecffd8cb687", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));