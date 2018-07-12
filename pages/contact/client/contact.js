Template.contact.events({
  "click #inquiry"(event, instance){
    console.log($("#name").val());
    console.log($("#email").val());
    console.log($("#topic").val());
    console.log($("#text").val());
  //  inquiry.insert({name:Name, email:this.u.owner, topic:this.u.owner, inquiry:Meteor.userId()})

  }


})
