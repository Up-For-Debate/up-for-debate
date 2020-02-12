import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoAlbersUsa } from "d3";
import useResizeobserver from "../../hooks/useResizeObserver.js";
import "./map.css";

function Map({ states, setStateSelected,stateSelected }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  let dimensions = useResizeobserver(wrapperRef);
  const [selectedState, setSelectedState] = useState(null);

  useEffect(() => {
    const svg = select(svgRef.current);

    let { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    const projection = geoAlbersUsa()
      //set view to either selected state or whole map if no selected state
      .fitSize(
        [selectedState ? width / 2 : width, height],
        selectedState ? selectedState : states
      )
      //prevents graphical tearing on zoom
      .precision(2);
    const pathGenerator = geoPath().projection(projection);
    //D3 svg render
    
    // console.log(states.features)
    svg
      .selectAll(".state")
      .data(states.features)
      .join("path")
      //set selected state to state clicked on or whole map
      .on("click", feature => {
        setStateSelected(stateSelected === feature.properties.NAME ? null : feature.properties.NAME)
        setSelectedState(selectedState === feature ? null : feature)
        ;
        // console.log(width);
      })
      //transition for zoom
      .transition()
      .duration(1000)
      //css classes and id
      .attr("class", "state")
      .attr("id", feature => feature.properties.NAME)
      //sets dimensions
      .attr("d", feature => pathGenerator(feature));
  }, [setStateSelected, stateSelected, states, dimensions, selectedState]);

  return (
    <>
      <div className="map-wrapper map" ref={wrapperRef}>
        <svg className="map" ref={svgRef}></svg>
      </div>
      {selectedState ? <style>{`.map{ width: 33vw; height: 30vh;} #${stateSelected}{stroke: navyblue; stroke-width: 4px;} .explore-map{grid-column: 3} .explore-reps{display: block}`}</style> : <></>}
    </>
  );
}

export default Map;
