// Modules
import express from 'express';
// Services
import './services/service_passport';
// Routes
import authRouter from './routes/route_auth';

// Var
const app = express();

// Use Routers
app.use(authRouter);

// Dynamic Port Binding
const PORT = process.env.PORT || 5000;

app.listen(PORT);
