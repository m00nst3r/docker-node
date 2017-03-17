'use strict';
console.log(process.env);
const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const FOO = process.env.FOO || 'null';
const BAR = process.env.BAR || 'null';

// App
const app = express();
app.get('/', function (req, res) {
  console.log(FOO);
  console.log(BAR);
  res.send(`${FOO} and ${BAR}`);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
