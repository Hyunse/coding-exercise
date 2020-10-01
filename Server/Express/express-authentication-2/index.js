require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const HOST = process.env.HOST || 5000;
const MONGO_URI = process.env.MONGO_URI || '';
const app = express();
// Routers
const userRouter = require('./routes/route_user');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Use routes
app.use(userRouter);

app.get('/', (req, res) => {
  res
    .send({
      success: true,
    })
    .status(200);
});

// Use native promise
mongoose.Promise = global.Promise;

// Mongoose & listen server
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    createIndexes: true,
  })
  .then(() => {
    app.listen(HOST, () => {
      console.log(`Connected : ${HOST}`);
    });
  })
  .catch((error) => console.error(error));
