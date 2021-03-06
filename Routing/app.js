(function() {

    var app = angular.module("Blog", ["ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "views/home.html"
        })
            .when("/aboutme", {
                templateUrl: "views/aboutme.html",
                controller: "MyController"
            })

            .when("/posts", {
                templateUrl: "views/posts.html",
                controller: "MyController"
            })

            .when("/contact", {
                templateUrl: "views/contact.html"
            })

            .otherwise({redirectTo: '/'})
    });

}());