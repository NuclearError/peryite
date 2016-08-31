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
  
  $scope.isAcknowledgementCookieUndefined = function() {
    var newCookieCheck = $cookies.get('cookieAcknowledgement');
    if(newCookieCheck == undefined) {
      return true;
    } else {
      return false;
    }
  }
    
  $scope.isAcknowledgementCookieUndefined(); 
    
  $scope.userAcknowledgesCookies = function() {
  	if ($scope.isAcknowledgementCookieUndefined()){
  	  $cookies.put('cookieAcknowledgement', 'Acknowledged', {'path': '/'});
  	}
  	$scope.isAcknowledgementCookieUndefined();
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

TODO: Angular: implement cookie that remembers which css theme is in use

TODO: basic social media metadata - twitter etc, og image/data, use realfavicongenerator for icons

TODO: Angular : figure out how to integrate standalone cool stuff (eg. like the bee game) with the overall website 

TODO: Refactor the config ng-route stuff to be more like the angular-seed example

TODO: Refactor / refine the 'base' colours of the styling: rather than just being a bit grey, load a backup stylesheet so that before a cookie is set and a stylesheet is loaded, there isn't a weird flickering

*/ 
