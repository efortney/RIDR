const passport = require('passport');
const axios = require('axios');
const yelp = require('./yelp');
const requireLogin = require('./requireLogin').requireLogin;
module.exports = app => {
  // logout route
  app.get('/api/logout', requireLogin, (req, res) => {
    req.logout();
    res.redirect('/');
  });

  /**
   * Performs a search using the user destination, the desired location, and returns the 
   * first available result
   */
  app.post('/api/search', requireLogin, (req, res) => {
    const result = yelp.makeRequest(req.body.destination, req.body.lat, req.body.long);
    res.send('this is the results: ' + result);
  });

  // grabs the current user for the application
  app.get('/api/current_user', requireLogin, (req, res) => {
    console.log('getting user');
    res.send(req.user);
    console.log(req.user);
  });
};
