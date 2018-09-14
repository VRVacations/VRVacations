
Template.friends.helpers({
  users(){
    console.log('in friends')
    return Profiles.find();},


})

Template.person.helpers({

  isFriend(){
    console.dir(['in person helper',this])
    return Friends.findOne(
      {friend:this.u.owner,
        owner:Meteor.userId()
      }
   )},

})


Template.person.events({
  "click #js-friend"(event, instance){
    console.log('in friend')
    console.dir(this)
    console.log(JSON.stringify({friend:this.u.owner,owner:Meteor.userId()}))
    Friends.insert({friend:this.u.owner,owner:Meteor.userId()})
  },
  "click #js-defriend"(event,instance){
    console.log('in defriend')
    var z = Friends.findOne({owner:this.u.owner,friend:Meteor.userId()});
    console.log('removing'); console.dir(z);
    Friends.remove(z._id);
  },


   
})
