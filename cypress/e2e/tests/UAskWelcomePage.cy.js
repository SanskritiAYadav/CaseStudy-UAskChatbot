import {UAskWelcomePage} from '../../pages/UAsk-WelcomePage'
const welcomePage = new UAskWelcomePage();
describe('Welcome Page UI Validation', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('URL'))//open url for chatbot
      cy.contains('button', 'Accept and continue').click() //Accept Disclaimer
      cy.title().should('eq', 'U-Ask') // Verify right page is loaded
      }) 

      it('TC01:Verify UAsk Page UI open successfully on desktop and mobile', () => {
        cy.viewport(1280, 800) // Desktop view
        welcomePage.clickUAElogoLink() // Click on UAE logo
        cy.title().should('eq', 'U-Ask')
        cy.viewport('iphone-6') // Mobile view
        welcomePage.clickUAElogoLink() // Click on UAE logo
        cy.title().should('eq', 'U-Ask')
        cy.viewport('ipad-2') // Tablet view
        welcomePage.clickUAElogoLink() // Click on UAE logo
        cy.title().should('eq', 'U-Ask')
      })

      it('TC02:Switches from English to Arabic and then again Arabic to English', () => {   
       welcomePage.clickArabicButton() // Click on Language Toggle Button to switch to Arabic
       cy.url().should('eq', 'https://ask.u.ae/ar/')
       welcomePage.clickEnglishButton() // Click on Language Toggle Button to switch to English
       cy.url().should('eq', 'https://ask.u.ae/en/')
       })

      it('TC03:Verify search textbox to ask questions using send button', () => {
       welcomePage.typeInSearchBox()// Type in search box
       welcomePage.clickSendButton()// Click on send button
        })

      it('TC04:Verify that microphone button is visible and interactable', () => {
       welcomePage.MicrophoneButton// Click on microphone button
        })

      it('TC05:Verify that Samples Question Text is visible', () => {
       welcomePage.SampleQuestionsIcon()// Check Sample Questions icon
          })
      it('TC06:Verify questions given in Samples Questions section', () => {
        welcomePage.clickHowcanIapplyforagoldenVisa()// Click on Sample Question 1
        welcomePage.clickUAElogoLink()// Click on UAE logo to verify page reloads
      })

      it('TC09:Verify the Terms of Service link', () => {
          welcomePage.clickTermsofServiceLink()// Click on Terms of Service link
          cy.url().should('include', '/en/UAsk/TermsOfService')
          welcomePage.clickBackButton()// Click on Back button to return to Welcome page
          })

      it('TC10:Verify language dropdown select option', () => {
                  welcomePage.selectLanguageoptions()// Select different language options from dropdown
                 })
                  
  })
