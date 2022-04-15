import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    function day(){
        let date= new Date(props.data.dt * 1000);
        let day= date.getDay();
        let days= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day]; 
    }
    return(
       <div>
        <div className="WeatherForecast-day">{day()}</div> 
        <div className="WeatherForecast-icon"><WeatherIcon code={props.data.weather[0].icon} size={32}/></div> 
         <div className="WeatherForecast-temps">
             <span className="WeatherForecast-high-temp">{Math.round(props.data.temp.max)}°</span> <span className="WeatherForecast-low-temp">{Math.round(props.data.temp.min)}°</span>
             </div>
             </div>
    );
}