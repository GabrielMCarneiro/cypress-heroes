class LoginPage {
    selectorsList() {
        const selectors = {
            loginButton: "nav button",
            emailField: "[type='email']",
            passwordField: "[type='password']",
            signInButton: "[novalidate=''] button",
            homePage: "body",
            loginMenu: ".open .modal",
            loginAlert: ".modal-container > .open"
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit("/heroes")
    }

    clickTheLoginButton() {
        cy.get(this.selectorsList().loginButton).click()
    }

    enterTheCredentials(email, password) {
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
    }

    clickTheSignInButton() {
        cy.get(this.selectorsList().signInButton).click()
    }

    checkValidAccess() {
        cy.get(this.selectorsList().homePage).should("contain", "Logout")
    }

    checkInvalidEmailOrPassword() {
        cy.get(this.selectorsList().loginMenu).should("contain", "Invalid email or password")
    }

    checkEmptyFields() {
        cy.get(this.selectorsList().loginMenu).should("contain", "Email is required")
    }

    fillInOnlyEmailField(email) {
        cy.get(this.selectorsList().emailField).type(email)
    }

    checkEmptyPasswordField() {
        cy.get(this.selectorsList().loginMenu).should("contain", "Password is required")
    }

    checkTheLoginAlert() {
        cy.get(this.selectorsList().loginAlert)
    }
}

export default LoginPage