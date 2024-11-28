var cityInput = document.querySelector("#cityName");
var cityName = document.querySelector(".ccity");
var tempDisplay = document.querySelector(".temp");
var form = document.querySelector("#weatherForm");
var desc = document.querySelector(".desc")
var humidity = document.querySelector(".hText");
var speed = document.querySelector(".sText")

form.addEventListener("submit", function (e) {
    e.preventDefault();

    async function weather() {
        var apiKey = "ccfbbf233f1cf39c85edafb0cff86e92";
        var city = cityInput.value.trim();
        var row = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        var data = await row.json();

        cityName.textContent = data.name;
        tempDisplay.textContent = `Temperature: ${data.main.temp}°C`;
        desc.textContent = `${data.weather[0].description}`
        humidity.textContent = `${data.main.humidity}%`
        speed.textContent = `${data.wind.speed} m/s`

        console.log(data);
    }

    weather();
});