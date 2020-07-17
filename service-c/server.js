'use strict';

const express = require('express');

const PORT = 8082;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('This is Service C!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
