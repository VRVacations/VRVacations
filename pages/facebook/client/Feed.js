Template.fbtimeline.helpers({
  posts(){
    var myFriends = Friends.find({owner:Meteor.userId()}).fetch();
    var myFriendsList = _.map(myFriends,function(x){return x.friend});
    console.dir(myFriendsList);
    return Posts.find({owner:{$in:myFriendsList}},{sort:{createdAt:-1}})
    //return Posts.find();
  }
})

Template.fbshowpost.events({
  "click #deletebutton" (event,instance){
    Posts.remove(this.p._id);
  }
})

Template.fbshowpost.helpers({
  checker()
  {
    userid=Meteor.userId();
    postid=this.p.owner;
    return userid==postid;

  }
})
