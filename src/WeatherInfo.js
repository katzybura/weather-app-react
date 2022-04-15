import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./styles.css";

export default function WeatherInfo(props){
    return(
    <div className="WeatherInfo">
        <FormattedDate date={props.data.date}/>
        <div className="row">
    <div className="col-6">
      <h1>{props.data.city}</h1>
      <WeatherTemperature celsius={props.data.temperature} />
      <h3 id="Conditions" className="text-capitalize">{props.data.description}</h3>
      <div className="CurrentEmoji">
        <WeatherIcon code={props.data.icon} />
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