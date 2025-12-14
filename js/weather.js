const APIKey = "330f374366c3a87efcea97b60aa517b2";

const weatherDiv = document.querySelector("#weather");
let dataOre = 0;

function geoOk(position){
    let weatherDivPlaceName = weatherDiv.querySelector("span:first-child");
    let weatherDivWeather = weatherDiv.querySelector("span:last-child");
    weatherDivPlaceName.innerText = "Please wait Loading";

    const latitude= position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);

    const APILink = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`;

    fetch(APILink)
        .then(response => response.json()) // 응답을 JSON으로 변환
        .then(data => {
            console.log(data); // 기상청에서 준 실제 데이터
            dataOre = data;
            placeName = dataOre.name;
            weather = dataOre.weather[0].main;
            weatherDivPlaceName.innerText = placeName + " : ";
            weatherDivWeather.innerText = weather;
        });

    // fetch 는 서버에서 응답이 오기 전에 밑에걸 실행 함 dataOre 가 빈 채 진행

    // console.log(dataOre);
    // weather = dataOre.weather[0].main;
    // placeName = dataOre.name;
    // weatherDivPlaceName.innerText = placeName + " ";
    // weatherDivWeather.innerText = weather;
}
function geoError(){
    alert("위치 정보 검색 실패")
}

navigator.geolocation.getCurrentPosition(geoOk ,geoError);