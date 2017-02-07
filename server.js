'use strict';

const express = require('express');

// Constants
const PORT = 8080;

const FOO = process.env.FOO || 'null';
const BAR = process.env.BAR || 'null';

// App
const app = express();
app.get('/', function (req, res) {
  console.log(FOO);
  console.log(BAR);
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
