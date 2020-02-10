import React from "react";
import data from '../../assets/states.json'
import Map from './Map.js'

const Explore = () => {
  return <div>Explore
    <Map data= {data}/>
  </div>;
};

export default Explore;
