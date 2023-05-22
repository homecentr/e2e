module.exports = {
  src_folders: ['tests'],
  custom_commands_path: ['nightwatch/commands'],
  custom_assertions_path: ['nightwatch/assertions'],
  plugins: [],
  globals_path: 'nightwatch/globals.js',

  webdriver: {},

  test_workers: {
    enabled: true
  },

  test_settings: {
    default: {
      globals: {
        waitForConditionTimeout: 30000,
        waitForConditionPollInterval: 500
      },
      persist_globals: true,
      screenshots: {
        enabled: "${SCREENSHOTS_ENABLED}",
        on_failure: true,
        path: "screenshots"
      },
      selenium_port: "${WEBDRIVER_PORT}",
      selenium_host: "${WEBDRIVER_HOST}",
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        acceptInsecureCerts: true
      }
    },
    "lab": {
      globals: {
        domainSuffix: "-lab.homecentr.one",
        secretsFile: "secrets.lab.yml"
      }
    },
    "prod": {
      globals: {
        domainSuffix: "-lab.homecentr.one",
        secretsFile: "secrets.prod.yml"
      }
    }
  }
};