import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="Box">
        <Weather />
      </div>
      <p><a href="https://github.com/katzybura/weather-app-react">Open Source Code</a> by Katherine Zybura.</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

