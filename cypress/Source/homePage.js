class homePage{

    elements ={

        Country : () => cy.get('[id="country"]'),
        City : () => cy.get('[id="city"]'),
        Model : () => cy.get('[id="model"]'),
        Pickup_date : () => cy.get('[id="pickup"]'),
        Dropoff_date : () => cy.get('[id="dropoff"]'),
        Alert_info : () => cy.get('[class="alert alert-danger"]'),
        Results_table : () => cy.get('[id="search-results"]'),
        Search_button : () => cy.xpath('//button[contains(text(),"Search")]'),
        First_available_rent_button : () => cy.xpath('//tbody/tr[1]/td[6]')

    }

    select_country(country){
        this.elements.Country().select(country)
    }

    select_city(city){
        this.elements.City().select(city)
    }

    insert_model(model){
        this.elements.Model().type(model)
    }

    insert_pickup_date(pickup_date){
        this.elements.Pickup_date().type(pickup_date.format('YYYY-MM-DD'))
    }

    insert_dropoff_date(dropoff_date){
        this.elements.Dropoff_date().type(dropoff_date.format('YYYY-MM-DD'))
    }

}

module.exports = new homePage();
require('cypress-xpath');