'use strict';

/**
 * @ngdoc function
 * @name zomockFeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zomockFeApp
 */
angular.module('zomockFeApp')
  .controller('MainCtrl', function ($scope, $routeParams, $location, $http, ENV) {

    // $scope.fClient = $location.search();
    // $scope.event = JSON.parse($scope.fClient.flockEvent) ;

    $scope.location = {"entity_type":"city","entity_id":5,"title":"Pune","latitude":18.520469,"longitude":73.85662,"city_id":5,"city_name":"Pune","country_id":1,"country_name":"India"};

    $scope.querySearch = function(query){
    	return $http.get("https://developers.zomato.com/api/v2.1/locations.json", 
    		{ params: {query: query} , headers: {"user-key": ENV['zomato_key']} } 
    		).then(function(response){
           	return response.data.location_suggestions;
        	})
        };

      $scope.key = ENV["zomato_key"];

  });
