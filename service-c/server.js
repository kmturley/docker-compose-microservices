'use strict';

const express = require('express');

const ENV = process.env.NODE_ENV;
const PORT = 8080;
const HOST = '0.0.0.0';
const NAME = 'Service C';

const app = express();
app.get('/', (req, res) => {
  res.send(`This is ${NAME}, running in ${ENV} mode!`);
});

app.listen(PORT, HOST);
console.log(`${NAME} is running in ${ENV} mode`);
