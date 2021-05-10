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


describe ("Ebooks", ()=>{

    let alertSuccess = "Erfolgreich angemeldet."
    let emailOrdUser = "test@user.com"
    let password = "password"
    let btntxt = "Einloggen"
    let titleFreeDeals = "Kostenlose und reduzierte Ebooks"
    let titleKrimis = "Krimis Ebooks"
    let titleThriller = "Thriller Ebooks"
    let titleAbenteuer = "Abenteuer Ebooks"
    let titleSF = "Science Fiction Ebooks"
    let titleHistorische = "Historische Romane Ebooks"
    let titleGesundheit = "Gesundheit, Körper und Geist Ebooks"
    let titleFantasy = "Fantasy Ebooks"
    let titleBelletristik = "Belletristik Ebooks"
    let titleSachbuch = "Sachbuch Ebooks"
    let titleBestseller = "Bestseller Ebooks"
    let titleEnglish = "Bestseller auf Englisch Ebooks"




    it("Login with valid data - ordinary user", ()=> {
        cy.get(Locators.Login.SignIn).eq(0).click()
        cy.get(Locators.Login.Btn).should("be.visible").and("contain", btntxt)
        cy.url().should("contains", "https://staging.buchdeals.de/users/sign_in")
        cy.get(Locators.Login.Email).eq(1).type(emailOrdUser)
        cy.get(Locators.Login.Password).eq(2).type(password)
        cy.get(Locators.Login.Submit).eq(3).click()
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccess)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
    })

    it("Ebooks categories - 'Kostenlose Ebook Deals'", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccess)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.FreeDeals).eq(1).click()
        cy.get(Locators.Ebooks.Title).should("be.visible").and("include.text", titleFreeDeals)
        cy.get(Locators.Ebooks.Author).should("be.visible")
        cy.get(Locators.Ebooks.Description).should("be.visible")
        cy.get(Locators.Ebooks.Category).should("be.visible")
        cy.get(Locators.Ebooks.Link).should("be.visible")
    })
    
    it("Ebooks categories - 'Krimis'", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccess)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.Krimis).eq(1).click()
        cy.get(Locators.Ebooks.Title).should("be.visible").and("include.text", titleKrimis)
        cy.get(Locators.Ebooks.Author).should("be.visible")
        cy.get(Locators.Ebooks.Description).should("be.visible")
        cy.get(Locators.Ebooks.Category).should("be.visible")
        cy.get(Locators.Ebooks.Link).should("be.visible")
    })

    it("Ebooks categories - 'Thriller'", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccess)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.Thriller).eq(1).click()
        cy.get(Locators.Ebooks.Title).should("be.visible").and("include.text", titleThriller)
        cy.get(Locators.Ebooks.Author).should("be.visible")
        cy.get(Locators.Ebooks.Description).should("be.visible")
        cy.get(Locators.Ebooks.Category).should("be.visible")
        cy.get(Locators.Ebooks.Link).should("be.visible")
    })
        
    it("Ebooks categories - 'Abenteuer'", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccess)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.Abenteuer).eq(1).click()
        cy.get(Locators.Ebooks.Title).should("be.visible").and("include.text", titleAbenteuer)
        cy.get(Locators.Ebooks.Author).should("be.visible")
        cy.get(Locators.Ebooks.Description).should("be.visible")
        cy.get(Locators.Ebooks.Category).should("be.visible")
        cy.get(Locators.Ebooks.Link).should("be.visible")
    })
        
    it("Ebooks categories - 'Liebesromane'", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccess)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.Abenteuer).eq(1).click()
        cy.get(Locators.Ebooks.Title).should("be.visible").and("include.text", titleAbenteuer)
        cy.get(Locators.Ebooks.Author).should("be.visible")
        cy.get(Locators.Ebooks.Description).should("be.visible")
        cy.get(Locators.Ebooks.Category).should("be.visible")
        cy.get(Locators.Ebooks.Link).should("be.visible")
    })

    it("Ebooks categories - 'Science Fiction'", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccess)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.SF).eq(1).click()
        cy.get(Locators.Ebooks.Title).should("be.visible").and("include.text", titleSF)
        cy.get(Locators.Ebooks.Author).should("be.visible")
        cy.get(Locators.Ebooks.Description).should("be.visible")
        cy.get(Locators.Ebooks.Category).should("be.visible")
        cy.get(Locators.Ebooks.Link).should("be.visible")
    })
        
    it("Ebooks categories - 'Historische Romane'", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccess)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.Historische).eq(1).click()
        cy.get(Locators.Ebooks.Title).should("be.visible").and("include.text", titleHistorische)
    })

    it("Ebooks categories - 'Gesundheit, Körper und Geist'", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccess)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.Gesundheit).eq(1).click()
        cy.get(Locators.Ebooks.Title).should("be.visible").and("include.text", titleGesundheit)
        cy.get(Locators.Ebooks.Author).should("be.visible")
        cy.get(Locators.Ebooks.Description).should("be.visible")
        cy.get(Locators.Ebooks.Category).should("be.visible")
        cy.get(Locators.Ebooks.Link).should("be.visible")
    })

    it("Ebooks categories - 'Fantasy'", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccess)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.Fantasy).eq(1).click()
        cy.get(Locators.Ebooks.Title).should("be.visible").and("include.text", titleFantasy)
        cy.get(Locators.Ebooks.Author).should("be.visible")
        cy.get(Locators.Ebooks.Description).should("be.visible")
        cy.get(Locators.Ebooks.Category).should("be.visible")
        cy.get(Locators.Ebooks.Link).should("be.visible")
    })

    it("Ebooks categories - 'Belletristik'", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccess)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.Belletristik).eq(1).click()
        cy.get(Locators.Ebooks.Title).should("be.visible").and("include.text", titleBelletristik)
    })

    it("Ebooks categories - 'Sachbuch'", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccess)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.Sachbuch).eq(1).click()
        cy.get(Locators.Ebooks.Title).should("be.visible").and("include.text", titleSachbuch)
        cy.get(Locators.Ebooks.Author).should("be.visible")
        cy.get(Locators.Ebooks.Description).should("be.visible")
        cy.get(Locators.Ebooks.Category).should("be.visible")
        cy.get(Locators.Ebooks.Link).should("be.visible")
    })

    it("Ebooks categories - 'Bestseller'", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccess)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.Bestseller).eq(1).click()
        cy.get(Locators.Ebooks.Title).should("be.visible").and("include.text", titleBestseller)
        cy.get(Locators.Ebooks.Author).should("be.visible")
        cy.get(Locators.Ebooks.Description).should("be.visible")
        cy.get(Locators.Ebooks.Category).should("be.visible")
        cy.get(Locators.Ebooks.Link).should("be.visible")
    })

    it("Ebooks categories - 'Bestseller auf Englisch'", ()=>{
        cy.login(emailOrdUser, password)
        cy.get(Locators.Login.Message).should("be.visible").and("include.text", alertSuccess)
        cy.url().should("contains", "https://staging.buchdeals.de/ebooks")
        cy.get(Locators.Ebooks.DE).eq(0).click()
        cy.get(Locators.Ebooks.English).eq(1).click()
        cy.get(Locators.Ebooks.Title).should("be.visible").and("include.text", titleEnglish)
    })







})