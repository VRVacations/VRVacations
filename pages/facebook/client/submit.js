Template.submit.events({
  "click #submit"(event, instance){
    var profile = Profiles.findOne({owner:Meteor.userId()});
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
      var post = {
        owner:Meteor.userId(),
        name:profile.name,
        createdAt: now,
        text: text,
        location: postLocation,
        title: postTitle,
        filename: postName,
      };
      console.dir(post);
      Posts.insert(post);
    }
    }

})
