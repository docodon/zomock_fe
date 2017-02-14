'use strict';

angular.module('zomockFeApp')
 .service('UserGroupService',function($http, ENV) {
	this.groups = function(flock_token){
		return $http.post(ENV.flock_api_url + "/v1/groups.list",
			{ 
				token: flock_token
			})
			.then(function(response) {
			return response.data;
		},function(response) {
			return -1;
		});
	};
});
