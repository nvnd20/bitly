class qrCodeGenerationPage {
    static setColors = 'Set Colors'
    static createQRCodeButton = '#button-create-qr-code'
    static qrCodeImage = '.card-img-top'
    static colorPickerInput = 'input[class^="color-picker-input"]'
    static downloadButton = '#button-download-qr-code-png'
    static downloadingMessage = 'Done Generating. Downloading your QR Code.'

    static getSetColors(){
        return cy.contains(this.setColors)
    }

    static getCreateQRCodeButton(){
        return cy.get(this.createQRCodeButton)
    }

    static getQRCodeImage(){
        return cy.get(this.qrCodeImage)
    }

    static getForegroundColorPickerInput(){
        return cy.get(this.colorPickerInput).first()
    }

    static getBackgroundColorPickerInput(){
        return cy.get(this.colorPickerInput).last()
    }

    static getDownloadButton(){
        return cy.get(this.downloadButton)
    }

    static getDownloadingMessage(){
        return cy.contains(this.downloadingMessage)
    }

}
export default qrCodeGenerationPage