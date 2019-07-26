/* eslint-disable no-unused-vars */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

if (process.env.env === 'local') {
  // eslint-disable-next-line no-console
  console.log('Test Environment');
  const db = mongoose.connect('mongodb://localhost/exalted');
} else {
  // eslint-disable-next-line no-console
  console.log('Developement');
  const db = mongoose.connect('mongodb+srv://glgonzalez:exalted051389@exalted-ljnph.mongodb.net/test?retryWrites=true&w=majority')
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
}

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Exalted API');
});

app.server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
});

module.exports = app;
