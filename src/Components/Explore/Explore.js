import React from "react";
import states from "../../assets/states.json";
import counties from "../../assets/counties.json";
import Map from "./Map.js";
import Header from "../Header/Header";

const Explore = () => {
  return (
    <div>
      <Header />
      <h1>Explore</h1>
      <Map states={states} counties={counties} />
    </div>
  );
};

export default Explore;
