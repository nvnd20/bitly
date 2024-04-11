const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins')(on, config)
    },
    baseUrl: 'https://www.qrcode-monkey.com/',
    experimentalSessionAndOrigin: true,
    specPattern: 'cypress/e2e/**/*.*',
    defaultCommandTimeout: 60000,
  },
});
