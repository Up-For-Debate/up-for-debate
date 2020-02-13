import React, { useState, useEffect } from "react";
import cities from './cities.json'
import {TextField, IconButton, Paper} from '@material-ui/core'
import {Autocomplete} from '@material-ui/lab'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCityState } from '../../redux/addressReducer'
import  SearchIcon  from '@material-ui/icons/Search'
import Alert from '../Alert/Alert'


const SearchInput = (props) => {
  const [city, setCity] = useState('')
  const [ usState, setUsState] = useState('')
  const [ submittable, setSubmittable] = useState(false)

  const [ searchValue, setSearchValue ] = useState('')
  const [ options, setOptions] = useState([])

  const [open, setOpen] = useState(false)

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!city || !usState) {
        return setOpen(true)
      }
    if (submittable) {
      await props.getCityState(city, usState)
      props.history.push(`/Dashboard?city=${city}&state=${usState}`)
    } 

  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  const handleSelect = e => {
    setCity(e.target.value.split(', ')[0])
    setUsState(e.target.value.split(', ')[1])
    setSubmittable(true)
  }

  const filterArr = () => {
    let filteredArr = cities.filter( ele => ele.city.toLowerCase().includes(searchValue.toLowerCase()) || ele.state.toLowerCase().includes(searchValue.toLowerCase())) 
    filteredArr.length > 5 
    ? setOptions(filteredArr.splice(0, 5))
    : setOptions(filteredArr)
  }

  useEffect(() => {
    filterArr()
  }, [searchValue])


  return (
    <div>
      <Alert open={open} handleFn={handleClose}/>
      <Autocomplete
        id="City and State"
        options={options}
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
              style={{width: 300}} 
              onChange={ e => setSearchValue(e.target.value) } 
            />
            <IconButton 
              type="submit" 
              aria-label="search" 
              onClick={ e => handleSubmit(e)} 
            >
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
