import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"

const loginPage = new LoginPage
const homePage = new HomePage

describe('Cypress Heroes - Login Tests', () => {

  it('Clicking the like button when not logged in', () => {
    loginPage.accessLoginPage()
    homePage.clickTheLikeButtonOfAHero()
    loginPage.checkTheLoginAlert()
  })

  it('Clicking the hire button when not logged in', () => {
    loginPage.accessLoginPage()
    homePage.clickTheHireButtonOfAHero()
    loginPage.checkTheLoginAlert()
  })
  
  it('Login with valid credentials', () => {
    loginPage.accessLoginPage()
    loginPage.clickTheLoginButton()
    loginPage.enterTheCredentials(userData.userSuccess.email, userData.userSuccess.password)
    loginPage.clickTheSignInButton()
    loginPage.checkValidAccess()
  })

  it('Login with an unregistered email', () => {
    loginPage.accessLoginPage()
    loginPage.clickTheLoginButton()
    loginPage.enterTheCredentials(userData.userFail.email, userData.userSuccess.password)
    loginPage.clickTheSignInButton()
    loginPage.checkInvalidEmailOrPassword()
  })

  it('Login with a valid email and incorrect password', () => {
    loginPage.accessLoginPage()
    loginPage.clickTheLoginButton()
    loginPage.enterTheCredentials(userData.userSuccess.email, userData.userFail.password)
    loginPage.clickTheSignInButton()
    loginPage.checkInvalidEmailOrPassword()
  })

  it('Login with empty fields', () => {
    loginPage.accessLoginPage()
    loginPage.clickTheLoginButton()
    loginPage.clickTheSignInButton()
    loginPage.checkEmptyFields()
  })

  it('Login with a valid email and empty password field', () => {
    loginPage.accessLoginPage()
    loginPage.clickTheLoginButton()
    loginPage.fillInOnlyEmailField(userData.userSuccess.email)
    loginPage.clickTheSignInButton()
    loginPage.checkEmptyPasswordField()
  })

})