Template.userList.helpers({
  'users': function () {

    return Meteor.users.find();
  },
  'connections': function(){
    return Connections.find();
  },
  'connect': function() {
    console.log("finding connections!");
    const z = Connections.find();
    z = Meteor.call("getInfo",[]);
    console.log("myIP= "+zz);

    console.log("**** connections = "+JSON.stringify(z.fetch()));
    return z;
  }
});

Template.userList.events({
  'click .add-me-js': function(){
    console.log("clicked!");
    var profile = Profiles.findOne({owner:Meteor.userId()})
    Meteor.call("getInfo", profile.name);

  },

  'click .js-remove-all': function(event){
    console.log("removing...");
    Meteor.call("removeAll");
  },

})
