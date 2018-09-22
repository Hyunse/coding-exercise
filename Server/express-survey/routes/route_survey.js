import express from 'express';
import mongoose from 'mongoose';
import Mailer from '../services/service_mailer';
import surveyTemplate  from '../services/emailTemplates/template_survey';

// Middlewares
import requireLogin from '../middlewares/requireLogin';
import requireCredits from '../middlewares/requireCredits';

// Var
const router = express.Router();
const Survey = mongoose.model('surveys');

router.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
  const { title, subject, body, recipients } = req.body;
  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(',').map((email) => ({ email: email.trim() })),
    _user: req.user.id,
    dateSent: Date.now()
  });

  // Send Mail
  const mailer = new Mailer(survey, surveyTemplate(survey));
});

export default router;
