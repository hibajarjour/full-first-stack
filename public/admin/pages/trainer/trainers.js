var app = angular.module("myApp");

app.controller("trainerCtrl", function ($scope, gymServices) {
    $scope.example1model = [];
    $scope.example1data = [{

        className: "Spinning"
    }, {

        className: "Stratching"
    }, {

        className: "Yoga"
    }, {

        className: "abs"
    }, {

        className: "Traniner"
    }, {

        className: "zoumba"
    }];

    $scope.load = function () {
        gymServices.getClasses().then(function (response) {
            $scope.classes = response.data;
        });
        gymServices.getAllTraniner().then(function (Traniners) {
            $scope.traniners = Traniners.data;
        });
    }
    $scope.load();
    $scope.addHeart = function (trainer) {
        console.log("heart");
        //  $scope.newHeart=trainer
        gymServices.updateHeart(trainer).then(function (Traniners) {
            $scope.load();
        });
    };
    $scope.addLike = function (trainer) {
        console.log("Like");
        //  $scope.newHeart=trainer
        gymServices.updateLike(trainer).then(function (Traniners) {
            $scope.load();
        });
    };
    $scope.addTrainer = function (newtrainer) {
        console.log(newtrainer.class);
        //  $scope.newHeart=trainer
        gymServices.addTraniner(newtrainer).then(function (Traniners) {
            $scope.load();
        });
    };


});