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
  
      $scope.checkCookieMessageVisibility = function() {  
        if(cookieMessage != 0 && cookieMessage != undefined){
          	return false; // hide message
        } else {
          	return true; // show message
        }
    }
    
  $scope.checkCookieMessageVisibility();
    
  $scope.acknowledgeCookies = function() {
    if(cookieMessage == 0 || cookieMessage == undefined) {
  		$cookies.put('cookieAcknowledgement', 'Acknowledged', {'path': '/'});
  		console.log('cookie message should now hide itself at this point.');
  	}
  	$scope.checkCookieMessageVisibility();
  }
  
}]);

app.controller('themeCtrl', ['$scope', function($scope) {
    
    // set default
    $scope.css = 'theme1';  
    
    $scope.themes = [
        { name: 'theme1', url: 'theme1' } , 
        { name: 'theme2', url: 'theme2' } 
    ];
    
    $scope.switchTheme = function(themeURL) {
        $scope.css = themeURL;   
    }

}]);
  
/*

FIXME: Cookie code works but you only see the positive view results when you refresh the page. Why is it not dynamically showing/hiding the cookie message?

TODO: Angular: implement cookie that remembers which css theme is in use

TODO: basic social media metadata - twitter etc, og image/data, use realfavicongenerator for icons

TODO: Angular : figure out how to integrate standalone cool stuff (eg. like the bee game) with the overall website 

TODO: Refactor the config ng-route stuff to be more like the angular-seed example

*/ 
