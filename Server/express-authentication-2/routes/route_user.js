const router = require('express').Router();
const User = require('../models/User');

router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});

    res.send({
      success: true,
      users
    });
  } catch (error) {
    res.send({
      success: false,
      error
    });
  }
});

router.post('/user', (req, res) => {
  // login
  
  res.send({
    success: true,
    jwt: ''
  });
});

module.exports = router;
