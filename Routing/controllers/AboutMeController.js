(function() {

    var app = angular.module("Blog");

    var AboutMeController = function($scope) {

        $scope.title = "About Me | Numero 10";

    };

    app.controller("AboutMeController", AboutMeController);

}());