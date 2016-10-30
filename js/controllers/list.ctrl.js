angular.module("movieApp")

.controller("ListCtrl", ["$scope", "$stateParams", "jsonData", function ($scope, $stateParams, jsonData) {

    $scope.categoryID = $stateParams.categoryID;
    console.log('Category Id: ' + $scope.categoryID)

    //create an array where you will store your current books that match your clicked #
    if (!$scope.currentBooks) {
        $scope.currentBooks = [];
    }
    //Create an array that holds (16) books and console it
    if (!$scope.books) {
        $scope.books = jsonData.data.books;
    }
    //Create an array where your current book titles will be stored
    if (!$scope.bookName) {
        $scope.bookName = [];
    }
    if (!$scope.mCategory) {
        $scope.mCategory = jsonData.data.categories;
    }

    console.log("$scope.currentBooks length is :" + $scope.currentBooks.length);

    var numBooks = $scope.books.length;
    //console.log(numBooks);
    for (var i = 0; i < numBooks; i++) {
        if ($scope.books[i].cat_id == $scope.categoryID) {

            // if any of the book objects has the SAME category id # as the button clicked... 
            // store the current books inside $scope.currentBooks 
            // store all titles of selected books inside $scope.bookTitles
            //console.log($scope.books[i].titles);
            //console.log($scope.books[i]);
            //Try appending the result into current books maybe?
            $scope.currentBooks = $scope.books[i];
            //$scope.currentBooks.appendChild($scope.books[i]);
            console.log($scope.currentBooks);
            console.log($scope.mCategory);
            //$scope.categoryName = 
            $scope.bookName = $scope.books[i].title;
            // $scope.bookName = $scope.books.title;
            // display bookName by doing ng-repeat 
            //console.log(jsonData.data.categories[i].title);
            //$scope.categoryTitle = jsonData.data.categories[i];
            //$scope.bookTitles = $scope.books[i].title;
            //$scope.episodes = jsonData.data.books[i].title;
        }
    }

}]);