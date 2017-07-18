'use strict';
const express = require('express');
let state = {
    generateFailure: false
};

// Constants
const PORT = process.env.PORT || 8080;
const FOO = process.env.FOO || 'null';
const BAR = process.env.BAR || 'null';

// App
const app = express();
app.get('/', function (req, res) {
  res.send(`${FOO} and ${BAR}`);
});

app.get('/guid', (req, res) => {
  if (state.generateFailure) {
    return res.status(500).end();
  }
  res.json({"guid": uuid.v4(), "container": hostname})
});

app.post("/toggle.failure", (req, res) => {
    state.generateFailure = !state.generateFailure;
    res.status(200).end();
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
