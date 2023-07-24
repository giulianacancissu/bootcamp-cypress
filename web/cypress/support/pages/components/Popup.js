class PopUp {
    content() {
        return cy.get('swa12-content')
    }

    haveText(text) {
        this.content()
            .should('be.visible')
            .should('have.text', text)
    }

    confirm() {
        cy.get('.swal12-confirm')
            .click({ force: true })
    }

    back() {
        cy.get('swal12-cancel')
            .click()
    }
}

export default new PopUp()