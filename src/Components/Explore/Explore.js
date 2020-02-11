import React, {useState} from "react";
import states from '../../assets/states.json'
import counties from '../../assets/counties.json'
import Map from './Map.js'

const Explore = () => {
  const [stateSelected, setStateSelected] = useState(null)

  return <div>Explore
    <Map states= {states} counties= {counties} stateSelected={stateSelected} setStateSelected={setStateSelected}/>
  </div>;
};

export default Explore;
