//Creating a Module - Test
(function(){
var app = angular.module("test", [ ]);

app.controller('WikiText', function(){

	this.wikicontent=wikicontent;

});
//Wiki content object
//Need more objects, create an array of objects and use ng-repeat to display
var wikicontent = {

	title: 'Project Sandbox Angular',
	description: 'These webpages are to study the features and capabilities of Angular JavaScript Library by Google',
};

})();
