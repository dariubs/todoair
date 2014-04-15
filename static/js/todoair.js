function MainController($scope){

	$scope.list = [
		];
 
  /*Add to todoList */
	  $scope.add = function() {
	  	$scope.list.push({todo:$scope.todoInput,time:$scope.timeInput, done:0});
	  };

}