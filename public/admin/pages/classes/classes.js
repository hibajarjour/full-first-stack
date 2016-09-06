var app = angular.module("myApp");

app.controller("classCtrl", function ($scope, gymServices) {

    $scope.load = function () {
        gymServices.getClasses().then(function (response) {
            $scope.classes = response.data;
        });
    }
    $scope.load();
     

});