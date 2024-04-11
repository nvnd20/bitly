For smoke testing the QR Code Monkey application's main feature QR code generation with custom options using Cypress and JavaScript, I focused on scenarios that ensure the application's core functionalities work as expected. These tests will cover:

1. Basic QR code generation with default settings.
2. QR code generation with a custom color.
3. QR code generation and download functionality.

Prerequisites
- Node.js
- npm (usually comes with Node.js)

Installing
Clone the repository:
https://github.com/nvnd20/bitly.git

Install dependencies:
This will install Cypress and other necessary packages defined in package.json.
npm install

Running the Tests
- Open Cypress Test Runner:
  npx cypress open
  This command opens the Cypress Test Runner GUI, from where you can run individual test file - "qrCodeGeneration.spec.js"

- Alternatively, if you prefer to run the tests in headless mode:
  npx cypress run --spec "cypress/e2e/qrCodeGeneration.spec.js"
  
