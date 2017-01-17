'use strict';

angular.module('zomockFeApp')
 .service('HolidayListService',function($http, ENV) {
	this.dates = function(){
		return $http.get(ENV.apiEndpoint + "/api/leaves.json")
		.then(function(response) {
			 return response.data;
		},function(response) {
			return -1;
		});
	};
});
