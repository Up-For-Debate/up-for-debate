import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoAlbersUsa } from "d3";
import useResizeObserver from "../../hooks/useResizeObserver.js";
import counties from "../../assets/countiesSmall.json";
import states from "../../assets/states.json";
import stateNumbers from "./stateNumber.js";
import { connect } from "react-redux";

const CountyMap = props => {

  const filterCountyName =(countyName)=> {
    const split = countyName.split(' ')
    const string = split.toString().replace(',', '-')
    return string
  }
  

  console.log(props);
  const svgRef = useRef();
  const wrapperRef = useRef();
  let dimensions = useResizeObserver(wrapperRef);
  //change to null post testing
  const [selectedStateNum, setSelectedStateNum] = useState("");
  useEffect(() => {
    setSelectedStateNum(
      stateNumbers.reduce(
        (acc, e) => (e.state === props.usState ? acc + e.number : acc),
        ""
      )
    );
    const selectedState = states.features.filter(
      feature => feature.properties.STATEFP === selectedStateNum
    );

    console.log(selectedState);

    const svg = select(svgRef.current);
    const reducedFeatures = counties.features.filter(
      feature => feature.properties.STATE === selectedStateNum
    );
    let { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    const projection = geoAlbersUsa()
      .fitSize([width, height], selectedState[0])
      .precision(2);

    const pathGenerator = geoPath().projection(projection);

    //counties.features.properties.STATEFP = numerical id of state
    //counties.features.properties.NAME = county name
    // console.log(reducedFeatures)
    svg
      .selectAll(".county")
      .data(reducedFeatures)
      .join("path")
      .attr("class", "county")
      // .attr('class', feature => selectedState === feature.properties.STATEFP ? 'selected-state' : 'not-selected-state')
      .attr("id", feature => filterCountyName(feature.properties.NAME)+'-county')
      .attr("d", feature => pathGenerator(feature));
  }, [selectedStateNum]);
  return (
    <div>
      <div className="county-map" ref={wrapperRef}>
        <svg className="county-map" ref={svgRef}></svg>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { usState } = state;
  return {
    usState
  };
};

export default connect(mapStateToProps)(CountyMap);
