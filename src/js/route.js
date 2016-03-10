/*
 * @Author: dongjiabo
 * @Date:   2016-03-10 17:03:24
 * @Last Modified by:   dongjiabo
 * @Last Modified time: 2016-03-10 18:31:50
 */

angular.module('route', ["ngRoute"])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/discover', {
                controller: "AppCtrl",
                templateUrl: "templates/discover.html"
            })
            .when('/my', {
                controller: "MyCtrl",
                templateUrl: "templates/my.html"
            })
            .when('/friend', {
                controller: "FriendCtrl",
                templateUrl: "templates/friend.html"
            })
            .when('/download', {
                controller: "DownloadCtrl",
                templateUrl: "templates/download.html"
            })
            .otherwise({
                redirectTo: '/discover'
            });
    }]);
