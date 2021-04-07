const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/login.html`);
})

app.get('/login', (req, res) => {
  res.sendFile(`${__dirname}/welcome.html`)
  console.log(req.body)
})

app.post('/login', (req, res) => {
  console.log(req.body);
})






const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening to ${port}...`)
})
