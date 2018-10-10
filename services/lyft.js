const passport = require('passport');
const lyftStrategy = require('passport-lyft').Strategy;
const keys = require('../config/keys');

passport.use(
  new lyftStrategy(
    {
      clientID: keys.lyftClientID,
      clientSecret: keys.lyftSecret,
      callbackURL: '/auth/lyft',
      proxy: true
    },
    function(accessToken, refreshToken, profile, done) {
      var user = profile;
      user.accessToken = accessToken;
      return done(null, user);
    }
  )
);
