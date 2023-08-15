const nodemailer = require("nodemailer");

describe('Mailrelay when accessed locally should', async () => {
  this.tags = ["localonly"]

  it('Send e-mail', async () => {
    const transport = nodemailer.createTransport({
      host: this.globals.smtp_relay_host,
      port: 25,
      secure: true
    });

    await transport.sendMail({
      from: "TBA: From SOPS",
      to: "TBA: From SOPS",
      subject: "E2E test ✔",
      text: "Hello, world!" // plain text body
    });
  });
});