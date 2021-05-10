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

describe ("Book overview", ()=>{

    let btntxt = "Einloggen"
    let emailOrdUser = "test@user.com"
    let password = "password"
    let alertSuccessEN = "Signed in successfully"
    let alertSuccessDN = "Erfolgreich angemeldet."
    let title = "Traumreisen in die Alles-Anders-Welt"
    let category = "Gesundheit, Körper und Geist"




    it("login ordinary user", ()=>{
        cy.get(Locators.Login.SignIn).eq(0).click()
        cy.get(Locators.Login.Btn).should("be.visible").and("contain", btntxt)
        cy.url().should("contains", "https://staging.buchdeals.de/users/sign_in")
        cy.get(Locators.Login.Email).eq(1).type(emailOrdUser)
        cy.get(Locators.Login.Password).eq(2).type(password)
        cy.get(Locators.Login.Submit).eq(3).click()
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccessDN)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
    })

    it("book information", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccessDN)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.Gesundheit).eq(1).click()
        cy.get(Locators.Overview.Title).eq(1).click({force:true})
        cy.url().should("contains", "https://staging.buchdeals.de/buch/traumreisen-in-die-alles-anders-welt")
        cy.get(Locators.Overview.BookTitle).should("be.visible").and("include.text", title)
        cy.get(Locators.Overview.Author).should("be.visible")
        cy.get(Locators.Overview.Description).should("be.visible")
        cy.get(Locators.Overview.Category).should("be.visible").and("include.text", category)
        cy.get(Locators.Overview.DealTime).should("be.visible").and('contain', 'aus ')
        cy.get(Locators.Overview.Link).should("be.visible")
        cy.get(Locators.Overview.Share).should("be.visible")
    })


})