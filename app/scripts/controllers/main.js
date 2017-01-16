'use strict';

/**
 * @ngdoc function
 * @name zomockFeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zomockFeApp
 */
angular.module('zomockFeApp')
  .controller('MainCtrl', function ($scope, $routeParams, $location) {

    $scope.fClient_details = $location.search();

  });
