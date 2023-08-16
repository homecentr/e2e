const nodemailer = require("nodemailer");

describe('Mailrelay when accessed locally should', async () => {
  this.tags = ["localonly"]

  // Note: these tests are not running inside of selenium but directly in the runner
  // which is why the tests bypass dns resolution (the runner does not use Homecentr's custom DNS)

  it('Send e-mail', async (browser) => {
    const transport = nodemailer.createTransport({
      host: browser.globals.smtp_relay_host,
      port: 25,
      auth: {
        user: browser.globals.smtp_relay_username,
        pass: browser.globals.smtp_relay_password
      },
      tls: {
        // Server has only domain in certificate and we are using a direct ip to skip dns resolution
        servername: browser.globals.smtp_relay_servername
      }
    });

    const receipt = await transport.sendMail({
      from: browser.globals.smtp_relay_sender,
      to: browser.globals.smtp_relay_recipient,
      subject: "E2E test ✔",
      text: "Hello, world!"
    });

    expect(receipt.accepted.length).to.be.equal(1)
  });
});