

Meteor.methods({

  getInfo: function(userName){
    console.log(userName)



    Connections.remove({localIP:this.connection.clientAddress});
    Connections.insert(
      {userName:userName,localIP:this.connection.clientAddress,createdAt:(new Date())});
    return this.connection.clientAddress;
    }
})
