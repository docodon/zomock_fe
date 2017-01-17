'use strict';

angular.module('zomockFeApp')
 .service('CollectionService',function($http, ENV) {
	this.collections = function(city_id){
		return $http.get(ENV.zomato_api_url + "/collections.json",
			{ 
				params: {'city_id': city_id},
				headers: {"user-key": ENV["zomato_key"]} 
			})
			.then(function(response) {
			return response.data;
		},function(response) {
			return -1;
		});
	};
});
