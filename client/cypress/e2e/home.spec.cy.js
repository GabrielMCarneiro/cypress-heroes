import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"

const loginPage = new LoginPage
const homePage = new HomePage


describe('Cypress Heroes - Home Tests', () => {

  it.skip('Liking a hero', () => {
    //Initial like count: 63
    loginPage.accessLoginPage()
    loginPage.clickTheLoginButton()
    loginPage.enterTheCredentials(userData.userSuccess.email, userData.userSuccess.password)
    loginPage.clickTheSignInButton()
    homePage.clickTheLikeButtonOfAHero()
    homePage.checkTheFansCounter()
  })

  it.skip('Unliking a hero', () => {
    //Initial like count: 64
    loginPage.accessLoginPage()
    loginPage.clickTheLoginButton()
    loginPage.enterTheCredentials(userData.userSuccess.email, userData.userSuccess.password)
    loginPage.clickTheSignInButton()
    homePage.clickTheLikeButtonOfAHero()
    homePage.checkTheFansCounter()
    homePage.clickTheLikeButtonOfAHero()
    homePage.checkTheFansCounter()
    //Bug Report: Não é possível selecionar e depois remover a seleção do botão de like. Isso faz com que cada clique dado, aumente o contador de fans infinitamente.
  })

  it.skip('Hiring a hero', () => {
    //Initial save count: 44
    loginPage.accessLoginPage()
    loginPage.clickTheLoginButton()
    loginPage.enterTheCredentials(userData.userSuccess.email, userData.userSuccess.password)
    loginPage.clickTheSignInButton()
    homePage.clickTheHireButtonOfAHero()
    homePage.confirmTheHire()
    homePage.checkTheSavesCounter()
  })

  it.skip('Declining to hire a hero', () => {
    //Initial save count: 45
    loginPage.accessLoginPage()
    loginPage.clickTheLoginButton()
    loginPage.enterTheCredentials(userData.userSuccess.email, userData.userSuccess.password)
    loginPage.clickTheSignInButton()
    homePage.clickTheHireButtonOfAHero()
    homePage.declineTheHire()
    homePage.checkTheSavesCounter()
  })

  it.skip('"Firing" a hero', () => {
    //Initial save count: 45
    loginPage.accessLoginPage()
    loginPage.clickTheLoginButton()
    loginPage.enterTheCredentials(userData.userSuccess.email, userData.userSuccess.password)
    loginPage.clickTheSignInButton()
    homePage.clickTheHireButtonOfAHero()
    homePage.confirmTheHire()
    homePage.clickTheHireButtonOfAHero()
    homePage.checkTheFiring()
    //Bug Report: Não é possível selecionar e depois remover a seleção do botão de hire. Isso faz com que cada clique dado e confirmado, contrate o herói novamente, aumentando o contador de saves infinitamente.
  })

})