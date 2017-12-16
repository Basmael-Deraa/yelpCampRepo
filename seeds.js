var mongoose = require("mongoose"),
  Campground = require("./models/campground"),
  Comment    = require("./models/comment");

var campgroundData = [
	{
		name:"Trees and grass",
		image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Camping_by_Barriere_Lake%2C_British_Columbia_-_20040801.jpg/220px-Camping_by_Barriere_Lake%2C_British_Columbia_-_20040801.jpg",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		name:"lake laky",
		image:"http://s3.amazonaws.com/digitaltrends-uploads-prod/2017/06/camping-tent-1500x1000.png",
		description:"At lectus urna duis convallis convallis. Semper risus in hendrerit gravida. Sagittis purus sit amet volutpat consequat mauris nunc. Egestas integer eget aliquet nibh praesent tristique magna. Viverra orci sagittis eu volutpat. Nulla facilisi nullam vehicula ipsum a. Tristique risus nec feugiat in fermentum. Viverra nibh cras pulvinar mattis nunc sed. Nulla at volutpat diam ut venenatis tellus in. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Leo vel orci porta non pulvinar neque laoreet. Metus aliquam eleifend mi in nulla. Dignissim diam quis enim lobortis scelerisque. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Non diam phasellus vestibulum lorem. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Sit amet venenatis urna cursus eget nunc. Non enim praesent elementum facilisis leo vel."
	}
]

function seedDB(){
	Campground.remove({}, function(err){
		if(err) {
			console.log(err);
		} else {
		    console.log("removed all Campgrounds");
		};
	});
};

module.exports = seedDB;
