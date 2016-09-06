var app = angular.module("myApp");

app.controller("aboutCtrl", function ($scope, gymServices) {

    $scope.load = function () {
        gymServices.getDetailAboutGym().then(function (gymDetail) {
            $scope.gym = gymDetail.data[0];
        });
        gymServices.getAllTraniner().then(function (Traniners) {
            $scope.traniners = Traniners.data;
        });
    }
    $scope.load();
    $scope.addHeart=function(trainer){
        console.log("heart");
      //  $scope.newHeart=trainer
         gymServices.updateHeart(trainer).then(function (Traniners) {
                $scope.load();
        });
    } ;
      $scope.addLike=function(trainer){
        console.log("Like");
      //  $scope.newHeart=trainer
         gymServices.updateLike(trainer).then(function (Traniners) {
                $scope.load();
        });
    } ;
    

});