import React, { useState } from "react";
import states from "../../assets/states.json";
import Map from "./Map.js";

const Explore = () => {
  const [stateSelected, setStateSelected] = useState(null);

  return (
    <div>
      Explore
      <Map
        states={states}
        stateSelected={stateSelected}
        setStateSelected={setStateSelected}
      />
    </div>
  );
};

export default Explore;
