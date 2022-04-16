import React, {useState} from "react";

export default function WeatherTemperature(props){
        return(<h2>
            <span className="MainTemp">{Math.round(props.fahrenheit)}</span>°F 
          </h2>
        );
    }