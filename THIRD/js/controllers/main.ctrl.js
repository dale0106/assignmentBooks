angular.module("movieApp")
    //My provider here is jsonInfo
    .controller("MainCtrl", ["$scope", "jsonInfo", function ($scope, jsonInfo) {
        //alert("MainCtrl running");
        $scope.categories = jsonInfo.data.categories;
        //console.log($scope.categories);
        //console.log($scope.movies.series);

}]);