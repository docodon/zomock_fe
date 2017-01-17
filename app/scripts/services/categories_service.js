'use strict';

angular.module('zomockFeApp')
 .service('CategoryService',function($http, ENV) {
	this.categories = function(){
		return $http.get(ENV.zomato_api_url + "/categories.json",
			{ 
				headers: {"user-key": ENV["zomato_key"]} 
			})
			.then(function(response) {
			return response.data;
		},function(response) {
			return -1;
		});
	};
});
