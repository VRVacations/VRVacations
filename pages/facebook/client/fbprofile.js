Template.fbinfo.helpers({
  user: function(){
    return Profiles.findOne({owner:Meteor.userId()})
  }
})


Template.fbinfo.events({
  "click #js-submit"(event,instance){

    var theProfile = Profiles.findOne({owner:Meteor.userId()});
    if (!theProfile){
      var k = Profiles.find().count();
      Profiles.insert({name:"anonymous"+k,owner:Meteor.userId()});
      theProfile = Profiles.findOne({owner:Meteor.userId()});
    }



    const name = instance.$('#js-name').val();
    console.log('just read '+name);
    const bday = instance.$('#js-bday').val();
    console.log('just read '+bday);
    const gender = instance.$('#js-gender').val();
    console.log('just read '+gender);
    const public = instance.$('#js-public').val();
    console.log('just read '+public);
    const birthplace = instance.$('#js-birthplace').val();
    console.log('just read '+birthplace);
    theProfile.name = name;
    theProfile.bday = bday;
    theProfile.gender = gender;
    theProfile.public = public;
    theProfile.birthplace = birthplace;
    Profiles.update(theProfile._id,theProfile);
  }
})
