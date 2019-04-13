// WEATHER API JSON FILE FROM api.openweathermap.org

function getWeather(townID) {
  let weatherRequest = new XMLHttpRequest()
  weatherRequest.open(
    'GET',
    'https://api.openweathermap.org/data/2.5/weather?id=' +
      townID +
      '&APPID=05114d9b05fc90300235d8704185c770&units=imperial',
    true
  )
  weatherRequest.send()
  weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText)
    console.log(weatherData)

    document.getElementById('currentTemp').innerHTML = Math.round(
      weatherData.main.temp
    )
    document.getElementById('weatherDesc').innerHTML =
      weatherData.weather[0].description
    document.getElementById('humidity').innerHTML = Math.round(
      weatherData.main.humidity
    )
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed
    document.getElementById('windDirection').innerHTML = Math.round(
      weatherData.wind.deg
    )

    var tempF = parseFloat(document.getElementById('currentTemp').innerHTML)
    var speed = parseFloat(document.getElementById('windSpeed').innerHTML)

    var windchill =
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * tempF * Math.pow(speed, 0.16)

    windchill = Math.round(windchill)
    document.getElementById('windchill').innerHTML = windchill
  }
}
