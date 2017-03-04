const Mailgun       = require('mailgun').Mailgun;
const mailgun       = new Mailgun(API_KEY);
const fromWho      = 'dteam@email.com';

module.exports = {
  sendMailCreated: (recipient, data) => {
    console.log('API KEY: ', API_KEY);
    console.log('recipient: ', recipient);
    console.log(data);
    mailgun.sendText(fromWho, [`Recipient 1 <${recipient}>`],
      'decision maker new poll',
      `You successfully created a new poll, here are your links :\n admin: ${data.admin}\n user: ${data.user}`,
      'noreply@example.com', {},
      function(err) {
        if (err) {
          console.log('Oh noes: ' + err);
        } else {
          console.log('Success');
        }
      });
  },

  sendMailVoted: (recipient, data) => {
    console.log(recipient);
    console.log(data);
    mailgun.sendText(fromWho, [`Recipient 1 <${recipient}>`],
      'decision maker poll update',
      `Your poll has a new vote, check results on you admin link :\n admin: ${data.admin}\n user: ${data.user}`,
      'noreply@example.com', {},
      function(err) {
        if (err) {
          console.log('Oh noes: ' + err);
        } else {
          console.log('Success');
        }
      });
  },

  sendMailInvite: (user, recipient, link) => {
    console.log('Sending Invite');
    console.log(recipient);
    console.log(link);
    mailgun.sendText(fromWho, [`Recipient 1 <${recipient}>`],
      'decision maker poll invite',
      `${user} invites you to vote on the poll, help out here:\n user: ${link}`,
      'noreply@example.com', {},
      function(err) {
        if (err) {
          console.log('Oh noes: ' + err);
        } else {
          console.log('Success');
        }
      });
  }
};
