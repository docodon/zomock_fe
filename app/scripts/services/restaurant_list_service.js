'use strict';

angular.module('zomockFeApp')
.service('RestaurantListService',function($http, ENV) {
	this.get_list = function(hash){
		return $http.get(ENV.zomato_api_url + "/search.json",
			{ 
				params: hash,
				headers: {"user-key": ENV["zomato_key"]} 
			})
			.then(function(response) {
			return response.data;
		},function(response) {
			return -1;
		});
	};
});
