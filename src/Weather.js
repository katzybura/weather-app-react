import React from "react";
import Date from "./Date";
import "./styles.css";


export default function Weather() {
  return (
    <div className="Weather">
     <form>
      <input type="search" className="SearchBox" />{" "}
      <input type="submit" value="Search" className="Button" />
    </form>
      <Date />
     <div className="row">
     <div className="col-6">
       <h1>Verona, NJ</h1>
       <h2>
         <span className="MainTemp">33</span>°F
       </h2>
       <h3 id="Conditions">Cloudy</h3>
       <div>
         <img
           src="http://openweathermap.org/img/wn/10d@2x.png"
           width="100px"
           className="CurrentEmoji" alt="weather emoji"
         />
       </div>
     </div>
     <div className="col-6">
       <ul class="Factors">
         <li>
           Humidity: <span className="Humid">30</span>%
         </li>
         <li>
           Wind: <span className="Wind">5</span> mph
         </li>
       </ul>
     </div>
   </div> 
   </div>
  );
}

