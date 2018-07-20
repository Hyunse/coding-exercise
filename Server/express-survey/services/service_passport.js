import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { GOOGLE_API_KEY } from '../config/config_keys';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_API_KEY.clientID,
      clientSecret: GOOGLE_API_KEY.clientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
    }
  )
);