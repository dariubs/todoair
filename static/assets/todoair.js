angular.module('todoair',[])
.controller("MainController",function ($scope){

	if(localStorage["list"]==null && localStorage["cats"]==null){
		$scope.list = [
			];

		$scope.cats = [
		];

		localStorage.setItem('list', JSON.stringify($scope.list));
		localStorage.setItem('cats', JSON.stringify($scope.cats));
	}else {
		$scope.list = JSON.parse(localStorage.getItem('list'));
		$scope.cats = JSON.parse(localStorage.getItem('cats'));

		//$scope.cats = JSON.parse(localStorage["cats"]);
	}
	 
 	/*Add to todoList */
	$scope.addTodo = function() {
	  	$scope.list.push({todo:$scope.todoInput,time:$scope.timeInput, done:false , color:$scope.colorInput, cat:$scope.catName});
		localStorage.setItem('list', JSON.stringify($scope.list));
		$scope.todoInput = "";
		$scope.timeInput = "";
	};

	/*remove from todolist */
	$scope.removeTodo = function(i){
		$scope.list.splice(i,1);
		localStorage.setItem('list', JSON.stringify($scope.list));
	};


	/*Add to todoList */
	$scope.addCat = function() {
		var id = $scope.cats.length;
	  	$scope.cats.push({catID:id,catName:$scope.catInput});
	  	localStorage.setItem('cats', JSON.stringify($scope.cats));
	  	$scope.catInput = "";
	};

	
});


/* jQuery */




