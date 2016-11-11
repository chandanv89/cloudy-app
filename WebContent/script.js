var weatherObj = null;

var fetchWeather = function() {
	var xhr = new XMLHttpRequest();
	var baseUrl = "http://api.openweathermap.org/data/2.5/weather";
	var location = "Dublin,ie";
	var appId = "74932e38d8565f1d9390b6aab5807369";

	var url = baseUrl + "?q=" + location + "&appid=" + appId;

	//console.log(url);

	xhr.open("GET", url, false);
	xhr.send();
	console.log(xhr.status + ": " + xhr.statusText);
	return JSON.parse(xhr.responseText);
}

var getTemperatureValue = function(){
	 return weatherObj.main.temp;
}

var updateDisplay = function(){
	weatherObj = fetchWeather();
	console.log(weatherObj);
	
	var tmpVal = getTemperatureValue();
	console.log($(".temperatureValue"));
	$(".temperatureValue")[0].textContent = tmpVal;
	//var tmpUnit = getTemperatureUnit();
	//var location = getLocation();
	//var time = getTime();
	
	console.log("Temp: " + tmpVal);
}

window.onload = updateDisplay();