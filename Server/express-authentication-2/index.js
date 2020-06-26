const express = require('express');
const dotenv = require('dotenv');
const HOST = process.env.HOST || 3000;
const app = express();
// Routers
const userRouter = require('./routes/route_user');
// Dot Env
dotenv.config();

// Use routes
app.use(userRouter);

app.get('/', (req, res) => {
  res
    .send({
      success: true,
    })
    .status(200);
});

app.listen(HOST, () => {
  console.log(`Connected : ${HOST}`);
});
