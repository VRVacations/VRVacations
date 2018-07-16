Template.vrsubmit.events(
  {
  "click #vrsubmit"(event, instance){
    var vrlink = instance.$("#vrlink").val();
    console.dir(post);
    Posts.insert(post);
   },

})
