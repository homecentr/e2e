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
    // Globals as variables !!!
    default: {
      globals: {
        waitForConditionTimeout: 30000,
        waitForConditionPollInterval: 500
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        path: "screenshots"
      },
      selenium_port: 4444,
      selenium_host: "127.0.0.1",
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true
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