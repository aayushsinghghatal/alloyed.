

const apiKey = "f5f6da977412825ca5f22d5e07911c71";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector("#search input");
const searchBtn = document.querySelector("#search button");
const weatherIcon = document.querySelector("#weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector("#error").style.display = "block" ;
        document.querySelector("#weather").style.display = "none" ;
    }
    else{

        document.querySelector("#error").style.display = "none" ;
        document.querySelector("#weather").style.display = "block" ;

        var data = await response.json();

        document.querySelector("#condition").innerHTML = data.weather[0].description ;
        document.querySelector("#city").innerHTML = data.name ;
        document.querySelector("#temp").innerHTML = data.main.temp + "°C" ;
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%" ;
        document.querySelector("#wind").innerHTML = data.wind.speed + "km/h" ;


        if(data.weather[0].icon == "01d"){
            weatherIcon.src = "Icons/sun.png";
        }
        else if(data.weather[0].icon == "01n"){
            weatherIcon.src = "Icons/moon-stars.png";
        }
        else if(data.weather[0].icon == "02d"){
            weatherIcon.src = "Icons/cloud-sun.png";
        }
        else if(data.weather[0].icon == "02n"){
            weatherIcon.src = "Icons/cloud-moon.png";
        }
        else if(data.weather[0].icon == "03d" || data.weather[0].icon == "03n" || data.weather[0].icon == "04d" || data.weather[0].icon == "04n"){
            weatherIcon.src = "Icons/clouds.png";
        }
        else if(data.weather[0].icon == "09d" || data.weather[0].icon == "09n"){
            weatherIcon.src = "Icons/cloud-showers.png";
        }
        else if(data.weather[0].icon == "10d" || data.weather[0].icon == "10n"){
            weatherIcon.src = "Icons/cloud-showers-heavy.png";
        }
        else if(data.weather[0].icon == "11d" || data.weather[0].icon == "11n"){
            weatherIcon.src = "Icons/thunderstorm.png";
        }
        else if(data.weather[0].icon == "13d" || data.weather[0].icon == "13n"){
            weatherIcon.src = "Icons/cloud-hail.png";
        }
        else if(data.weather[0].icon == "50d" || data.weather[0].icon == "50n"){
            weatherIcon.src = "Icons/smog.png";
        }
    
        document.querySelector("#weather").style.display = "block"
    }

   

    //console.log(data);
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

//checkWeather();