import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage"
import AdminPage from "../pages/adminPage"

const loginPage = new LoginPage
const adminPage = new AdminPage


describe('Cypress Heroes - Admin Tests', () => {

  it('Creating a new hero', () => {
    loginPage.accessLoginPage()
    loginPage.clickTheLoginButton()
    loginPage.enterTheCredentials(userData.adminSuccess.email, userData.adminSuccess.password)
    loginPage.clickTheSignInButton()
    adminPage.accessCreateNewHeroPage()
    adminPage.fillInNewHeroInformation()
    adminPage.confirmNewHero()
    adminPage.checkTheNewHero()
  })

  it('Creating a new hero with empty fields', () => {
    loginPage.accessLoginPage()
    loginPage.clickTheLoginButton()
    loginPage.enterTheCredentials(userData.adminSuccess.email, userData.adminSuccess.password)
    loginPage.clickTheSignInButton()
    adminPage.accessCreateNewHeroPage()
    adminPage.incompleteNewHeroInformation()
    adminPage.confirmNewHero()
    adminPage.checkTheErrorAlert()
  })
  
  it('Editing a hero', () => {
    loginPage.accessLoginPage()
    loginPage.clickTheLoginButton()
    loginPage.enterTheCredentials(userData.adminSuccess.email, userData.adminSuccess.password)
    loginPage.clickTheSignInButton()
    adminPage.accessEditHeroPage()
    adminPage.editInformations()
    adminPage.confirmTheEditedInformation()
    adminPage.checkTheNewHeroInformation()  
  })

  it('Deleting a hero', () => {
    loginPage.accessLoginPage()
    loginPage.clickTheLoginButton()
    loginPage.enterTheCredentials(userData.adminSuccess.email, userData.adminSuccess.password)
    loginPage.clickTheSignInButton()
    adminPage.deleteAHero()
    adminPage.checkTheHeroesList()
  })

})