const express = require('express'),
  router = express.Router(),
  Authentication = require('./controllers/authentication');

router.post('/signup', Authentication.signup);

module.exports = router;
