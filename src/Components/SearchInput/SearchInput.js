import React from "react";
import cities from './cities.json'
import {TextField} from '@material-ui/core'
import {Autocomplete} from '@material-ui/lab'

const SearchInput = () => {
  return (
    <div>
      <Autocomplete
        id="City and State"
        options={cities}
        getOptionLabel={option => {return (`${option.city}, ${option.state}`)}}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="City and State" variant="filled" fullWidth />
        )}
      />
    </div>
    );
};

export default SearchInput;
