const router = require('express').Router();
const User = require('../models/User');
const jwtUtil = require('../utils/util_jwt');
const asyncHandler = require('../middlewares/asyncHandler');

router.get(
  '/users',
  asyncHandler(async (req, res) => {
    const users = await User.find({});

    res.send({
      success: true,
      users,
    });
  })
);

router.get(
  '/user',
  asyncHandler(async (req, res, next) => {
    const email = req.query.email;

    const user = await User.findOne({ email });

    if (user) {
      res.send({
        success: true,
        user,
      });
    } else {
      res.send({
        error: 'Not Found',
      });
    }
  })
);

router.post(
  '/signin',
  asyncHandler(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email });

    if (user) {
      user.comparePassword(password, (err, isMatch) => {
        if (err) next(err);

        if (isMatch) {
          const token = jwtUtil.createJWT(user.id);

          res.send({
            success: true,
            token,
          });
        } else {
          res.send({
            message: 'Wrong Password',
          });
        }
      });
    } else {
      res.send({
        error: 'No User',
      });
    }
  })
);

router.post(
  '/signup',
  asyncHandler(async (req, res, next) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    // Check duplicated email
    const user = await User.findOne({ email });

    if (!user) {
      const newUser = new User({ email, name, password });

      newUser.save((err, user) => {
        if (err) return next(err);
        if (!user) return next({ message: 'No user' });

        // Create Token
        const token = jwtUtil.createJWT(user.id);

        res.send({
          success: true,
          token,
        });
      });
    } else {
      res
        .send({
          error: 'Email in use',
        })
        .status(422);
    }
  })
);

router.delete('/user', (req, res) => {
  User.deleteOne({ email: null });
  res.send({
    success: true,
  });
});

module.exports = router;
