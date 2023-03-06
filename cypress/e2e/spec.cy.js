//My First TestSuite - I mean it, never worked with Cypress before (selenium only)
//I don't know how it should look like in a pythonic way or syntethic sugar for Cypress
import homePage from "../Source/homePage"
import detailsPage from "../Source/detailsPage"
import rentPage from "../Source/rentPage"

describe('E2E tests for QA task Tivix', () => {
const dayjs = require('dayjs')

  it('Fill all the correct data - Happy Path', () => {
    homePage.select_country("France")
    homePage.select_city("Paris")
    homePage.insert_model("Toyota Aygo")  //currently model is irrelevant, lets pretend it isn't :D
    homePage.insert_pickup_date(dayjs())
    homePage.insert_dropoff_date(dayjs().add(2, 'day'))
    homePage.elements.Search_button().click()
    homePage.elements.Results_table().should('be.visible')
    homePage.elements.First_available_rent_button().click()
    cy.url().should('include', 'details/')
    detailsPage.elements.Rent_button().click()
    cy.url().should('include', 'rent/').and('be.visible', rentPage.elements.Rent_button())
    rentPage.insert_name("Eric Maxim")
    rentPage.insert_last_name("Chuopo-Moting")
    rentPage.insert_card_number("4444")
    rentPage.insert_email("test@dd.com")
    rentPage.elements.Rent_button().click()
    //There would be some kind of alert verification if we managed to rent a car correctly, but this is not supported
    //Thats why i leave it as it is, yet there should be last assertion in the end to check success
  })
  it('Insert earlier dropoff date than pickup', () => {
    homePage.insert_pickup_date(dayjs())
    homePage.insert_dropoff_date(dayjs().subtract(2, 'day'))
    homePage.elements.Search_button().click()
    homePage.elements.Alert_info({ timeout: 10000 }).should('be.visible').and('contain', 'Please enter a valid date!')
  })
  it('Providing an invalid email in summary tab',  () => {
    homePage.select_country("France")
    homePage.select_city("Paris")
    homePage.insert_pickup_date(dayjs())
    homePage.insert_dropoff_date(dayjs().add(2, 'day'))
    homePage.elements.Search_button().click()
    homePage.elements.Results_table().should('be.visible')
    homePage.elements.First_available_rent_button().click()
    cy.url().should('include', 'details/')
    detailsPage.elements.Rent_button().click()
    cy.url().should('include', 'rent/').and('be.visible', rentPage.elements.Rent_button())
    rentPage.insert_name("Milivoje")
    rentPage.insert_last_name("Novakovic")
    rentPage.insert_card_number("150")
    rentPage.insert_email("testdd.com")
    rentPage.elements.Rent_button().click()
    rentPage.elements.Alert_info({ timeout: 10000 }).should('be.visible').and('contain', 'Please provide valid email')
    })
})