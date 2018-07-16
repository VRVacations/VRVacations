Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route("VR",'demo');
Router.route('contact');
Router.route('chat');
Router.route('about');
Router.route('faq');
Router.route('pokemon');
Router.route('pokemonData/:_id',
{name:"pokemonData",
 data: function(){
	 const c = Pokedex.findOne(this.params._id);
   c.ename = c.ename.toLowerCase()
	 return c;
 }});

 Router.route('image/:_id',
 {name:"virtualreality",
  data: function(){
 	 const c = Posts.findOne(this.params._id);
 	 return c;
  }});

Router.route('apidemo')
Router.route('firefly')
Router.route('draw')
Router.route('graphics')


Router.route("feed",'fbtimeline');
Router.route('fbprofile')
Router.route('friends');
Router.route("myprofile",'fbmyprofile');
Router.route('fbinfo')
Router.route('fbgoback')
Router.route('fb-makepost')
Router.route('submit');
Router.route('game');
