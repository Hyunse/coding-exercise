import passport from 'passport';
import mongoose from 'mongoose';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { GOOGLE_API_KEY } from '../config/config_keys';

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_API_KEY.clientID,
      clientSecret: GOOGLE_API_KEY.clientSecret,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (!existingUser) {
        const user = await new User({ googleId: profile.id }).save();
        return done(null, user);
      }

      done(null, existingUser);
    }
  )
);
