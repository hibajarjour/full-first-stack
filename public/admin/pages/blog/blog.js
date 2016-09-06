var app = angular.module("myApp");

app.controller("blogDetailCtrl", function ($scope, $routeParams, gymServices) {

    var idParam = $routeParams.blogID;
    console.log("idParam: " + idParam);
    $scope.load = function () {
        gymServices.getSpecificBLOG(idParam).then(function (blog) {
            $scope.blog = blog.data;
        });
    }
    $scope.load();
    $scope.addCmt = function (cmt) {
        console.log(cmt)
        gymServices.addCommentPost(idParam, cmt.comment).then(function (response) {
            $scope.comment = " ";
            $scope.load();
        });
    }
    $scope.addReply = function (comment) {
        console.log(comment)
        gymServices.addCommentReply(comment, idParam).then(function (response) {
            $scope.comment = " ";
            $scope.load();
        });
    }
    $scope.showDiv = false;
    $scope.showReply = function () {
        $scope.showDiv = true;
    }
});
app.controller("blogCtrl", function ($scope, gymServices) {
    console.log("Open Blog Controller")
    $scope.load = function () {
        gymServices.getAllBLOG().then(function (blog) {
            $scope.blogs = blog.data;
        });
    }
    $scope.load();

});