var mongoose = require("mongoose"),
	comments= require("./comments");

mongoose.connect("mongodb://localhost:27017/yelp_camp_v3", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});



let campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	comments:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:"comment"
	}]
});

module.exports = mongoose.model("campground", campgroundSchema);