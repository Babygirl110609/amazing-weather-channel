var searchbtn = document.getElementById("search")
searchbtn.addEventListener("click",function(event){
event.preventDefault()
var city = document.getElementById("city").value
getapi(city)

})

const keys = "7ccbd061c7ce82c03419d3eabb9ca550"
function getapi(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keys}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var lat = data.coord.lat
        var lon = data.coord.lon
        getOneCall(lat,lon,city)
    })

}

function getOneCall(lat,lon,city){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${keys}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("weatherbug").innerHTML=`<div class="card">
        <div class="card-header">
      ${city}
        </div>
        <div class="card-body">
         <h5 class="card-title">Description: ${data.current.weather[0].description} </h5>
        <p>Temp: ${data.current.temp}</p>
        <p>Humidity: ${data.current.humidity}</p>
        <p>Wind Speed: ${data.current.wind_speed}</p>
        <img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png" />
         
        </div>
      </div>`
    
    })

}