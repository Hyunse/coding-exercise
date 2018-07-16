// Main Starting point
const express = require('express');
const  http = require('http');
const  bodyParser = require('body-parser');
const  morgan = require('morgan');
const  mongoose = require('mongoose');
const  app = express();

// DB
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });


// App Set Up
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

// Router
const router = require('./router');
app.use(router);

// Server Set Up
const port = process.env.PORT || 3090,
  server = http.createServer(app);

server.listen(port);

console.log(`Server[ Authentication ] Listening On :: ${port}`);
 
