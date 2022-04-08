import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Box">
        <Weather />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

