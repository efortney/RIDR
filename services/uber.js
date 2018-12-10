const passport = require('passport');
const uberStrategy = require('passport-uber-v2').Strategy;
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    console.log('deserialized user');
    done(null, user);
  });
});

passport.use(
  new uberStrategy(
    {
      clientID: keys.uberClientID,
      clientSecret: keys.uberClientSecret,
      callbackURL: '/auth/uber',
      proxy: true
    },
    function(accessToken, refreshToken, profile, done) {
      var user = profile;
      user.accessToken = accessToken;
      return done(null, user);
    }
  )
);


