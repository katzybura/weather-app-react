import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./styles.css";


export default function Weather() {
  const [weatherData, setWeatherData]= useState({ready: false});

  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000)
 });
    
  }
  if (weatherData.ready){
      return (
    <div className="Weather">
     <form>
      <input type="search" className="SearchBox" />{" "}
      <input type="submit" value="Search" className="Button" />
    </form>
    <WeatherInfo data={weatherData}/>
      
   </div>
  );
  } else{ let apiKey="d5051b82a85f7e540a240206a4a2fed4";
  let city="New York";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
return "Loading";
}
}

