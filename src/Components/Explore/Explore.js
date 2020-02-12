import React, { useState } from "react";
import states from "../../assets/states.json";
import Map from "./Map.js";
import "./explore.css";
import Representatives from "../Representative/Representatives.js";

const Explore = () => {
  const [stateSelected, setStateSelected] = useState(null);

  return (
    <>
      Explore
    <div className="explore-main">
      <div className="explore-reps">
        <Representatives />
      </div>
      <div className="explore-map">
        <Map
          states={states}
          stateSelected={stateSelected}
          setStateSelected={setStateSelected}
        />
      </div>
    </div>
    </>
  );
};

export default Explore;
