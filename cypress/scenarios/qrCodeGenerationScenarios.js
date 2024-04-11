import qrCodeGenerationPage from "../pageObjects/qrCodeGenerationPage";
import cookies from "../pageObjects/cookies";
import 'cypress-wait-until'

export function QRCodeGenerationDefaultSettings(){
    cy.task('log', 'This test verifies that a user can generate a QR code using the default settings.')
    cy.visit('/')
    cookies.getAcceptCookiesButton().click({force: true})
    qrCodeGenerationPage.getCreateQRCodeButton().click({force: true})
    qrCodeGenerationPage.getQRCodeImage().should('be.visible')


}

export function QRCodeWithCustomColor(){
    cy.task('log', 'This test checks if the user can customize the color of the QR code before generating it.')
    cy.visit('/');
    cookies.getAcceptCookiesButton().click({force: true})
    qrCodeGenerationPage.getSetColors().click({force: true})
    qrCodeGenerationPage.getForegroundColorPickerInput().click().clear().type('#999999')
    qrCodeGenerationPage.getBackgroundColorPickerInput().click({force: true}).clear().type('#AAAAAA')
    qrCodeGenerationPage.getCreateQRCodeButton().click({force: true})
    qrCodeGenerationPage.getQRCodeImage().should('be.visible')

}

export function QRCodeDownload(){
    cy.task('log', 'This test verifies that a user can generate and download the QR code.')
    cy.visit('/');
    cookies.getAcceptCookiesButton().click({force: true})
    qrCodeGenerationPage.getCreateQRCodeButton().click({force: true})
    qrCodeGenerationPage.getQRCodeImage().should('be.visible')
    qrCodeGenerationPage.getDownloadButton().should('be.enabled').click()
    qrCodeGenerationPage.getDownloadingMessage().should('be.visible')
    
    // Note: Cypress does not support testing file downloads directly,
    // but you can verify the download link is correct or check the file exists in the download folder using plugins or custom commands.
   

}