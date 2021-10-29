const weather = document.querySelector("#weather_info");

const API_KEY ="65da478e7e981c7c2c2cfcdd703cc065"
function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	weather.innerText = `You live in, ${lat}, ${lon}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => 
            weather.innerText = `Weather in ${data.name} is ${data.weather[0].main}`
    );
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


