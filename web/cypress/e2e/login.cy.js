import users from '../fixtures/users.json'
import LoginPage from '../support/pages/LoginPage'
import studentPage from '../support/pages/StudentPage'

describe('login', () => {

    it('deve logar com o perfil do admin', () => {
        const user = users.admin

        LoginPage.doLogin(user)
        studentPage.navbar.userLoggedIn(user.name)

    })

    it('não deve logar com senha incorreta', () => {
        const user = users.inv_pass

        LoginPage.doLogin(user)
        LoginPage.popup.haveText('Suas credenciais são invalidas, por favor tente novamente')
    })

    it('não deve logar com email incorreta', () => {
        const user = users.email_not_found

        LoginPage.popup.doLogin(user)
        LoginPage.popup.haveText('Suas credenciais são invalidas, por favor tente novamente')
    })

    it('não deve logar com emails incorretos', () => {
        const emails = users.inv_emails

        let outputMessages = []
        let expectedMessages = []

        LoginPage.go()

        emails.forEach((u) => {
            LoginPage.fill(u)
            LoginPage.submit()

            LoginPage.popup.content()
                .invoke('text')
                .then((t) => {
                    cy.log(t)
                    outputMessages.push(t)
                    expectedMessages.push'(Insira um email válido.)
                })

            LoginPage.popup.Back()
        })

        cy.wrap(outputMessages).should('deep-equal', expectedMessages)

    })

    it('não deve logar com email em branco', () => {
        const user = users.empty_email

        LoginPage.doLogin(user)
        LoginPage.popup.haveText('Os campos email e senha são obrigatórios.')
    })

    it('não deve logar com senha em branco', () => {
        const user = users.empty_password

        LoginPage.doLogin(user)
        LoginPage.popup.haveText('Os campos email e senha são obrigatórios.')
    })
})