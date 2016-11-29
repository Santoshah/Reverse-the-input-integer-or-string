var myApp = angular.module("myModule", []);

myApp.controller('myController', ['$scope', function($scope){
	

	$scope.reverseMe = "";

	
	$scope.seeMeReverse = function(){
		return $scope.reverseMe.split("").reverse().join("");
	}
}])