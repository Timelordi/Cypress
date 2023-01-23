require("cypress-xpath")

describe("Handle Tables", () => {
    beforeEach("Login", () => {
        cy.visit("https://demo.opencart.com/admin/index.php")

        // Enter login credentials
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("#form-login > div.text-end > button").click()
        cy.get("#modal-security > div > div > div.modal-header > button").click() //close the unwanted window
      
        //go to Customers sub-menu
        cy.get("#menu-customer > a").click()
        cy.get("#collapse-5 > li:nth-child(1) > a").click()
    })

    it.skip("Check Number of Rows and Columns", () => {
        cy.get("#form-customer > div.table-responsive > table > tbody > tr").should("have.length", '10')
        cy.get("#form-customer > div.table-responsive > table > tbody > tr:nth-child(1) > td").should("have.length", '7')
    })

    it.skip("Check cell data from specific row & Column", () => {
        cy.get("#form-customer > div.table-responsive > table > tbody > tr:nth-child(7) > td:nth-child(3)").should("contain", "abcdrt@gmail.com")


    })
// ну это просто какой-то писец запутанный
    it.skip("Read all the rows & columns data in the first page", () => {
        cy.get("#form-customer > div.table-responsive > table > tbody > tr").
        each(($row, index, $rows) => {
            cy.wrap($row).within(()=> {
                cy.get("td").each(($col, index, $cols) =>{
                    cy.log($col.text())
                })
            })
        })
    })

    it("Pagination", () => {
        // find total number of pages
     /*   let totalPages;
        cy.get("#form-customer > div.row > div.col-sm-6.text-end").then((e)=>{
            const mytext = e.text()        // Showing 1 to 10 of 9367 (937 Pages)
            totalPages = mytext.substring( mytext.indexOf("(")+1, mytext.indexOf("Pages")-1);
            cy.log("Total number of pages in a table ------>" + totalPages);
        }) */
        let totalPages=5
        for (let p=1; p<=totalPages;p++){
            if (totalPages>1){
                cy.log("Active page is ===" + p);
                cy.get("ul[class='pagination'] li:nth-child("+p+")").click(); //здесь реализуется клик по полосе страниц и динамический клик
                cy.wait(2000);

                cy.get("#form-customer > div.table-responsive > table > tbody > tr")
                .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get("td:nth-child(3)").then((e)=>{
                            cy.log(e.text()) // print Email
                        })
                    })
                })
            }
        }


    })
})