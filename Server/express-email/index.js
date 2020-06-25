const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const path = require('path');
const app = express();
const PORT = process.env.HOST || 3000;
// Router
const mailRouter = require('./routes/route_mail');

// ENV File
dotEnv.config({ path: path.resolve(__dirname, './.env') });

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

// Router
app.get('/', (req, res) => {
  res
    .send({
      success: true,
    })
    .status(200);
});
app.use(mailRouter);

// Connect Server
app.listen(PORT, () => {
  console.log(`Connected Server :: ${PORT}`);
});
