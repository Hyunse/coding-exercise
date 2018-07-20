// Modules
import express from 'express';
import mongoose from 'mongoose';
// Config
import { DB_CONFIG } from './config/config_db';
// Services
import './services/service_passport';
// Routes
import authRouter from './routes/route_auth';

mongoose.connect(DB_CONFIG.uri(), { useNewUrlParser: true });
// Var
const app = express();

// Use Routers
app.use(authRouter);

// Dynamic Port Binding
const PORT = process.env.PORT || 5000;

app.listen(PORT);
