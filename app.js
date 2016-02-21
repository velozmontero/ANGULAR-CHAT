angular
    .module('app', ['ngMessages'])
    .controller('MainCtrl', MainCtrl);
    
function MainCtrl() {}
 
var eApp = angular.module("eApp", ['ngSanitize', 'emojiApp']);

emojiApp.controller('emojiController', ['$scope', function($scope) {

    $scope.emojiMessage={};
}]);
