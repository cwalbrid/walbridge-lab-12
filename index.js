//we need a controller. In the controller we'll create an array called chores
var app = angular.module('toDoModule', []);

//this pushes new values to our chores array
app.controller('toDoController', function($scope){
	$scope.chores = ['Mow the lawn', 'Walk the dog', 'Take out the trash']
	$scope.onClick = function(choreToAdd){
		$scope.chores.push(choreToAdd);
		$scope.choreToAdd = ""
	};
	$scope.removeChore = function(chore) {
		var index = $scope.chores.indexOf(chore);
		$scope.chores.splice(index, 1);
	}
});


