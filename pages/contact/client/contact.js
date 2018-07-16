Template.contact.events({
  "click #inquiry"(event, instance){

    let name = instance.$("#name").val();
    let email = instance.$("#email").val();
    let topic = instance.$("#topic").val();
    let text = instance.$("#text").val();

  if(name == "") {
      alert("Please provide your name.")
    }
  else if(email == "") {
      alert("Please provide your email so we may contact you.")
    }
  else if(topic == "") {
      alert("Please select a topic")
    }

  else{
    console.log($("#name").val());
    console.log($("#email").val());
    console.log($("#topic").val());
    console.log($("#text").val());
  //  inquiry.insert({name:Name, email:this.u.owner, topic:this.u.owner, inquiry:Meteor.userId()})
  alert('Thank you for contacting us. We will be in touch shortly!')
}

    }

})
