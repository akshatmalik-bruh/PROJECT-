import express from 'express';
const app = express();
const port = 6969 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World! from 69');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});