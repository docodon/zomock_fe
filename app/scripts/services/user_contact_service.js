'use strict';

angular.module('zomockFeApp')
 .service('UserContactService',function($http, ENV) {
	this.contacts = function(flock_token){
		return $http.post(ENV.flock_api_url + "/v1/roster.listContacts",
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
