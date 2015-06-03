//Define an angular module for our app
var app = angular.module('myApp', []);

app.controller('tasksController', function($scope, $http) {
  getTask(); // Load all available tasks 
  function getTask(){  
  $http.post("phpfiles/getTask.php").success(function(data){
        $scope.tasks = data;
       });
  };
  
  $scope.addTask = function (task) {
    $http.post("phpfiles/addTask.php?task="+task).success(function(data){
        getTask();
        $scope.taskInput = "";
      });
  };

  $scope.deleteTask = function (task) {
    if(confirm("Are you sure to delete this task?")){
    $http.post("phpfiles/deleteTask.php?taskID="+task).success(function(data){
        getTask();
      });
    }
  };

  $scope.toggleStatus = function(item, status, task) {
    if(status=='2'){status='0';}else{status='2';}
      $http.post("phpfiles/updateTask.php?taskID="+item+"&status="+status).success(function(data){
        getTask();
      });
  };

});