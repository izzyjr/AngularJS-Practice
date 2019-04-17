(function() {

    var app = angular.module("Blog");

    var MyController = function($scope) {

        $scope.title = "About Me | Numero 10";

        $scope.country = "Argentina!"

    };

    app.controller("MyController", MyController);

}());