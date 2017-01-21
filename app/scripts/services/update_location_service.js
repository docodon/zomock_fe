'use strict';

angular.module('zomockFeApp')
 .service('UpdateLocationService',function($http, ENV) {
 	this.update_location = function(event_token,location_details)
 	{
 		return $http.put(ENV.apiEndpoint + "/api/v0/update_location.json",
		{ 
			location_details: location_details
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
