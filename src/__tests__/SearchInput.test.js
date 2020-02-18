import React from 'react'
import { render, fireEvent  } from '@testing-library/react'
import store from '../redux/store'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import SearchInput from '../Components/SearchInput/SearchInput'

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

it(`SearchInput will originally display the string 'City, State'`, () => {
  const {container}  = render(
    <HashRouter>
      <Provider store={store}>
        <SearchInput />
      </Provider>
    </HashRouter>
  )
  expect(container.textContent).toContain('City, State')

})

it('SearchInput will not allow submission without city and state', () => {
  const { getByTestId, container}  = render(
    <HashRouter>
      <Provider store={store}>
        <SearchInput />
      </Provider>
    </HashRouter>
  )
  const button = getByTestId('submit-button')
  fireEvent.click(button)
  
  expect(container.textContent).toContain('Please input valid city')

})

