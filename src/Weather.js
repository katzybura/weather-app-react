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
      date: new Date(response.data.dt * 1000)
 });
    
  }

  function search(){
    let apiKey="d5051b82a85f7e540a240206a4a2fed4";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
    <WeatherForecast />  
   </div>
  );
  } else{ 
    search();
return "Loading";
}
}

