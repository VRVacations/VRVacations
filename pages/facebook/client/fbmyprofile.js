Template.fbmyprofile.helpers({
  user(){
    var theProfile = Profiles.findOne({owner:Meteor.userId()});
    if (!theProfile){
      var k = Profiles.find().count();
      Profiles.insert({name:"anonymous"+k,owner:Meteor.userId()});
    } else {
    return theProfile
    }
   },
   name:function() {
     var theProfile = Profiles.findOne({owner:Meteor.userId()});
     return theProfile.name

   }
   

})
