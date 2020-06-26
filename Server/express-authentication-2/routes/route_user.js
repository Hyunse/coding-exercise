const router = require('express').Router();

router.get('/users', (req, res) => {
  // Find All users

  res.send({
    success: true,
    users: []
  });
});

router.post('/user', (req, res) => {
  // login
  
  res.send({
    success: true,
    jwt: ''
  });
});

module.exports = router;
