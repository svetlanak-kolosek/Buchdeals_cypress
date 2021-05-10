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

describe ("Edit categories", ()=>{

    let btntxt = "Einloggen"
    let emailOrdUser = "test@user.com"
    let password = "password"
    let alertSuccessEN = "Signed in successfully"
    let alertSuccessDN = "Erfolgreich angemeldet."
    let titleCategories = "Kategorien bearbeiten:"
    let titleDevices = "Geräte bearbeiten:"
    let message = "Du hast die Kategorien und Geräte erfolgreich geändert!"
    let alertMessCategories = "Sie müssen ein Land auswählen!"
    let alertMessDevices = "Sie müssen mindestens ein Gerät auswählen!"




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

    it("changed the categories and devices", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccessDN)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.EditCategories.Edit).click()
        cy.get(Locators.EditCategories.Title).should("be.visible").and("include.text", titleCategories)
        cy.get(Locators.EditCategories.CheckCategories).first().check()
        cy.get(Locators.EditCategories.Next).click()
        cy.get(Locators.EditCategories.Title).should("be.visible").and("include.text", titleDevices)
        cy.get(Locators.EditCategories.CheckDevices).first().check()
        cy.get(Locators.EditCategories.Next).click()
        cy.get(Locators.EditCategories.Message).should("be.visible").and("include.text", message)
    })

    it("changed the categories and devices (without categories)", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccessDN)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.EditCategories.Edit).click()
        cy.get(Locators.EditCategories.CheckCategories).uncheck()
        cy.get(Locators.EditCategories.Next).click()
        cy.get(Locators.EditCategories.AlerMess).should("be.visible").and("include.text", alertMessCategories)
    })

    it("changed the categories and devices (without device)", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccessDN)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.EditCategories.Edit).click()
        cy.get(Locators.EditCategories.CheckCategories).eq(5).click()
        cy.get(Locators.EditCategories.Next).click()
        cy.get(Locators.EditCategories.Title).should("be.visible").and("include.text", titleDevices)
        cy.get(Locators.EditCategories.CheckDevices).uncheck()
        cy.get(Locators.EditCategories.Next).click()
        cy.get(Locators.EditCategories.AlerMess).should("be.visible").and("include.text", alertMessDevices)
    })







})