export class UAskChatroom {

    weblocators = {
        ExpandMenuButton:'button[data-bs-original-title="Expand menu"]',
        NewChatButton: '#chat-new-session-btn',
        ChatHistorySection: '#chat-session-buttons-container',
        TextInputSection: 'div[data-placeholder="Please ask me a question"]',
        HideButton: 'button[aria-label="Hide"]',
        DeleteButton: 'button[aria-label="Delete"]',
        ConfirmDeleteOKButton: 'button[aria-label="Confirm Delete"]',
        Copybutton: 'button[aria-label="Copy"]',
        ThumbsUp: 'button[aria-label="Thumbs Up"]',
        ThumbsDown: 'button[aria-label="Thumbs Down"]',
        SearchResultButton: 'button[aria-label="Search Result"]',
        TranslateButton: 'button[aria-label="Translate"]',
        
    }
    clickNewChatButton() {
        cy.get(this.weblocators.NewChatButton).click();
        
    }
    clickExpandMenuButton() {
        cy.get(this.weblocators.NewChatButton).click();}

        Typetext() {
            cy.get(this.weblocators.TextInputSection)
            
        }

    verifyChatHistorySection() {
        cy.get(this.weblocators.ChatHistorySection).should('be.visible');
    }

    verifyChatInputSection() {
        cy.get(this.weblocators.ChatInputSection).should('be.visible');
    }

    verifySearchResultsSection() {
        cy.get(this.weblocators.SearchResultsSection).should('be.visible');
    }
    clickHideButton() {
        cy.get(this.weblocators.HideButton).click();
    }
    clickDeleteButton() {
        cy.get(this.weblocators.DeleteButton).click();
    }
    clickConfirmDeleteOKButton() {
        cy.get(this.weblocators.ConfirmDeleteOKButton).click();
    }
    clickCopybutton() {
        cy.get(this.weblocators.Copybutton).click();
    }
    clickThumbsUp() {
        cy.get(this.weblocators.ThumbsUp).click();
    }
    clickThumbsDown() {
        cy.get(this.weblocators.ThumbsDown).click();
    }

    clickSearchResultButton() {
        cy.get(this.weblocators.SearchResultButton).click();
    }
    clickTranslateButton() {
        cy.get(this.weblocators.TranslateButton).click();
    }
    clickExpandMenuButton() {
        cy.get(this.weblocators.ExpandMenuButton).click();
    }
    typeInSearchBox(text) {
        cy.get(this.weblocators.PleaseaskmeaquestionsearchBox).type(text);
    }

    clickSendButton() {
        cy.get(this.weblocators.sendButton).click();
    }

    clickMicrophoneButton() {
        cy.get(this.weblocators.microphoneButton).click();
    }

    selectLanguageoptions() {
        cy.get(this.weblocators.LanguageOptions).select();
    }

}