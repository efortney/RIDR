const passport = require('passport');
const yelp = require('./yelp');

module.exports = app => {
  // logout route
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.post('/api/search', (req, res) => {
    let result = yelp.makeRequest(
      req.body.destination,
      req.body.lat,
      req.body.long
    );
    console.log(result);
    res.redirect('/');
  });

  // grabs the current user for the application
  app.get('/api/current_user', (req, res) => {
    console.log('getting user');
    res.send(req.user);
    console.log(req.user);
  });
};
