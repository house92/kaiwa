import passport from "passport";

exports.logout = (req, res) => {
  req.logout();
  req.flash("success", "You are now logged out");
  res.redirect("back");
};

exports.isLoggedIn = (req, res, next) => {
  // first check if the user is authenticated
  if (req.isAuthenticated()) {
    next(); // carry on! They are logged in!
    return;
  }
  req.flash("error", "You must be logged in to access that page");
  res.redirect("back");
};

exports.confirmPasswordMatch = (req, res, next) => {
  if (req.body.password === req.body["confirmedPassword"]) {
    next(); // keepit going!
    return;
  }
  req.flash("error", "Passwords do not match");
  res.redirect("back");
};
