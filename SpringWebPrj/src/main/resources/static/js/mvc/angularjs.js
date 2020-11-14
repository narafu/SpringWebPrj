// 계산기 Controller
var calcApp = angular.module("calc-app", []);
calcApp.controller("calc-controller", function ($scope) {

    $scope.x = 30;
    $scope.y = 10;
    $scope.result = 00;

    $scope.calcClick = function () {
        $scope.result = $scope.x + $scope.y;
    };

});