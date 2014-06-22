angular.module('myApp')
.controller('MainController', function($scope) {
    $scope.name = "Ari";
    $scope.sayHello = function() {
        $scope.greeting = "Hello " + $scope.name;
    }
})
