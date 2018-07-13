Meteor.startup(function(){
	console.log("You are about to experience VR Vacations. VR Vacations is the most elegant and realistic VR experience available. Enjoy!")
	if (Jewels.find().count()==0){
		for(var i=0; i<5;i++){
			x = 10*Math.floor(Math.random()*20);
			y = 10*Math.floor(Math.random()*20);
		  Jewels.insert({x,y});
	  }
	}
	



// this is very insecure, but helpful for development
	Meteor.publish('userList', function (){
  return Meteor.users.find({});
});

});
