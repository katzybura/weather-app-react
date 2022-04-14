import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
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
      <FormattedDate date={weatherData.date}/>
     <div className="row">
     <div className="col-6">
       <h1>{weatherData.city}</h1>
       <h2>
         <span className="MainTemp">{Math.round(weatherData.temperature)}</span>°C
       </h2>
       <h3 id="Conditions" className="text-capitalize">{weatherData.description}</h3>
       <div>
         <img
            src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
           width="100px"
           className="CurrentEmoji" alt="weather emoji"
         />
       </div>
     </div>
     <div className="col-6">
       <ul class="Factors">
         <li>
           Humidity: <span className="Humid">{Math.round(weatherData.humidity)}</span>%
         </li>
         <li>
           Wind: <span className="Wind">{Math.round(weatherData.wind)}</span> mph
         </li>
       </ul>
     </div>
   </div> 
   </div>
  );
  } else{ let apiKey="d5051b82a85f7e540a240206a4a2fed4";
  let city="New York";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
return "Loading";
}
}

