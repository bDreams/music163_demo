angular.module('App', ["ngRoute"])
    .controller('AppCtrl', ['$scope', function($scope) {

    }])

.controller('MyCtrl', ['$scope', function($scope) {

    }])
    .controller('FriendCtrl', ['$scope', function($scope) {

    }])
    .controller('DownloadCtrl', ['$scope', function($scope) {

    }])
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
