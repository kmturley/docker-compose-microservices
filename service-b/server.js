'use strict';

const express = require('express');

const PORT = 8081;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('This is Service B!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
