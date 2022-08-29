const API_KEY = "74370f8236d68358c2f1019c72acd0fd";

function ongeook(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = data.weather[0].main;
        city.innerText = `${data.name} ${data.main.temp}`;

    })
}

function ongeoerror() {
    alert("위치정보를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(ongeook, ongeoerror);