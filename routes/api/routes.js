const passport = require('passport');

module.exports = app => {

    // logout route 
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
      });
}