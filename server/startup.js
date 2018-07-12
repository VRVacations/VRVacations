Meteor.startup(function(){
	console.log("You are about to experience VR Vacations. VR Vacations is the most elegant and realistic VR experience available. Enjoy!")
	if (Jewels.find().count()==0){
		for(var i=0; i<5;i++){
			x = 10*Math.floor(Math.random()*20);
			y = 10*Math.floor(Math.random()*20);
		  Jewels.insert({x,y});
	  }
	}
	if (Pokedex.find().count()==0){
		console.log("Importing Pokedex to db")

			 var data = JSON.parse(Assets.getText(
				 "Pokemon-DB-master/pokedex.json"));
			 console.log("data length = "+data.length);

			 data.forEach(function (item, index, array) {
				 //console.log(index+" "+JSON.stringify(item));
					 Pokedex.insert(item);
			 })
			 console.log("Pokedex imported");
	};

	

// this is very insecure, but helpful for development
	Meteor.publish('userList', function (){
  return Meteor.users.find({});
});

});
