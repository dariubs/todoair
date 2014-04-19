angular.module('todoair',[])
.controller("MainController",function ($scope){

	$scope.list = [
		];

	$scope.cats = [
	];
 
 	/*Add to todoList */
	$scope.addTodo = function() {
	  	$scope.list.push({todo:$scope.todoInput,time:$scope.timeInput, done:false , color:$scope.colorInput, cat:$scope.cat});
	};

	/*remove from todolist */
	$scope.removeTodo = function(i){
		$scope.list.splice(i,1);
	};


	/*Add to todoList */
	$scope.addCat = function() {
		var id = $scope.cats.length;
	  	$scope.cats.push({catID:id , catName:$scope.catInput});
	  	$scope.catInput = "";
	};

	
});


/* jQuery */




