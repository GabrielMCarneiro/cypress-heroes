class HomePage {
    selectorsList() {
        const selectors = {
            likeButton: "[data-cy='like']",
            likeCounter: "[data-cy='fans']",
            hireButton: "[data-cy='money']",
            hirePopUp: ".modal-container > .open",
            hirePopUpButton: "button",
            saveCounter: "[data-cy='saves']",
        }

        return selectors
    }

    clickTheLikeButtonOfAHero() {
        cy.get(this.selectorsList().likeButton).eq(0).click()
    }

    checkTheFansCounter() {
        cy.get(this.selectorsList().likeCounter).eq(0)
    }

    clickTheHireButtonOfAHero() {
        cy.get(this.selectorsList().hireButton).eq(0).click()
    }

    checkTheSavesCounter() {
        cy.get(this.selectorsList().saveCounter).eq(0)
    }

    confirmTheHire() {
        cy.get(this.selectorsList().hirePopUpButton).contains("Yes").click()
    }

    declineTheHire() {
        cy.get(this.selectorsList().hirePopUpButton).contains("No").click()
    }

    checkTheFiring() {
        cy.get(this.selectorsList().hirePopUp).should("not.contain", "Hire Hero")
    }

}

export default HomePage