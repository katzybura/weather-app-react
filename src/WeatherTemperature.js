import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit]= useState("celsius");
    if(unit==="celsius"){return(
        <h2>
        <span className="MainTemp">{Math.round(props.celsius)}</span>°C | <a href="/">°F</a>
      </h2>  
    );}
    else{
        return(<h2>"fart"</h2>

        );
    }
}