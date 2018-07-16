Template.fbtimeline.helpers({
  posts(){
    var myFriends = Friends.find({owner:Meteor.userId()}).fetch();
    var myFriendsList = _.map(myFriends,function(x){return x.friend});
    console.dir(myFriendsList);
    return Posts.find({owner:{$in:myFriendsList}},{sort:{createdAt:-1}})
    //return Posts.find();
    window.addEventListener('load', onVrViewLoad);

    function onVrViewLoad() {
      // Selector '#vrview' finds element with id 'vrview'.
      var vrView = new VRView.Player('#vrview', {
        video: '/url/to/video.mp4',
        is_stereo: true
      });
    }
    // Selector '#vrview' finds element with id 'vrview'.
var vrView = new VRView.Player('#vrview', {
  video: '/url/to/video.mp4',
  is_stereo: true
});
  }
})
<<<<<<< HEAD

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
=======
>>>>>>> 47a2a1a1846e9216cc42d2f0f3e0b6de06bf3f53
