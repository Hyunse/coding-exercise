const router = require('express').Router();
const Mailgun = require('mailgun-js');

router.post('/mail', (req, res) => {
  const from = process.env.MAIL_FROM || '';
  const to = req.body.to;
  const subject = req.body.subject;
  const content = req.body.content;
  const mailgun = new Mailgun({
    apiKey: process.env.MAIL_API_KEY,
    domain: process.env.MAIL_DOMAIN,
  });
  const data = {
    from,
    to,
    subject,
    html: content,
  };

  mailgun.messages().send(data, function (err, body) {
    if (err) {
      res.send({
        success: false,
        error: err,
        message: err.message
      });
    } else {
      res
        .send({
          success: true,
          message: 'Sended',
        })
        .status(200);
    }
  });
});

module.exports = router;
