const express = require("express"),
	app = 		express(),
	mongoose = 	require("mongoose"),
	seedDB	= 	require("./models/seedDB"),
	Comment=	require("./models/comments");
seedDB();
var campground = require("./models/campground");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));



// campground.create(
// 	{
// 		name: "January: Dodital Winter Trek",
// 		image:
// 			"https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/01/January-Dodital-Winter-Trek.jpg",
// 		description: `Dodital is one of the best trekking places in India for those who love snow but are new to the trekking hobby. The adventure treks to these snow-capped mountains involve camping around the beautiful Dodi lake – a lake that holds a reputation for its Himalayan Golden Mahseer Fish – and hikes through oak woods, pines, & rhododendron forests. Dodital is amongst the most popular trekking places in India.

//     Altitude: 3,050 m
//     Duration: 5 days
//     Level of difficulty: Easy
//     Route: Sangam Chatti – Agoda – Bebra – Manjhi – Dodital – Darwa Pass
//     Highlights: Fish feeding at Dodi Lake camp, views of Bandarpoonch peak (Tail of Lord Hanuman) & Dhaula Dhar ridges, and side strip to Yamunotri base camp
//     Other options for the month: Nag Tibba trek, Auli Gorson winter trek, Kedarkantha winter trek, and Dayara Bugyal trek`,
// 	},
// 	{
// 		name: `February: Chadar Trek`,
// 		image: `https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2015/04/Chadar-Trek_23rd-oct.jpg`,
// 		description: `Those looking for some high on adventure trekking trips in India must head to Ladakh in winter. Of all the winter adventure treks that one can opt for in this region, the Chadar Trek is the most challenging one. The trekking adventure involves walking on a sheet of ice that is formed when the temperature falls to as low as – 35° Celsius.

//     Altitude: 3850 m
//     Duration: 9 days
//     Level of difficulty: Challenging
//     Route: Chilling – Zaribago – Deepyokma – Naerak Pullu – Lingshed – Nyarakpulu – Tso Mopoaldar – Tilatdo – Chilling
//     Highlights: Shanti Stupa and Walk on frozen river
//     Other options for the month: Kuari Pass winter trek, Snow Leopard trek, Chopta Chandrashila winter trek, Dzongri winter trek, and Brahmatal trek`,
// 	},
// 	{
// 		name: `March: Chopta Chandrashila Winter Trek`,
// 		image: `https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/01/Chopta-Chandrashila.jpeg`,
// 		description: `Some of the adventure treks in Indian Himalayas take to you to some high altitude religious places. One such trekking adventure is the Chopta Chandrashila winter trek that involves a hike to the highest Shiva temple. Other attractions include Deoria Tal Lake and remote villages nestled in the backdrop of the Chopta Valley. Himalayan Monal, Hill Prinia, Golden Eagle, and Lammergeier are some of the birds that one will come across on this adventurous hike.

//     Altitude: 4,090 m
//     Duration: 7 days
//     Level of difficulty: Challenging
//     Route: Ukhimath – Deoria Tal – Sari – Chopta – Tungnath – Chandrashila
//     Highlights: World’s highest Shiva temple at Tungnath, Chandrashila (moon rock), bird-watching in Chopta, and views of Nanda Devi & Trishul peaks
//     Other options for the month: Nag Tibba winter trek, Auli Gorson winter trek, Kedarkantha winter trek, Chadar trek, Triund trek, Har ki Dun winter trek, and Dzongri winter trek`,
// 	},
// 	{
// 		name: `April: Kedarkantha Trek`,
// 		image: `https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/01/Kedarkantha-Trek.jpg`,
// 		description: `Kedarkantha is one of the best trekking places in north India. The trekking adventure through the enchanting forest goes on to the snow-covered lands in Uttarakhand. And then there are pretty campsites surrounded by giant pines. If you an easy trek amidst the lush green valleys of Uttarakhand then this could be one best escape for you!

//     Altitude: 3,500 m
//     Duration: 6 days
//     Level of difficulty: Easy
//     Route: Sankri – Juda ka Talab – Kedarkantha Base – Kedarkantha peak – Hargaon camp – Sankri
//     Highlights: Juda-Ka-Talab & Hargaon campsites surrounded by giant pines and 360-degree view of famous mountain summits, Kempty falls, Tons Valley, and Sankri
//     Other options for the month: Bagini Glacier trek, Sandakphu trek, Triund trek, and Sudhagad Fort trek`,
// 	},
// 	{
// 		name: `May: Lamayuru – Alchi Trek`,
// 		image: `https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/01/Lamayuru-%E2%80%93-Alchi-Trek.jpg`,
// 		description: `Lamayuru and Alchi are among the best trekking places in India for those who want a short & easy trek in the scenic hills of Ladakh. And the chance to interact with the inhabitants of the remotest villages and an option to visit a large number of monasteries en route makes this trekking adventure all the more delightful.

