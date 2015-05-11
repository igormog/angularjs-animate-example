var serialAnimation = angular.module('serialAnimation', ['ngAnimate'])
	.controller('mainCtrl', function( $scope ){
		$scope.items = [10,12,13,24,25,26,70,80,83,88,90,95,103,120];
	})