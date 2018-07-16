Template.submit.events({
  "click #submit"(event, instance){
    var profile = Profiles.findOne({owner:Meteor.userId()});
    console.log(Profiles.find().count());
    var now = new Date();
    var text = instance.$("#fb-posttext").val();
    var postLocation = instance.$("#fb-postloc").val();
    var postTitle = instance.$("#fb-posttitle").val();
    var postName = instance.$("#fb-postname").val();
if(postTitle == "") {
  alert("Please give your post a name. (It makes it easier for you to locate it in the future!)")
}
else if (postName=="") {
  alert("Please provide a link to your VR!")
}
else if (postLocation=="") {
  alert("Please provide a location for your VR!")
}
    else{
      console.log(Profiles.findOne({owner:Meteor.userId()}));
      var post = {
        owner:Meteor.userId(),
        name:Profiles.findOne({owner:Meteor.userId()}).name,
        createdAt: now,
        text: text,
        location: postLocation,
        title: postTitle,
        filename: postName,
      };
      console.dir(post);
      Posts.insert(post);
      alert('Your post has been submitted! Go check it out in your feed.')

    }
    }

})
