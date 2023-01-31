//before
//after
//beforeEach
//afterEach

describe("Hooks and Logs", ()=>{

    before(()=>{ // выполняется единожды вначале всех it
        cy.log("*****    Lauch the application     *******")
    })

    after(() => { // выполняется единожды в конце всей программы
        cy.log("*****    Close the application     *******")
    })

    beforeEach(() => { // выполянется в конце каждого метода
        cy.log("*******       Login      ********")

    })

    afterEach(() =>{
        cy.log("*****      Logout application   *******    ")
    })


 
   it('search', ()=>{
    cy.log("---------    This is seaching     --------- ")

    })

    it('advanced search', () => {
        cy.log("---------    This is advance seaching     --------- ")

    })

    it('listing Products', () => {
        cy.log("---------    This is listing products     --------- ")

    })
})