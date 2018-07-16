const express = require('express');
const passport = require('passport');
const Authentication = require('./controllers/authentication');
const passPortService = require('./services/passport');
const router = express.Router();

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

router.get('/', requireAuth, (req, res) => {
  res.send({ hi: 'there' });
});

router.post('/signup', Authentication.signup);
router.post('/signin', requireSignin, Authentication.signin);

module.exports = router;
