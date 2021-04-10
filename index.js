const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false});

app.use(express.static('assets'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', '*');
    res.status(200).json({});
  }

  next();
})

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/login.html`);
})

app.get('/login', (req, res) => {
  res.sendFile(`${__dirname}/welcome.html`)
  console.log(req.body)
})

app.post('/login', urlEncoded, (req, res) => {
  res.sendFile(`${__dirname}/welcome.html`)
  console.log(req.body)
})

app.get('/api', urlEncoded, (req, res) => {
  res.json({user: 'KillerPuppy2000'});
})

app.post('/api/people', (req, res) => {
  console.log(req.body);
  res.send('Congratulations! Your data has been posted...')
})




const port = process.env.PORT || 3001;
app.listen(3001, () => {
  console.log(`Listening to 3001...`)
})
