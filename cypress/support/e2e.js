//Prerequisites for QA Task TIVIX
import './commands'
import homePage from "../Source/homePage"

beforeEach(() => {
  cy.log('Trying to reach QA Lab Tivix WebPage')
  cy.visit('/')
  homePage.elements.Alert_info({ timeout: 10000 }).should('be.visible').and('contain', 'Please fill pickup and drop off dates')
  cy.log('QA Lab Tivix WebPage is opened correctly')
})