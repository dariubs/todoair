angular.module('todoair',[])
.controller("MainController",function ($scope){

	$scope.list = [
		];
 
 	/*Add to todoList */
	$scope.add = function() {
	  	$scope.list.push({todo:$scope.todoInput,time:$scope.timeInput, done:false});
	};

	/*remove from todolist */
	$scope.remove = function(i){
		$scope.list.splice(i,1);
	};

	$scope.did = function(i){
		$scope.list()
	}
});


