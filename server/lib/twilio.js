const accountSid    = process.env.TWILIO_ACCOUNT_SID;
const authToken     = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber  = process.env.TWILIO_NUMBER;
const myNumber      = process.env.MY_NUMBER;
const twilio        = require('twilio');
const client        = new twilio.RestClient(accountSid, authToken);

function sendSmsInvite(user, link, recipient) {
  client.messages.create({
    body: `${user} invites you to vote for a new poll, you can vote on this link: ${link}`,
    to: recipient,
    from: twilioNumber
  }, function(err, message) {
    console.log(err);
  });
}

module.exports = {

  sendSmsInvites: (user, link, recipients) => {
    recipients.forEach(recipient => {
      sendSmsInvite(user, link, recipient);
    });
  }
};