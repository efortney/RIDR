/**
 * This is the route file for handling all authorization requests made to any form of Oauth
 *
 */

const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/uber',
    passport.authenticate('uber', { scope: ['profile'] }),
    (req, res) => {
      res.redirect('/');
    } 
  );

  app.get(
    '/auth/lyft',
    passport.authenticate('lyft', { scope: ['profile'] }),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', failureFlash: true }),
  function(req, res) {
    res.redirect('/');
  });

};
