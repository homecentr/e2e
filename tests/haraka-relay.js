const nodemailer = require("nodemailer");

describe('Mailrelay when accessed locally should', async () => {
  this.tags = ["localonly"]

  it('Send e-mail', async () => {
    const transport = nodemailer.createTransport({
      host: this.globals.smtp_relay_host,
      port: 25,
      auth: {
        user: this.globals.smtp_relay_username,
        pass: this.globals.smtp_relay_password
      },
    });

    await transport.sendMail({
      from: this.globals.smtp_relay_sender,
      to: this.globals.smtp_relay_recipient,
      subject: "E2E test ✔",
      text: "Hello, world!"
    });
  });
});