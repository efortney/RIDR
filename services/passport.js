const passport = require('passport');
const uberStrategy = require('passport-uber-v2').Strategy;

passport.use(
  new uberStrategy(
    {
      clientID: "XDxhGf5gKETizrCvi6kLmfivLbatNJX_",
      clientSecret: "71zCZTX54_RFpzJndt22SrpjEydNT01kuc5KRbK5",
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
