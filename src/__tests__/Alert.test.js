import React  from 'react'
import { render } from '@testing-library/react'

import Alert from '../Components/Alert/Alert'


it('renders the alert', () => {
  const {container} = render(
        <Alert />
    )
  expect(container).not.toBe(null)
})

it(`Alert renders 'Please input valid city'`, () => {
  const {container} = render(
    <Alert open/>
  )
  expect(container.textContent).toContain('Please input valid city')
})