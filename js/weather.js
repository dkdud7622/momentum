const API_KEY = "5fe0efc5ac3de73d82d19041d59dbd74";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = `\n ${data.name}`;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.classList.add("righttop");
            weather.classList.add("righttop");
        });
}

function onGeoError() {
    alert("I can`t found");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);