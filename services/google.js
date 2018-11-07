const passport = require('passport');
const GoogleStrat = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
  console.log(user); 
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
    console.log('user: ' + user);
  });
})

passport.use(
  new GoogleStrat(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleID: profile.id }).save();
      done(null, user);
      console.log("done");
    }
  )
);
