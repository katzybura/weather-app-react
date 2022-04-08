import React from "react";
import "./styles.css";
import Form from "./Form";
import Main from "./Main";

export default function Weather() {
  return (
    <div className="Weather">
      <Form />
      <h3 className="Date">Thursday 8:00</h3>
      <Main />
    </div>
  );
}

