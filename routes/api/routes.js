const passport = require('passport');

module.exports = app => {
  // logout route
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // grabs the current user for the application
  app.get('/api/current_user', (req, res) => {
    console.log('getting user');
    res.send(req.user);
    console.log(req.user);
  });
};
