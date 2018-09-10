/**
 * This is the route file for handling all authorization requests made to and from Uber
 *
 */

const passport = require('passport');

module.exports = app => {

  app.get('/auth/uber', passport.authenticate('uber', { scope: ['profile'] }), (req, res) => {
    res.redirect('/home');
  });


  
};
