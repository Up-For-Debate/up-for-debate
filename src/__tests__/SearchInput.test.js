import React, { useState } from 'react'
import { render  } from '@testing-library/react'
import store from '../redux/store'
import { Provider } from 'react-redux'
import axios from 'axios'
import { HashRouter } from 'react-router-dom'
import SearchInput from '../Components/SearchInput/SearchInput'

import {handleSubmit, handleClose, handleSelect, setOpen } from '../Components/SearchInput/SearchInput'

it('renders the search input', () => {
  const {container} = render(
    <HashRouter>
      <Provider store={store}>
        <SearchInput />
      </Provider>
    </HashRouter>
    )
  expect(container).not.toBe(null)
})

it('SearchInput will not allow submission without city and state', () => {
  
})