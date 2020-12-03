var mongoose    = require('mongoose');
mongoose.connect("mongodb://localhost:27017/yelp_camp_v3", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

var commentSchema = mongoose.Schema({
    name:String,
    email:String,
    text:String
})

module.exports= mongoose.model("comment",commentSchema);