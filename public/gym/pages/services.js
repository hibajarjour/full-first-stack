var app = angular.module("myApp");
 
app.directive('siteHeader', function () {
    return {
        restrict: 'E',
        template: '<button class="btn">{{back}}</button>',
        scope: {
            back: '@back',
            icons: '@icons'
        },
        link: function (scope, element, attrs) {
            $(element[0]).on('click', function () {
                history.back();
                scope.$apply();
            });
        }
    };
});
app.service("gymServices", function ($http) {

    //blog page
     this.getAllBLOG = function () {
        return $http.get("/api/blogs/");
    }
    this.getSpecificBLOG = function (id) {
        return $http.get("/api/blogs/" + id);
    }
    this.addCommentPost = function (id, comment) {
        console.log("comment " + comment)
        return $http.put('/api/blogs/' + id + '/', {
            'commentOnPost': comment
        });
    }
    this.addCommentReply = function (comment, id) {
            console.log("comment id  " + comment._id + " " + comment.reply)
            return $http.put('/api/blogs/' + id + '/?commentId=' + comment._id, {
                'commentOnPost': comment.reply
            });
        }
    //class page
    this.getClasses = function () {
            return $http.get("/api/Classes/");
        }  
    //about page & home
    this.getDetailAboutGym = function () {
            return $http.get("/api/gym/");
        }  
    this.getAllTraniner = function () {
            return $http.get("/api/traniner/");
        }
    
      this.updateHeart = function (trainer) {
       console.log(trainer.votesLove++)
      return $http.put('/api/traniner/' + trainer._id + '/?heart=""', {
                'votesLove': trainer.votesLove++
            }
                      );
      }
        this.updateLike = function (trainer) {
       console.log(trainer.votesLike++)
      return $http.put('/api/traniner/' + trainer._id + '/?like=""', {
                'votesLike': trainer.votesLike++
            }
                      );
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
