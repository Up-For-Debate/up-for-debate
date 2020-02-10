import React from "react";
import cities from './cities.json'
import {TextField} from '@material-ui/core'
import {Autocomplete} from '@material-ui/lab'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCityState } from '../../redux/addressReducer'
import { SearchIcon } from '@material-ui/icons'


const SearchInput = () => {
  return (
    <div>
      <Autocomplete
        id="City and State"
        options={cities}
        getOptionLabel={option => {return (`${option.city}, ${option.state}`)}}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="City, State" variant="filled" fullWidth />
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
