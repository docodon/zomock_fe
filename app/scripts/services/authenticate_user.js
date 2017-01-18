'use strict';

angular.module('zomockFeApp')
 .service('AuthenticateService',function($http, ENV) {
 	this.launch_app = function(event_token)
 	{
 		return $http.post(ENV.apiEndpoint + "/api/v0/launch.json",
		{ 
		},
		{
      		headers:{
      			'event-token': event_token
    		}
    	}
    	).then(function(response) {
			return response.data;
		},function(response) {
			return -1;
		});
 	} 
});
