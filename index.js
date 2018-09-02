/**
 * Index page
 *
 */
const express = require('express');
const https = require('https');
const app = express();
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const Uber = './routes/Auth/Uber.js';
const passport = require('passport');

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['asdfjasdviuasdaehr'],
  }),
);

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

require('./routes/auth/Uber')(app);
require('./routes/api/routes')(app);
require('./services/passport');

const port = process.env.NODE_ENV || 8080;

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
