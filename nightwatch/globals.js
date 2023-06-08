const { decryptSops } = require('sops-wrapper');

module.exports = {
  beforeEach(done) {
    console.log("Loading secrets via SOPS...")

    const secrets = decryptSops(`./environments/${this.secretsFile}`)

    // Expose secrets as globals
    Object.assign(this, secrets)

    done()
  }
}