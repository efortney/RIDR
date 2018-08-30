/**
 * Index page
 * This is the file that will make this all work.
 * Think of it as the Main.java file in a java program.
 */

// These are imports, you can think of them like java import statements
const express = require('express');
const https = require('https');
const app = express();


const port = process.env.NODE_ENV || 8080;

// This is where the server is listening on localhost.
// If we are in production then we will switch to using the NODE_ENV's port.
// IE: Herroku, our container, will set its own port on runtime.
app.listen(port, () => {
  console.log('Listening on port ' + port);
});