//     Altitude: 5200 m
//     Duration: 5 days
//     Level of difficulty: Easy
//     Route: Lamayuru – Wanla – Urshi – Tar La – Tar – Mangyu – Gera – Lardo – Alchi
//     Highlights: Lamayuru monastery, Indus river, Sham valley, Alchi monastery, Ladakhi culture, Remotest villages
//     Other options for the month: Harishchandragad trek, Roopkund trek, Triund trek, Kheerganga trek, and Sudhagad Fort trek`,
// 	},
// 	function (err, campgrounds) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log("succesfully entered data in database ");
// 			console.log(campgrounds);
// 		}
// 	}
// );

// let campgrounds = [
// 	{
// 		name: "Dodital Winter Trek",
// 		image:
// 			"https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/01/January-Dodital-Winter-Trek.jpg",
// 	},
// 	{
// 		name: "Chadar Trek",
// 		image:
// 			"https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2015/04/Chadar-Trek_23rd-oct.jpg",
// 	},
// 	{
// 		name: "Chopta Chandrashila Winter Trek",
// 		image:
// 			"https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/01/Chopta-Chandrashila.jpeg",
// 	},
// 	{
// 		name: "Kedarkantha Trek",
// 		image:
// 			"https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/01/Kedarkantha-Trek.jpg",
// 	},
// 	{
// 		name: "Alchi Trek",
// 		image:
// 			"https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/01/Lamayuru-%E2%80%93-Alchi-Trek.jpg",
// 	},
// 	{
// 		name: "Roopkund Trek",
// 		image:
// 			"https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/01/Roopkund-Trek.jpg",
// 	},
// 	{
// 		name: "Valley Of Flowers Trek",
// 		image:
// 			"https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/01/Valley-Of-Flowers-Trek.jpg",
// 	},
// ];



app.get("/", function (req, res) {
	res.render("home.ejs");
});
app.get("/campgrounds", function (req, res) {
	campground.find({}, function (err, allCampgrounds) {
		res.render("campgrounds", { campgrounds: allCampgrounds });
	});
	// res.render("campgrounds", { campgrounds: campgrounds });
});
app.get("/new", function (req, res) {
	res.render("new");
});
app.get("/campgrounds/:id", function (req, res) {
    let campid = req.params.id;
    campground.find({_id:campid}).populate("comments").exec(function(err,campinfo){
        if(err){
            console.log(err);
        }else{
            res.render('campground-id',{campgrounds:campinfo})
        }
    })
    
});

app.get("/campgrounds/:id/comment/new",function(req,res){
	let campId=  req.params.id;
	res.render("comment-form",{campId:campId})
})

app.post("/campgrounds", function (req, res) {
	let newName = req.body.newName;
	let newUrl = req.body.newUrl;
	let description = req.body.description;
	let newcampground = { name: newName, image: newUrl,description:description };
	campground.create(newcampground, function (err, newlycreated) {
		if (err) {
			console.log(err);
		} else {
			console.log("campground succesfully added:");
			console.log(newlycreated);
			res.redirect("campgrounds");
		}
	});
	//  console.log(typeof(campgrounds[7]['image']));
	// res.send("welcome to post page")
});


app.post("/campgrounds/:id",function(req,res){
	let campgroundId= req.params.id;
	let newName = req.body.newName;
	console.log(req.body.newName);
	let newEmail = req.body.newEmail;
	let newComment = req.body.newComment;
	let newFile = { name: newName, email: newEmail,text:newComment };
	Comment.create(newFile,function(err,commentcreated){
		if(err){
			console.log(err)
		}else{
			console.log(commentcreated);
			campground.findById(campgroundId,function(err,camp1){
				if(err){
					console.log(err);
				}else{
					console.log(camp1)
					camp1.comments.push(commentcreated);
					camp1.save(function(err,camp2){
						if(err){
							console.log(err)
						}else{
							let campid = req.params.id;
						campground.find({_id:campid}).populate("comments").exec(function(err,campinfo){
							if(err){
								console.log(err);
							}else{
								res.render('campground-id',{campgrounds:campinfo})
							}
						})
						}
					})
				}

			});
		}
	})
	
})

const hostname = "127.0.0.2";
const port = 3000;
app.listen(port, hostname, () => {
	console.log("Server Started running at 127.0.0.2:3000");
});
