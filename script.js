const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "31f402a5a5dd8431c9e474b7a47c0663"
}


let country = document.querySelector('.country');
let city = document.querySelector('.city');
let check = document.querySelector('.check');
let tempIcon = document.querySelector('.tempIcon');

let weatherCountry = document.querySelector('.weatherCountry');
let temperature = document.querySelector('.temperature');
let weatherDescription = document.querySelector('.weatherDescription');

let feelsLike = document.querySelector('.feelsLike');
let humidity = document.querySelector('.humidity');
let longitud = document.querySelector('.longitud');
let latitude = document.querySelector('.latitude');





function getWeather() {

	console.log(city.value);
	console.log(country.value);

    fetch(`${param.url}weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${param.appid}`)
	.then(weather => {
			return weather.json();
            
		}).then(data => {
			console.log(data)
			weatherCountry.innerHTML = `${data.name} / ${data.sys.country}`;
			temperature.innerHTML = `${data.main.temp}° <span>C</span`;

			data.weather.forEach(element => {
				weatherDescription.innerHTML = element.description;

				if(element.id < 250) {
					tempIcon.src = `assets/storm.svg`
				} else if (element.id < 350) {
					tempIcon.src = `assets/drizzle.svg`
				} else if (element.id < 550) {
					tempIcon.src = `assets/snow.svg`
				}else if (element.id < 650) {
					tempIcon.src = `assets/rain.svg`
				}else if (element.id < 800) {
					tempIcon.src = `assets/atmosphere.svg`
				} else if (element.id === 800) {
					tempIcon.src = `assets/sun.svg`
				} else if (element.id > 800) {
					tempIcon.src = `assets/clouds.svg`
				}
			});

			feelsLike.innerHTML = `Feels like ${data.main.feels_like}°C`;
			humidity.innerHTML = `Humidity ${data.main.humidity}`;
			longitud.innerHTML = `Longitud ${data.coord.lon}`;
			latitude.innerHTML = `Latitude ${data.coord.lat}`
		});
		city.value = "";
		country.value = "";
} 

check.onclick = getWeather;

