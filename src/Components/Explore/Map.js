import React, {useRef, useEffect, useState} from "react"
import { select, geoPath, geoAlbersUsa} from 'd3'
import useResizeobserver from '../../hooks/useResizeObserver.js'
import './map.css'

function Map({data}){
  const svgRef = useRef()
  const wrapperRef = useRef()
  let dimensions = useResizeobserver(wrapperRef)
  const [selectedState, setSelectedState] = useState(null)

  useEffect(() => {
    const svg = select(svgRef.current)

    const {width, height} =
      dimensions || wrapperRef.current.getBoundingClientRect()

      const projection = geoAlbersUsa()
        .fitSize([width, height], selectedState ? selectedState : data)
        .precision(2);
      const pathGenerator = geoPath().projection(projection)

      svg
        .selectAll('.state')
        .data(data.features)
        .join('path')
        .on('click', feature => {
          setSelectedState(selectedState === feature ? null : feature)
        })
        .transition()
        .duration(1000)
        .attr('class', 'state')
        .attr('id', feature => feature.properties.name)
        .attr('d', feature => pathGenerator(feature))
  }, [data, dimensions, selectedState])

    return(
      <>
        <div ref={wrapperRef}>
          <svg className='map' ref={svgRef}></svg>
          </div>
      </>
    )

}

export default Map