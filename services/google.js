const passport = require('passport');
const GoogleStrat = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  new GoogleStrat(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    function(accessToken, refreshToken, profile, done) {
      var user = profile;
      user.accessToken = accessToken;
      return done(null, user);
    }
  )
);
