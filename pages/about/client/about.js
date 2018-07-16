const team =
  [
    {name:"Alex Chang"    , email: "axchang777@gmail.com" , location:"Virginia", bio: "Alex birthed the idea behind VR Vacations and is experienced in various languages." },
    {name:"Benson Goldman", email:"bgoldman@stuy.edu" , location:"New York", bio: "Benson enjoys working with computers in his free time and has experience in HTML. He also enjoys minecraft and GTA V."},
    {name:"Sean Foody", email:"seanfoody@icloud.com" , location: "Massachusetts", bio: "Sean Foody is an experienced coder, and has experience in strength training."},
    {name:"Kelly Zhang", email:"kelly.zhang721@gmail.com", location: "California", bio: "Kelly has experience working in Unix, Linux, and HTML and will be an incoming freshman at Brandeis in fall 2018."},
    {name:"Fontaine Liu", email:"liufw2@gmail.com", location: "Massachusetts", bio: "Fontaine enjoys coding various projects in his free time."},
    {name:"Elliot Morgenstern", email:"morgensternelliot@gmail.com" , location: "Florida", bio: "Elliot has experience with graphic design and fencing."}
  ];

Template.about.helpers(
 {
   team
 }
)
