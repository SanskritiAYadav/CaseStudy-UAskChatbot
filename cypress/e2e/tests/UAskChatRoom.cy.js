import {UAskChatroom} from '../../pages/UAsk-Chatroom';
import testData from '../../fixtures/test-data.json'
const chatroomPage = new UAskChatroom();
describe('Chatroom UI Validation Page', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('URL'))//open url for chatbot
      cy.contains('button', 'Accept and continue').click() //Accept Disclaimer
      cy.title().should('eq', 'U-Ask')
        cy.get('.question').contains('How can I apply for a golden visa?').should('be.visible').click()
    })

    it('TC01: Verify NewChat button is visible and clickable', () => { 
        chatroomPage.clickNewChatButton()
    })
    it('TC02: Verify Chat History Section is visible', () => {
        chatroomPage.verifyChatHistorySection();
    })
    it('TC03: Verify Expand Menu button is visible and clickable', () => {
        chatroomPage.clickExpandMenuButton()
    })
    it('TC04: Verify textbox and ask question', () => {
        chatroomPage.Typetext(testData.prompt)
    })

})