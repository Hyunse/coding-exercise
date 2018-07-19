import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { GOOGLE_API_KEY } from './config/keys';

// Var
const app = express();

// Pssport
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

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google', {

}))

// Dynamic Port Binding
const PORT = process.env.PORT || 5000;

app.listen(PORT);
