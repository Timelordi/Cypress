import 'cypress-file-upload'

describe("File upload", () => {

    it.skip("Single File Upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile("upload_fIle.pdf") //default folder is a "fixtures" folder
        cy.get("#file-submit").click()
        cy.wait(2000)

        cy.get("#content > div > h3").should('have.text', 'File Uploaded!') //validation

    })

    it.skip(" File Upload - Rename", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'upload_fIle.pdf', fileName:'myfile.pdf'}) //default folder is a "fixtures" folder
        cy.get("#file-submit").click()
        cy.wait(2000)

        cy.get("#content > div > h3").should('have.text', 'File Uploaded!') //validation
    })

    it.skip("File Upload - Drag and Drop", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile("upload_file.pdf", {subjectType:'drag-n-drop'})  // drag and drop action

        cy.wait(2000)
        cy.get('#drag-drop-upload > div > div.dz-details > div > span').contains('upload_file.pdf')
    })

    it.skip("Multiple File Upload", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get('#filesToUpload').attachFile(["upload_file.pdf", "upload_file_copy.pdf"]) // upload several files

        cy.wait(2000)
        cy.get('#fileList > li').contains('upload_file.pdf')
    })
})