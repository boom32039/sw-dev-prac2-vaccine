import React from 'react'
import DateReserve from './DateReserve'

describe('<DateReserve />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DateReserve />)
  })
})