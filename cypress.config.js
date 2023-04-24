/* eslint-disable global-require */
// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require('cypress')

module.exports = defineConfig({
    env: {
    },
    e2e: {
        specPattern: "apps/**/*.cy.js",
        setupNodeEvents: function (on, config) {
        }
    }
})
