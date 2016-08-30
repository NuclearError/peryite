console.log('Hello from controller.js');
  
var app = angular.module('mainApp', ['ngRoute', 'ngCookies']);  

// not written for compression
 
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'home.html'
	})
	.when('/game', {
		templateUrl: 'game.html'
	}) 
	.otherwise({
		// redirect to homepage 
		redirectTo: '/' 
	})
});  

app.controller('cookieCtrl', ['$scope', '$cookies', function($scope, $cookies) {
  
  // Retrieving a cookie
  var cookieMessage = $cookies.get('cookieAcknowledgement');
  
  console.log('cookieCtrl says that cookieMessage = ' + cookieMessage);
  
  if(cookieMessage != 0 && cookieMessage != undefined){
  	// hide the cookie message markup
  	console.log('hide cookie message');
  } else {
  	// show the cookie message markup
  	console.log('show cookie message');
  }
    
  $scope.acknowledgeCookies = function() {
  	if(cookieMessage == 0) {
  		$cookies.put('cookieAcknowledgement', 'Acknowledged', {'path': '/'});
  	}	
  }
  
  // Setting a cookie
  // if 'that's fine' link is clicked etc ...
  //$cookies.put('cookieAcknowledgement', 'Acknowledged');
}]);

app.controller('MyController1', ['$scope', function(sc) {
    // ...
}]);

app.controller('themeCtrl', ['$scope', function(themeScope) {
    
    // set default
    themeScope.css = 'theme1';  
    
    console.log('Current theme = ' + themeScope.css);
    
    themeScope.themes = [
        { name: 'theme1', url: 'theme1' } , 
        { name: 'theme2', url: 'theme2' } 
    ];
    

}]);

/*

FIXME: Angular cookie code for cookie message; fix the undefined cookies error

TODO: Angular code for switching CSS theme (colours) - this also will require a cookie

TODO: basic social media metadata - twitter etc, og image/data, use realfavicongenerator for icons

TODO: Angular : figure out how to integrate standalone cool stuff (eg. like the bee game) with the overall website 

*/ 
