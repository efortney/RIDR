/**
 * Index page
 *
 */

const express = require('express');
const https = require('https');
const app = express();

const port = process.env.NODE_ENV || 8080;

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
