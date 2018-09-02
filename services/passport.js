const passport = require('passport');
const uberStrategy = require('passport-uber-v2').Strategy;
const keys = require('../config/keys');

passport.use(
  new uberStrategy(
    {
      clientID: keys.uberCLientID,
      clientSecret: keys.uberClientSecret,
      callbackURL: 'http://localhost:3000/auth/uber',
      proxy: true
    },
    function(accessToken, refreshToken, profile, done) {
      var user = profile;
      user.accessToken = accessToken;
      return done(null, user);
    }
  )
);
