class rentPage{
    elements ={

        Name : () => cy.get('[id="name"]'),
        Last_name : () => cy.get('[id="last_name"]'),
        Card_number : () => cy.get('[id="card_number"]'),
        Email : () => cy.get('[id="email"]'),
        Rent_button : () => cy.get('.btn'),
        Alert_info : () => cy.get('[class="alert alert-danger"]')
    }

    insert_name(name){
        this.elements.Name().type(name)
        //this.elements.Name().type(name).invoke('val').should(name => {
    //expect(name.length).to.be.at.most(50) #that line would exclude possibility of providing wrong name that has lenght > 50
    //})
    }

    insert_last_name(last_name){
        this.elements.Last_name().type(last_name)
        //this.elements.Last_name().type(last_name).invoke('val').should(last_name => {
    //expect(last_name.length).to.be.at.most(25)    #same as below
    //})
    }

    insert_card_number(card_number){
        this.elements.Card_number().type(card_number)
        //this.elements.Card_number().type(card_number).invoke('val').should(card_number => {
    //expect(Number.isInteger(+card_number), 'input should be an integer').to.eq(true)    #same as below
    //})
    }
    insert_email(email){
        this.elements.Email().type(email)
        //this.elements.Email().type(email).invoke('val').should("include", "@") #that line would exclude possibility of providing wrong e-mail
    }
}

module.exports = new rentPage();