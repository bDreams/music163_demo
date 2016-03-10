/*
 * @Author: dongjiabo
 * @Date:   2016-03-10 17:03:16
 * @Last Modified by:   dongjiabo
 * @Last Modified time: 2016-03-10 17:09:52
 */

'use strict';

(function(angular) {
    angular.module('controller', [
        'discover_controller',
        'download_controller',
        'friend_controller',
        'my_controller'
    ])
        .controller('AppCtrl', ['$scope', function($scope) {

        }]);
})(angular);