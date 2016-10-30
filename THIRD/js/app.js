angular.module("movieApp", ["ui.router"])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "templates/main.html",
                controller: "MainCtrl",
                resolve: {
                    //We can create mulitple objects aside from jsonInfo
                    jsonInfo: function ($http) {
                        //alert("calling series.json");
                        return $http.get("data/data.json").then(
                            function (response) {
                                return response;
                            }
                        );
                    }
                }
            })
            .state("home.list", {
                url: "/list/:categoryID", // Saved in $stateParams inside list.ctrl.js
                templateUrl: "templates/list.html",
                controller: "ListCtrl",
                resolve: {
                    jsonData: function ($http) {
                        //alert("calling titles.json");
                        return $http.get("data/data.json").then(
                            function (response) {
                                return response;
                            }
                        );
                    }
                }
            });

}]);