# CaseStudy-UAskChatbot
# Project Overview:
U-Ask is a generative AI-powered chatbot launched by the UAE Government to support residents and citizens with public services. It interacts in English and Arabic using models  like ChatGPT.
This automation project aims to:
•	Validate the user interface (UI)
•	Verify AI-generated responses
•	Ensure overall reliability
•	Build reusable, maintainable, and scalable test scripts

# Tech Stack Used
1.	Cypress – Automation testing tool for web applications
2.	JavaScript – Programming language for writing test scripts
3.	Visual Studio Code (VS Code) – IDE for code management
4.	Git – Version control system
5.	MochaAwesome Reporter – Generates HTML reports for test execution
6.	Page Object Model (POM) Design Pattern – Ensures a maintainable and reusable framework
7.	Data-Driven Testing – Tests driven by external JSON data (test-data.json)
   
# Project Architecture
 # Cypress Structure
•	Page classes – Contain web element locators and actions
•	Tests – Contain assertions and calls to page methods
•	Cypress config – Configures retries, base URL, timeouts
•	Fixtures – Store data-driven prompts and expected responses
•	Reports – Generate HTML reports (MochaAwesome), screenshots for failures
•	GitHub Repository – Source code management
 # Framework Features
•	Reusable Automation Framework
•	Follows POM design pattern
•	Separates locators, actions, and test logic
•	Ensures maintainability and scalability
•	Data-Driven Testing
•	Supports testing multiple scenarios without changing code
•	Reporting & Logging
•	Generates HTML reports with MochaAwesome
•	Captures screenshots for failed tests
•	Maintains detailed logs for debugging

# Setup & Run Instructions
  # Step 1: Install Prerequisites
  
             Cypress Doc - https://docs.cypress.io/app/get-started/install-cypress
             
             Git – Download Git
             
             Node.js & npm – Download Node.js
             
             IDE – Visual Studio Code recommended
             
  # Step 2: Clone the Repository
         Navigate to your desired folder
         
         cd /path/to/your/folder
         
         Clone the repository
         
         git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
         
         Navigate into the project folder
         
         cd YOUR-REPO-NAME
         
 # Step 3: Open in IDE
      Open the project in VS Code or your preferred IDE.
 # Step 4: Install Dependencies
 
      npm install
      
       This installs all required packages listed in package.json.
 # Step 5: Run the Tests
    Interactive Mode:  
    
    npx cypress open
    
    Headless Mode:   
    
    npx cypress run
    
 # Step 6: View Results
 
    Screenshots for failed tests: /cypress/screenshots
    Videos (optional): /cypress/videos
    HTML reports (MochaAwesome): /cypress/reports or configured report path
    
This framework ensures that UI validations, AI response checks, and reliability tests can be performed efficiently with reusable, scalable, and maintainable code.

