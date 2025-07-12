class AdminPage {
    selectorsList() {
        const selectors = {
            createNewHeroButton: "[href='/heroes/new']",
            nameField: "[name='name']",
            priceField: "[name='price']",
            fansField: "[name='fans']",
            savesField: "[name='saves']",
            powersField: "[name='powers']",
            submitButton: "button",
            heroesList: ".flex-wrap",
            errorText: ".text-red-500",
            editButton: "[data-cy='pencil']",
            deleteButton: "[data-cy='trash']",
            deleteConfirmationButton: "button.bg-red-600"
        }

        return selectors
    }

    accessCreateNewHeroPage() {
        cy.get(this.selectorsList().createNewHeroButton).click()
    }

    fillInNewHeroInformation() {
        cy.get(this.selectorsList().nameField).type("New Hero")
        cy.get(this.selectorsList().priceField).type("63")
        cy.get(this.selectorsList().fansField).type("99")
        cy.get(this.selectorsList().savesField).type("90")
        cy.get(this.selectorsList().powersField).select(5)
    }

    confirmNewHero() {
        cy.get(this.selectorsList().submitButton).eq(2).click()
    }

    checkTheNewHero() {
        cy.get(this.selectorsList().heroesList).contains("New Hero")
    }

    incompleteNewHeroInformation() {
        cy.get(this.selectorsList().nameField).type("New Hero")
        cy.get(this.selectorsList().fansField).type("99")
        cy.get(this.selectorsList().savesField).type("90")
        cy.get(this.selectorsList().powersField).select(5)
    }

    checkTheErrorAlert() {
        cy.get(this.selectorsList().errorText)
    }

    accessEditHeroPage() {
        cy.get(this.selectorsList().editButton).eq(0).click()
    }

    editInformations() {
        cy.get(this.selectorsList().nameField).clear().type("Test Hero")
    }

    confirmTheEditedInformation() {
        cy.get(this.selectorsList().submitButton).eq(3).click()
    }

    checkTheNewHeroInformation() {
        cy.get(this.selectorsList().heroesList).contains("Test Hero")
    }

    deleteAHero() {
        cy.get(this.selectorsList().deleteButton).eq(7).click()
        cy.get(this.selectorsList().deleteConfirmationButton).click()
    }

    checkTheHeroesList() {
        cy.get(this.selectorsList().heroesList).should("not.contain", "New Hero")
    }

}

export default AdminPage