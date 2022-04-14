import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props){
    let day= props.date.getDay();
    let hour= props.date.getHours();
    let minutes= props.date.getMinutes();
    return(
        <h3 className="Date">{day} {hour}:{minutes}</h3>
    );
}