//Creating a Module - project1
(function()
{
var app = angular.module("project1", [ ]);

app.controller('WikiText', function(){

	this.wikicontent=wikicontent;
	this.wikiSubcontents = wikiSubcontents;

});

//Wiki content object
//Need more objects, create an array of objects and use ng-repeat to display
var wikicontent = {

	title: 'Project Sandbox Angular',
	description: 'These webpages are to study the features and capabilities of Angular JavaScript Library by Google',
};

var wikiSubcontents = [
{title: 'Project 1',
paragraph: 'Project 1, at the moment looks like it is going to be the creation of this website where I am hopping to predominately create this with Angular, but I there also will be the need to understand more about Bootstrap.',
moreText:'If there where more details they will be accessible via this link.',
image:'images/space1.jpeg'},

{title:'Project X',
paragraph:'Lets complete Project 1 first.',
moreText:'Under construction',
image:'images/space2.jpeg'},

{title:'Project X',
paragraph: 'Ditto Project X, and we will see how it goes.',
moreText:'Under construction',
image:'images/space3.jpeg'}

];


})();
