const team =
  [
    {name:"Alex Chang"    , email: "axchang777@gmail.com" , location:"Virginia", bio: "Alex created the idea of VR Vacations and is experienced in various languages." },
    {name:"Benson Goldman", email:"bgoldman@stuy.edu" , location:"New York", bio: "Benson enjoys working with computers in his free time and has experience in HTML."},
    {name:"Sean Foody", email:"seanfoody@icloud.com" , location: "Massachusetts", bio: "Sean is an experienced coder, and has experience in strength training."},
    {name:"Kelly Zhang", email:"kelly.zhang721@gmail.com", location: "California", bio: "Kelly has experience working in Unix, Linux, and HTML. She will be an incoming freshman at Brandeis fall 2018."},
    {name:"Fontaine Liu", email:"liufw2@gmail.com", location: "Massachusetts", bio: "Fontaine has no idea what he's doing, codes through human facilitated machine learning"},
    {name:"Elliot Morgenstern", email:"morgensternelliot@gmail.com" , location: "Florida", bio: "Elliot has experience with graphic design and fencing, but learned HTML for this project!"}
  ];

Template.about.helpers(
 {
   team
 }
)
