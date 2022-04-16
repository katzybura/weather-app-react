import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./styles.css";


export default function Weather(props) {
  const [weatherData, setWeatherData]= useState({ready: false});
  const [city, setCity]= useState(props.defaultCity);

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
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord
 });
    
  }

  function search(){
    let apiKey="412b9e2225d563af1e9c2cad1fcab93c";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleCityChange(event){
setCity(event.target.value);
  }
  if (weatherData.ready){
      return (
    <div className="Weather">
     <form onSubmit={handleSubmit}>
      <input type="search" className="SearchBox" onChange={handleCityChange}/>{" "}
      <input type="submit" value="Search" className="Button" />
    </form>
    <WeatherInfo data={weatherData}/>
    <WeatherForecast coordinates={weatherData.coordinates}/>  
   </div>
  );
  } else{ 
    search();
return "Loading";
}
}

