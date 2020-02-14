import {filterRepName} from '../Components/Representative/Representatives.js'

test('returns all up to county', () => {
  expect(filterRepName('Los Angeles County Commisioner')).toBe('Los-Angeles')
})