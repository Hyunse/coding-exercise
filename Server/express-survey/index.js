import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'HelloWorld' });
});

// Dynamic Port Binding
const PORT = process.env.PORT || 5000;

app.listen(PORT);
