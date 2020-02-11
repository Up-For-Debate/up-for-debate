import React, { useState } from "react";
import cities from './cities.json'
import {TextField, InputBase, IconButton, Paper} from '@material-ui/core'
import {Autocomplete} from '@material-ui/lab'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCityState } from '../../redux/addressReducer'
import  SearchIcon  from '@material-ui/icons/Search'



const SearchInput = (props) => {
  const [city, setCity] = useState('')
  const [ usState, setUsState] = useState('')
  const [ submittable, setSubmittable] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!city || !usState) { return alert('please choose a city from the list')}
    if (submittable) {
      await props.getCityState(city, usState)
      props.history.push(`/Dashboard?city=${city}&state=${usState}`)
    } 

  }

  const handleSelect = e => {
    setCity(e.target.value.split(', ')[0])
    setUsState(e.target.value.split(', ')[1])
    setSubmittable(true)

  }


  return (
    <div>
      <Autocomplete
        id="City and State"
        options={cities}
        getOptionLabel={option => `${option.city}, ${option.state}`}
        style={{ width: 350 }}
        disableOpenOnFocus    
        autoHighlight    
        selectOnFocus
        clearOnEscape
        renderInput={params => (
          <Paper component="form" onSelect={ e => handleSelect(e)} >
            <TextField 
              {...params} 
              label="City, State" 
              id="cityState"
              variant="filled" 
              style={{width: 300}} />
            <IconButton type="submit" aria-label="search" onClick={ e => handleSubmit(e)} >
              <SearchIcon />
            </IconButton>
          </Paper>
        )}
        renderOption={(option, { inputValue }) => {
          const matches = match( `${option.city}, ${option.state}`, inputValue)
          const parts = parse( `${option.city}, ${option.state}`, matches)
          
          return (
            <div>
              {parts.map( (part, index) => (
                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                  {part.text}
                </span>
              ))}
            </div>
          )
        }}
      />
    </div>
    );
};

const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {getCityState})(SearchInput));


// TODO FOR THIS COMPONENT
// make the alert on line 22 a prettier thing (Bootstrap Flash kind of thing.)
// make the input outline red if incorrect
// 