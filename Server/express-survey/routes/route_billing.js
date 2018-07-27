import express from 'express';
import { SRIPE_API_KEY } from '../config/config_keys';
import stripe from 'stripe';
// Var
const router = express.Router();
const stripeApi = stripe(SRIPE_API_KEY.secretKey);

router.post('/api/stripe', (req, res) => {
  stripeApi.charges.create({
    amount: 500,
    currency: 'usd',
    description: '$5 for 5 credits',
    source: req.body.id
  });
});

export default router;
