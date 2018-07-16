Template.submit.events({
  "click #submit"(event, instance){
    var profile = Profiles.findOne({owner:Meteor.userId()});
    var now = new Date();
    var text = instance.$("#fb-posttext").val();
    var postLocation = instance.$("#fb-postloc").val();
    var postTitle = instance.$("#fb-posttitle").val();
    var postName = instance.$("#fb-postname").val();
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
})
