export class UAskWelcomePage {

    weblocators = {
        UAElogoLink: '.logo-img',
        SampleQuestionsIcon: '.sample-questions',
        PleaseaskmeaquestionsearchBox: 'div.expando-textarea[data-placeholder="Please ask me a question"]',
        sendButton: '#sendButton',
        microphoneButton: '.btn user-banner-btn input-group-text speech-recognition hide-firefox',
        LanguageOptions: 'select.language-select',
        TermsofServiceLink: 'a[href="/en/UAsk/TermsOfService"]',
        BackButton: 'a[href="/en"]',
        PrivacyPolicyLink: 'a[href="/en/privacy-policy"]',
        ClickHereLink: 'a[aria-label="Click here"]',
    };

    clickUAElogoLink() {
        cy.get(this.weblocators.UAElogoLink).click();// Click on UAE logo to verify page reloads
    }

    clickArabicButton() {
        cy.contains(' العربية').should('be.visible').click()// Confirm new language loaded 
    }
    clickEnglishButton() { 
        cy.contains('English').should('be.visible').click()// Switch back to English
        }

    SampleQuestionsIcon() {
        cy.get(this.weblocators.SampleQuestionsIcon).should('be.visible')
    }

    typeInSearchBox() {
        cy.get(this.weblocators.PleaseaskmeaquestionsearchBox)
        //cy.get('div.expando-textarea').should('have.attr', 'data-placeholder', 'Please ask me a question')
    }

    clickSendButton() {
        cy.get(this.weblocators.sendButton).click();
    }

    MicrophoneButton() {
        cy.get(this.weblocators.microphoneButton).should('be.visible')
    }

    selectLanguageoptions() {
        cy.get(this.weblocators.LanguageOptions).select('en-US');
        cy.get(this.weblocators.LanguageOptions).select('ar-AE');
    }

    clickTermsofServiceLink() {
        cy.get(this.weblocators.TermsofServiceLink).click();
        cy.get('a[href="/en/UAsk/TermsOfService"]').should('be.visible').click()
            
    }

    clickBackButton() {
      cy.get(this.weblocators.BackButton).click();
    }

    clickHowcanIapplyforagoldenVisa() {
        cy.get('.question').contains('How can I apply for a golden visa?').should('be.visible').click()
        cy.get('#chat-new-session-btn').should('be.visible')
        cy.get('span.title').contains('Chat History').should('be.visible').and('not.be.empty') // Step 3: Verify chat history appeared
    }
}