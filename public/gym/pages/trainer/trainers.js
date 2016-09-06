var app = angular.module("myApp");

app.controller("trainerCtrl", function ($scope, gymServices) {
  $scope.timetableFromTime=["10","11","12","13","14","15","16"];
  $scope.timetableToTime=["11","12","13","14","15","16","17"];
  $scope.timetableDays=["","MONDAY", "TUESDAY", "WEDNESDAY","THURSDAY", "FRIDAY", "SATURDAY","SUNDAY"];
   $scope.load = function () {
         gymServices.getClasses().then(function (response) {
            $scope.classes = response.data;
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