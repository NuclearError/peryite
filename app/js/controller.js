console.log('Hello from controller.js');
  
var app = angular.module('mainApp', ['ngRoute', 'ngCookies', 'ngLoadScript']);  

// not written for compression
   
app.config(function($routeProvider) {
  
	$routeProvider
	.when('/', {
		templateUrl: 'home.html'
	})
	.when('/phaser', {
		templateUrl: 'phaser.html'
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
  
app.controller('themeCtrl', ['$scope', '$cookies', function($scope, $cookies) {
    
    // Set the theme, retaining any previous user choices 
    $scope.checkThemeSettings = function() {
      var themeCookie = $cookies.get('themeChoice');
      if(themeCookie == undefined) {
        $scope.css = 'theme1';  
      } else {
        $scope.css = themeCookie;  
      }
    }
    
    $scope.checkThemeSettings();
    
    $scope.themes = [
        { name: 'theme1', url: 'theme1' }, 
        { name: 'theme2', url: 'theme2' }, 
        { name: 'green', url: 'green' } 
    ];
    
    $scope.switchTheme = function(themeURL) {
        $scope.css = themeURL;   
        $cookies.put('themeChoice', themeURL, {'path': '/'});
        $scope.checkThemeSettings();
    }
    


}]);

/*
app.controller('gameCtrl', ['$scope', function($scope) {
    
    console.log('Game Controller says hello.');

}]);
*/
  
/*

FIXME: Make it so that when you have a chosen theme, the icon is a circle with a dot (or an empty circle) (Angular ng-class)

FIXME: Investigate the lazy-loading issue with the Phaser JS files and the game's preloading process. Ideally Phaser shouldn't even boot until the JS files are lazy-loaded fully.

FIXME: Make sure the nav buttons are styled correctly on mobile (including with long names)

TODO: Refactor the config ng-route stuff to be more like the angular-seed example (double check if this is still needed)

TODO: showcase: use of ReactJS, phaser game, clever API calls, use of JS unit testing if possible?

TODO: Refactor / refine the 'base' colours of the styling: rather than just being a bit grey, load a backup stylesheet so that before a cookie is set and a stylesheet is loaded, there isn't a weird flickering

TODO: implement colour designs from Carly (yay!) - do this once the content and functionality is done



*/ 
