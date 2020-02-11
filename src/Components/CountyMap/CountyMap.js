import React, {useRef, useEffect, useState} from "react";
import {select, geoPath, geoAlbersUsa} from 'd3'
import useResizeObserver from '../../hooks/useResizeObserver.js'
import counties from '../../assets/countiesSmall.json'
import states from '../../assets/states.json'
import stateNumbers from './stateNumber.js'
import {connect} from 'react-redux'

const CountyMap = () => {
  const svgRef = useRef()
  const wrapperRef = useRef()
  let dimensions = useResizeObserver(wrapperRef)
  //change to null post testing
  //! CHECK TO MAKE SURE 14 WORKS
  const [selectedStateNum, setSelectedStateNum] = useState(null)
  const selectedState = states.features.filter(feature => 
    feature.properties.STATEFP == selectedStateNum)

  // console.log(selectedState)
  useEffect(() => {
    setSelectedStateNum( stateNumbers.reduce((acc, e )=> 
      e.state=== usState ? acc = e.number : null
    , '')
    )

    const svg = select(svgRef.current)
    const reducedFeatures = counties.features.filter(feature => 
      feature.properties.STATE == selectedStateNum
    )
    let {width, height} = 
      dimensions || wrapperRef.current.getBoundingClientRect()

    const projection = geoAlbersUsa()
      .fitSize(
        [width, height],
        selectedState[0]
        )
        .precision(2)

  const pathGenerator = geoPath().projection(projection)


  //counties.features.properties.STATEFP = numerical id of state
  //counties.features.properties.NAME = county name
  // console.log(reducedFeatures)
  svg
    .selectAll('.county')
    .data(reducedFeatures)
    .join('path')
    .attr('class', 'county')
    // .attr('class', feature => selectedState === feature.properties.STATEFP ? 'selected-state' : 'not-selected-state')
    .attr('id', feature => feature.properties.NAME)
    .attr('d', feature => pathGenerator(feature))
    

  }, [selectedStateNum])
  return (<div>

    <div className='map-wrapper' ref={wrapperRef}>
      <svg className='map' ref={svgRef}></svg>
      </div>
  </div>);
};

const mapStateToProps = state => {
  const {
    city,
    usState
  }= state;
  return {
    city, 
    usState
  }
}

export default connect(mapStateToProps)(CountyMap);
