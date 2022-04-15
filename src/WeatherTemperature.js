import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit]= useState("celsius");
    function convertToCel(event){
        event.preventDefault();
        setUnit("celsius");
    }
    function convertToFahr(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    if(unit==="celsius"){return(
        <h2>
        <span className="MainTemp">{Math.round(props.celsius)}</span>°C | <a href="/" onClick={convertToFahr}>°F</a>
      </h2>  
    );}
    else{
        let fahrenheit= (props.celsius * 9)/5 + 32;

        return(<h2>
            <span className="MainTemp">{Math.round(fahrenheit)}</span>°F | <a href="/" onClick={convertToCel}>°C</a>
          </h2>

        );
    }
}