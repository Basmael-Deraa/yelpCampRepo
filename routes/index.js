var express    = require("express");
var router     = express.Router();
var Campground = require("../models/campground");
var User       = require("../models/user");
var passport   = require("passport");

// root route
router.get('/',function(req,res){
	res.render('landing');
});

// show register form
router.get("/register", function(req,res){
  res.render("register");
})

// hadling sign up logic
router.post("/register", function(req,res){
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user){
    if(err) {
      req.flash("error", err.message);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
			req.flash("success", "Welcome to yelpcamp " + user.username);
      res.redirect("/campgrounds");
    });
  });
});

// -------------------
// login routes
// -------------------


router.get("/login", function(req,res){
  res.render("login");
})

router.post("/login", passport.authenticate("local",
  {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
  }), function(req, res){
})

// -------------------
// logout route
// -------------------

router.get("/logout", function(req, res){
  req.logout();
	req.flash("success", "You logged out successfully");
  res.redirect("/campgrounds");
})

module.exports = router;
