var app = angular.module("myApp");
app.service("gymServices", function ($http) {
    //    this.getAllBLOG = function () {
    //        return $http.get("/api/blogs/");
    //    }
    this.getDetailAboutGym = function () {
            return $http.get("/api/gym/");
        }
        //    this.addCommentPost = function (id, comment) {
        //        console.log("comment " + comment)
        //        return $http.put('/api/blogs/' + id + '/', {
        //            'commentOnPost': comment
        //        });
        //    }
        //    this.addCommentReply = function (comment, id) {
        //            console.log("comment id  " + comment._id + " " + comment.reply)
        //            return $http.put('/api/blogs/' + id + '/?commentId=' + comment._id, {
        //                'commentOnPost': comment.reply
        //            });
        //        }
});

app.controller("homeCtrl", function ($scope, gymServices) {

    $scope.load = function () {
        gymServices.getDetailAboutGym().then(function (gymDetail) {
            $scope.gym = gymDetail.data[0];
        });
    }
    $scope.load();
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});