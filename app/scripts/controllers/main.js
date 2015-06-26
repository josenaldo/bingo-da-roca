'use strict';

/**
 * @ngdoc function
 * @name bingadorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bingadorApp
 */
angular.module('bingadorApp').controller('MainCtrl', function ($scope) {

	$scope.max = 60;

	$scope.toggle = function(id) {

		if($scope.numbers[id].value == 'true') {
			$scope.numbers[id].value = 'false';
		}else {
			$scope.numbers[id].value = 'true';
			$scope.lastNumber = id+1;
		}
	}

	$scope.generate = function() {
		$scope.numbers = [];

		for(var i = 0; i < $scope.max; i ++) {
			$scope.numbers[i] = {id:i, value:'false'};
		}
	}

	$scope.generate();

  });
