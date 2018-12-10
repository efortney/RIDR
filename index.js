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
const app = express();

require('./models/User');

mongoose.Promise = global.Promise;

mongoose.connect((keys.mongo), (err, res) => {
  if(err){
    console.log('error at mongoose.connect: ' +err);
  }
  console.log('connected successfully to database')
});
require('./services/google');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['asdfjasdviuasdaehr'],
  }),
);

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(passport.initialize());
app.use(passport.session());


require('./routes/auth/Oauth')(app);
require('./routes/api/routes')(app);
require('./services/lyft');
require('./services/uber');;


if (process.env.NODE_ENV === "production") {
  // express will serve index.html file if route is unrecognized
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


app.listen(PORT);
