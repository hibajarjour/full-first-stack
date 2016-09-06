var app = angular.module("myApp");
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