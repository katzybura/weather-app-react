import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return(
    <div className="WeatherInfo">
        <FormattedDate date={props.data.date}/>
        <div className="row">
    <div className="col-6">
      <h1>{props.data.city}</h1>
      <WeatherTemperature celsius={props.data.temperature} />
      <h3 id="Conditions" className="text-capitalize">{props.data.description}</h3>
      <div>
        <img
           src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
          width="100px"
          className="CurrentEmoji" alt="weather emoji"
        />
      </div>
    </div>
    <div className="col-6">
      <ul class="Factors">
        <li>
          Humidity: <span className="Humid">{Math.round(props.data.humidity)}</span>%
        </li>
        <li>
          Wind: <span className="Wind">{Math.round(props.data.wind)}</span> mph
        </li>
      </ul>
    </div>
  </div> 
  </div>);
}