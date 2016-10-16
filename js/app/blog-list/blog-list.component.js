/**
 * Created by jochem on 16/10/2016.
 */
'use strict';

angular.module('blogList').component('blogList', {
    template: "<div><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
    controller: function ($scope) {
        console.log("hello");
        $scope.title = 'Hi there';
        $scope.clicks = 0;
        $scope.someClickTest = function () {
            console.log("clicked!");
            $scope.clicks += 1;
            $scope.title = 'Clicked ' + $scope.clicks + ' times';
        }
    }
});



