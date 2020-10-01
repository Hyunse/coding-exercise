import express from 'express';
import { SRIPE_API_KEY } from '../config/config_keys';
import stripe from 'stripe';

// Middlewares
import requireLogin from '../middlewares/requireLogin';

// Var
const router = express.Router();
const stripeApi = stripe(SRIPE_API_KEY.secretKey);

router.post('/api/stripe', requireLogin, async (req, res) => {
  // Stripe API
  const charge = await stripeApi.charges.create({
    amount: 500,
    currency: 'usd',
    description: '$5 for 5 credits',
    source: req.body.id
  });

  // Update User Model
  req.user.credits += 5;
  const user = await req.user.save();

  // Return
  res.send(user);
});

export default router;
