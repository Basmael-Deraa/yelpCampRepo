var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middlewareObj = require("../middleware");

// INDEX - show all campgrounds
router.get('/',function(req,res){
	Campground.find({},function(err,allCampgrounds){
		if(err) {
			console.log("there is ERROR");
		} else {
			res.render("campgrounds/index", {campgrounds: allCampgrounds});
		}
	});

});

//CREATE - add new campgrounds to DB
router.post('/', middlewareObj.isLoggedIn, function(req,res){
	// get data from form
	var name = req.body.name;
	var price = req.body.price;
	var image = req.body.image;
	var desc = req.body.description;
	var author = {
		id: req.user._id,
		username: req.user.username
	};
	var newCampground = {name: name, price: price, image: image, description: desc, author: author};
  // add new campground and save to the database
	Campground.create(newCampground,function(err,newCreated){
		if(err) {
			console.log(err);
		} else {
			res.redirect("/campgrounds");
		}
	})
})

// New - Display the form to create a new campground
router.get("/new",middlewareObj.isLoggedIn, function(req,res){
	res.render("campgrounds/new");
})

// Show - show more info about campgrounds
router.get("/:id",function(req,res){
	Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
		if(err) {
			console.log(err);
		} else
			res.render("campgrounds/show", {campground: foundCampground});
	});
});

// Edit route
router.get("/:id/edit",middlewareObj.checkCampgroundOwnership, function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
			res.render("campgrounds/edit", {campground: foundCampground});
	});
});

// Update route
router.put("/:id",middlewareObj.checkCampgroundOwnership, function(req,res){
	Campground.findByIdAndUpdate(req.params.id,req.body.campground, function(err, updatedCampground){
		if(err) {
			res.redirect("/campgrounds");
		} else {
			res.redirect("/campgrounds/" + req.params.id);
		}
	});
});

// Delete route
router.delete("/:id",middlewareObj.checkCampgroundOwnership, function(req, res){
	Campground.findByIdAndRemove(req.params.id, function(err){
		if(err) {
			res.redirect("/campgrounds");
		} else {
			res.redirect("/campgrounds");
		}
	})
})

module.exports = router;
