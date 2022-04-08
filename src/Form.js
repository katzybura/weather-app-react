import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form>
      <input type="search" className="SearchBox" />{" "}
      <input type="submit" value="Search" className="Button" />
    </form>
  );
}