class cookies {
    static acceptCookiesButton = '#onetrust-accept-btn-handler'

    static getAcceptCookiesButton(){
        return cy.get(this.acceptCookiesButton).first()
    }
}
export default cookies