import React from "react";
import states from '../../assets/states.json'
import counties from '../../assets/counties.json'
import Map from './Map.js'

const Explore = () => {
  return <div>Explore
    <Map states= {states} counties= {counties}/>
  </div>;
};

export default Explore;
