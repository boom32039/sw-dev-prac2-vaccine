describe('Hospitals', () => {
  it('Should fetch hospitals and display', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:5000/api/v1/hospitals'}, req => {
        delete req.headers['if-none-match']      
    }).as('getHospitals')

    cy.visit('/')
    cy.get('video').should('exist')
    cy.get('video').should('have.prop', 'paused', false)
    cy.wait(5000)
    cy.get('#play-pause-button').click()
    cy.get('video').should('have.prop', 'paused', true)
    cy.get('#select-hospital-button').click()
    cy.wait(10000)
    cy.get('#hospital-catalog').find('img').should('have.length.at.least', 3);
  })
})