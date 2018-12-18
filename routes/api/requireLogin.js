/**
 * Module responsbile for ensuring that a user is logged in.
 * It can be used in any backend route by requiring it in a file.
 */

module.exports = {
  requireLogin(req, res, next) {
    if (!req.user) {
      res.redirect('/auth/google'); //redirect them to login if they dont have a session and user
    } else {
      next();
    }
  }
};
