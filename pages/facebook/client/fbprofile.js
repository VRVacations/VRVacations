Template.fbinfo.helpers({
  user: function(){
    return Profiles.findOne({owner:Meteor.userId()})
  },

  isSelected(a,b){
    if (a==b){
      return "selected"
    } else {
      return ""
    }
  },



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
    const birthplace = instance.$('#js-birthplace').val();
    console.log('just read '+birthplace);
    const loc = instance.$('#js-loc').val();
    console.log('just read '+loc);
    const gender = instance.$('#js-gender').val();
    console.log('just read '+gender);
    const edu = instance.$('#js-edu').val();
    console.log('just read '+edu);
    const interests = instance.$('#js-interests').val();
    console.log('just read '+interests);
    const public1 = instance.$('#js-public').val();
    console.log('just read '+public1);

    theProfile.name = name;
    theProfile.bday = bday;
    theProfile.birthplace = birthplace;
    theProfile.gender = gender;
    theProfile.edu = edu;
    theProfile.pets = pets;
    theProfile.interests = interests;
    theProfile.public = public1;

    Profiles.update(theProfile._id,theProfile);
    console.log("Profile updated");
  }
})
