import express from 'express';
import mongoose from 'mongoose';

// Middlewares
import requireLogin from '../middlewares/requireLogin';
import requireCredits from '../middlewares/requireCredits';

// Var
const router = express.Router();
const Survey = mongoose.models('surveys');

router.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
  const { title, subject, body, recipients } = req.body;
  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(',').map(email => ({email: email.trim()})),
    _user: req.user.id,
    dateSent: Date.now()
});

export default router;
