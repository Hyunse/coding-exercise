// Modules
import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import bodyParser from 'body-parser';
// Config
import { DB_CONFIG } from './config/config_db';
import { COOKIE_KEY } from './config/config_keys';
// Models
import './models/User';
import './models/Survey';
import './models/Recipient';
// Services
import './services/service_passport';
// Routes
import authRouter from './routes/route_auth';
import billingRouter from './routes/route_billing';
import surveyRouter from './routes/route_survey';

// Connect mongo
mongoose.connect(
  DB_CONFIG.uri(),
  { useNewUrlParser: true }
);

// Var
const app = express();

// Body Parser
app.use(bodyParser.json());
// Init Middleware
app.use(
  cookieSession({
    // 30 Days
    maxAge: 30 * 24 * 60 * 1000,
    keys: [COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Use Routers
app.use(authRouter);
app.use(billingRouter);
app.use(surveyRouter);

// Dynamic Port Binding
const PORT = process.env.PORT || 5000;

app.listen(PORT);
