import express from 'express';
import { SRIPE_API_KEY } from '../config/config_keys';
import stripe from 'stripe';
// Var
const router = express.Router();
const stripeApi = stripe(SRIPE_API_KEY.secretKey);

router.post('/api/stripe', (req, res) => {
  res.send(req.user);
});

export default router;
