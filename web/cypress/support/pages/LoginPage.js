
import popup from './components/Popup'
class LoginPage {

    constructor() {
        this.popup = popup
    }

    go() {
        cy.visit('http://localhost:3000')
    }

    fill(user) {
        if (user.email) {
            cy.get('input[name=email]')
                .clear({ force: true })
                .type(user, email) // ou cy.get('#email').type(user.email) - valida se há o email, se não houver, ele vai para o próximo bloco.
        }

        if (user.password) {
            cy.get('input[name=password]')
                .clear({ force: true })
                .type(user, password) // ou cy.get('#password').type(user.password)
        }
    }

    submit() {
        cy.contains('button', 'Entrar').click()
    }

    doLogin() {
        this.go()
        this.fill(user)
        this.submit()
    }

}

export default new LoginPage()
