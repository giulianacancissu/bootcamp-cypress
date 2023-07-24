class Navbar {

    userLoggedIn(name) {
        cy.contains('aside .logged-user', 'Olá, ' + user.name)
            .should('be.visible')
    }
}

export default new Navbar()