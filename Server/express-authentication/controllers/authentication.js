const User = require('../models/user');

exports.signup = (req, res, next) => {
  const email = req.body.email,
    password = req.body.password;

  // Check email
  User.findOne({ email }, (err, existUser) => {
    if (err) return next(err);
    if (existUser) {
      return res.status(422).send({ error: 'Email in use' });
    }
  });

  const user = new User({ email, password });

  user.save((err) => {
    if(err) return next(err);
    
    res.json(user);
  });
};
