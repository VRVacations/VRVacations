const team =
  [
    {name:"Alex Chang"    , email: "axchang777@gmail.com" , location:"Virginia", bio: "bio" },
    {name:"Benson Goldman", email:"bgoldman@stuy.edu" , location:"New York", bio: "bio"},
    {name:"Elliot Morgenstern", email:"morgensternelliot@gmail.com" , location: "Florida", bio: "bio"},
    {name:"Sean Foody", email:"seanfoody@icloud.com" , location: "Massachusetts", bio: "bio"},
    {name:"Kelly Zhang", email:"kelly.zhang721@gmail.com", location: "California", bio: "bio"},
    {name:"Fontaine Liu", email:"liufw2@gmail.com", location: "Massachusetts", bio: "bio"},
  ];

Template.about.helpers(
 {
   team
 }
)
