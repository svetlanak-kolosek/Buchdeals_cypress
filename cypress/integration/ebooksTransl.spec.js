const Locators = require("../fixtures/Locators.json")

beforeEach("Login", ()=>{
    cy.getCookies().should('be.empty')
        cy.setCookie('Username', 'stagingadmin')
        cy.setCookie('Password', 'abc123')
        cy.getCookie('Username').should('have.property', 'value', 'stagingadmin')
        cy.getCookie('Password').should('have.property', 'value', 'abc123')
        window.location.href = 'https://staging.buchdeals.de'
        cy.visit('https://staging.buchdeals.de', {
            auth: {
            username: 'stagingadmin',
            password: 'abc123',
            },
        })
        cy.get("h1.text.-white.-bold").should("be.visible").and("contain", title)
        cy.url().should("contains", "https://staging.buchdeals.de")
})
        
    let title = "Entdecke die Bücher, die du lieben wirst"


describe ("Translation - ebooks ", ()=>{

    let btntxt = "Einloggen"
    let emailOrdUser = "test@user.com"
    let password = "password"
    let alertSuccessEN = "Signed in successfully"
    let alertSuccessDE = "Erfolgreich angemeldet."
    let editCategoryDE = "Kategorien und Geräte bearbeiten"
    let editUserDE = "Daten bearbeiten"
    let signoutDE = "Ausloggen"
    let categoryDE = "KATEGORIEN"
    let categoryTitleDE = "Kostenlose und reduzierte Ebooks"
    let editCategoryEN = "Edit categories and devices"
    let editUserEN = "Edit data"
    let signoutEN = "Log out"
    let categoryEN = "CATEGORIES"
    let categoryTitleEN = "Free and discounted ebooks"
    let titleFantasy = "Fantasy Ebooks"
    let author = "aus"
    let categories = "Kategorien:"
    let dealtime = "aus"
    let available = "VERFÜGBAR:"
    let share = "Deal empfehlen:"

    



    it("login ordinary user", ()=>{
        cy.get(Locators.Login.SignIn).eq(0).click()
        cy.get(Locators.Login.Btn).should("be.visible").and("contain", btntxt)
        cy.url().should("contains", "https://staging.buchdeals.de/users/sign_in")
        cy.get(Locators.Login.Email).eq(1).type(emailOrdUser)
        cy.get(Locators.Login.Password).eq(2).type(password)
        cy.get(Locators.Login.Submit).eq(3).click()
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccessDE)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
    })

    it("first page", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccessEN)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.EbooksTranslation.EditCategory).should("have.text", editCategoryDE)
        cy.get(Locators.EbooksTranslation.EditUser).should("have.text", editUserDE)
        cy.get(Locators.EbooksTranslation.SignOut).should("have.text", signoutDE)
        cy.get(Locators.EbooksTranslation.Category).should("include.text", categoryDE)
        cy.get(Locators.EbooksTranslation.CategoryTitle).should("have.text", categoryTitleDE)
        cy.get(Locators.EbooksTranslation.EN).eq(1).click()
        cy.get(Locators.EbooksTranslation.EditCategory).should("have.text", editCategoryEN)
        cy.get(Locators.EbooksTranslation.EditUser).should("have.text", editUserEN)
        cy.get(Locators.EbooksTranslation.SignOut).should("have.text", signoutEN)
        cy.get(Locators.EbooksTranslation.Category).should("include.text", categoryEN)
        cy.get(Locators.EbooksTranslation.CategoryTitle).should("have.text", categoryTitleEN)
    })

    it("category list", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccessEN)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.Fantasy).eq(1).click()
        cy.get(Locators.Ebooks.Title).should("be.visible").and("include.text", titleFantasy)
        cy.get(Locators.EbooksTranslation.BookInfo).should("to.exist")
        cy.get(Locators.EbooksTranslation.EN).eq(1).click()
        cy.get(Locators.EbooksTranslation.BookInfo).should("not.to.exist")
    })

    it.only("book information", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccessDE)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.EbooksTranslation.Fantasy).eq(1).click()
        cy.get(Locators.EbooksTranslation.Title).should("be.visible").and("include.text", titleFantasy)
        cy.get("a[href='/buch/trackingbuchtest2']").eq(1).click({force:true})
        cy.get(Locators.EbooksTranslation.Author).should("be.visible").and("include.text", author)
        cy.get(Locators.EbooksTranslation.Categories).should("be.visible").and("include.text", categories)
        cy.get(Locators.EbooksTranslation.DealTime).should("be.visible").and("include.text", dealtime)
        cy.get(Locators.EbooksTranslation.Available).should("be.visible").and("include.text", available)
        cy.get(Locators.EbooksTranslation.Share).should("be.visible").and("include.text", share)
    })



})