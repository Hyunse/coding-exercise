const express = require('express'),
  router = express.Router();

router.get('/', (req, res, next) => {
  res.send(['waterbottle', 'phone', 'paper']);
});

module.exports = router;
