/**
 * Index page
 *
 */
const express = require('express');
const https = require('https');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');
require('./services/google');
mongoose.connect(keys.mongo);

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['asdfjasdviuasdaehr'],
  }),
);

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

require('./routes/auth/Oauth')(app);
require('./routes/api/routes')(app);
require('./services/lyft');
require('./services/uber');;

app.get('/whatsup', (req, res) => {
  res.send('whats up, duck?');
})

if (process.env.NODE_ENV === "production") {
  // express will serve index.html file if route is unrecognized
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


app.listen(PORT);
