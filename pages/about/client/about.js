const team =
  [
    {name:"Alex Chang"    , email: "axchang777@gmail.com" , location:"Virginia" },
    {name:"Benson Goldman", email:"bgoldman@stuy.edu" , location:"New York"},
    {name:"Elliot Morgenstern", email:"morgensternelliot@gmail.com" , location: "Florida"},
    {name:"Sean Foody", email:"seanfoody@icloud.com" , location: "Massachusetts"},
    {name:"Kelly Zhang", email:"kelly.zhang721@gmail.com", location: "California"},
    {name:"Fontaine Liu", email:"liufw2@gmail.com", location: "Massachusetts"},
  ];

Template.about.helpers(
 {
   team
 }
)
